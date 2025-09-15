import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowBack, ArrowForward, Close, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Fade,
	IconButton,
	Step,
	StepLabel,
	Stepper,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useAtom } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { confirmDialogOpenAtom, isSubmitingAtom } from "../../atoms/form.atoms";
import {
	activeStepAtom,
	handleBackAtom,
	handleNextAtom,
	handleResetActiveStepAtom,
} from "../../atoms/stepper.atoms";
import { ConfirmDialog } from "../../components/confirm-dialog";
import { AppRoutes } from "../../constants/routes.consts";
import { useNavigation } from "../../hooks/navigate.hook";
import { usePins } from "../../hooks/pin.hook";
import { useTranslation } from "../../hooks/translate.hook";
import { translate } from "../../intl/translate";
import { pinSchema } from "../../schemas/pin.schema";
import { searchLocationByAddress } from "../../service/address.service";
import { pinService } from "../../service/pin.service";
import type { PinType } from "../../types/pin.types";
import { tryCatch } from "../../utils/try-catch.utils";
import { AddressForm } from "./components/address-form";
import { PersonalForm } from "./components/personal-form";

type StepType = {
	id: number;
	label: string;
	requiredFields?: Array<keyof PinType>;
};

const personalDataStep: StepType = {
	id: 0,
	label: translate("personalData.personalData"),
	requiredFields: ["name", "phone"],
};

const addressStep: StepType = {
	id: 1,
	label: translate("address.address"),
};

const steps = [personalDataStep, addressStep];

export const PinForm = () => {
	const t = useTranslation();
	const theme = useTheme();
	const navigate = useNavigation();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { mutate } = usePins();

	const [activeStep] = useAtom(activeStepAtom);
	const [, handleResetActiveStep] = useAtom(handleResetActiveStepAtom);
	const [, handleBack] = useAtom(handleBackAtom);
	const [, handleNext] = useAtom(handleNextAtom);
	const [isSubmiting, setIsSubmiting] = useAtom(isSubmitingAtom);
	const [dialogMessageOpen, setDialogMessageOpen] = useAtom(
		confirmDialogOpenAtom,
	);

	const methods = useForm<PinType>({
		resolver: zodResolver(pinSchema),
	});

	const { handleSubmit, trigger, reset } = methods;

	const finalStep = steps.length - 1;
	const isFinalStep = activeStep === finalStep;
	const showNextButton = !isFinalStep;

	const isStepValid = async () => {
		const stepRequiredFields = steps[activeStep].requiredFields;

		if (stepRequiredFields) {
			return await trigger(stepRequiredFields);
		}

		return true;
	};

	const nextStep = async () => {
		const isValid = await isStepValid();
		if (!isValid) return;

		handleNext();
	};

	function handleCloseDialogMessage() {
		setDialogMessageOpen(false);
	}

	async function searchCoords(form: PinType) {
		const { data: locationData } = await tryCatch(
			searchLocationByAddress(form),
		);

		if (locationData) return locationData;

		if (form.latitude && form.longitude) {
			return { lat: form.latitude, lon: form.longitude };
		}

		setDialogMessageOpen(true);
		setIsSubmiting(false);

		if (dialogMessageOpen) return { lat: "-1", lon: "-1" };

		throw new Error("Address not found");
	}

	async function handleSubmitForm(form: PinType) {
		setIsSubmiting(true);

		const result = await searchCoords(form);
		const { lat, lon } = result;

		const body: PinType = {
			...form,
			latitude: lat,
			longitude: lon,
		};

		const { data: newPin, error } = await tryCatch(pinService.save(body));

		if (error) {
			setIsSubmiting(false);
			return;
		}

		mutate((state) => [...(state || []), newPin.data]);

		handleResetActiveStep();
		handleCloseDialogMessage();
		reset({});
		setIsSubmiting(false);
		closeForm();
	}

	function closeForm() {
		navigate(AppRoutes.Map);
	}

	return (
		<Box>
			<FormProvider {...methods}>
				<Dialog open maxWidth="lg" fullScreen={fullScreen} onClose={closeForm}>
					<DialogTitle>
						{t("register")}

						<IconButton
							aria-label="close"
							onClick={closeForm}
							sx={{
								position: "absolute",
								right: 8,
								top: 8,
								color: (theme) => theme.palette.grey[500],
							}}
						>
							<Close />
						</IconButton>
					</DialogTitle>
					<Box
						component="form"
						display="flex"
						flex={1}
						flexDirection="column"
						onSubmit={handleSubmit(handleSubmitForm)}
					>
						<DialogContent sx={{ display: "flex", flexDirection: "column" }}>
							<Box padding={0}>
								<Stepper activeStep={activeStep}>
									{steps.map(({ id, label }) => (
										<Step key={id}>
											<StepLabel>{label}</StepLabel>
										</Step>
									))}
								</Stepper>
							</Box>
							<Box
								display="flex"
								gap={2}
								flexDirection="column"
								justifyContent="space-between"
								flex={1}
							>
								<Box
									overflow="hidden"
									display="flex"
									minHeight={fullScreen ? undefined : 550}
									minWidth={fullScreen ? undefined : 500}
								>
									<Fade in={activeStep === 0} timeout={300} unmountOnExit>
										<Box flex={1} width={500}>
											<PersonalForm />
										</Box>
									</Fade>
									<Fade in={activeStep === 1} unmountOnExit>
										<Box flex={1}>
											<AddressForm />
										</Box>
									</Fade>
								</Box>

								<Box display="flex" gap={1}>
									<Button
										onClick={handleBack}
										fullWidth
										variant="outlined"
										disabled={activeStep === 0}
										startIcon={<ArrowBack />}
									>
										{t("back")}
									</Button>

									<LoadingButton
										loading={isSubmiting}
										type={showNextButton ? "button" : "submit"}
										variant="contained"
										loadingPosition="end"
										color="primary"
										endIcon={showNextButton ? <ArrowForward /> : <Save />}
										onClick={showNextButton ? nextStep : undefined}
										fullWidth
									>
										{showNextButton ? t("next") : t("submit")}
									</LoadingButton>
								</Box>
							</Box>

							<ConfirmDialog />
						</DialogContent>
					</Box>
				</Dialog>
			</FormProvider>
		</Box>
	);
};
