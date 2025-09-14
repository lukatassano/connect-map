import { ArrowBack, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import type { LatLng } from "leaflet";
import { useFormContext } from "react-hook-form";
import { confirmDialogOpenAtom, isSubmitingAtom } from "../atoms/form.atoms";
import { useCityCoordinates } from "../hooks/queries/location.query";
import { useTranslation } from "../hooks/translate.hook";
import type { PinType } from "../types/pin.types";
import { fromArraytoLatLng } from "../utils/coordinate.utils";
import { DragMap } from "./drag-map";

export function ConfirmDialog() {
	const t = useTranslation();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const { setValue, watch } = useFormContext<PinType>();

	const city = watch("city");
	const state = watch("state");
	const country = watch("country");
	const latitude = watch("latitude");
	const longitude = watch("longitude");

	const address = {
		city,
		country,
		state,
	};

	const { data: center, isLoading } = useCityCoordinates(address);

	const isSubmiting = useAtomValue(isSubmitingAtom);
	const [dialogMessageOpen, setDialogMessageOpen] = useAtom(
		confirmDialogOpenAtom,
	);

	function handleCloseDialogMessage() {
		setDialogMessageOpen(false);
	}

	function reviewAddress() {
		setValue("latitude", undefined);
		setValue("longitude", undefined);
		handleCloseDialogMessage();
	}

	function onChangeMapCenter(coords: LatLng) {
		setValue("latitude", coords.lat.toString());
		setValue("longitude", coords.lng.toString());
	}

	const position =
		typeof latitude === "string" && typeof longitude === "string"
			? fromArraytoLatLng([latitude, longitude])
			: center;

	return (
		<Dialog
			open={dialogMessageOpen}
			onClose={handleCloseDialogMessage}
			component={"form"}
			fullScreen={fullScreen}
		>
			<DialogTitle>{t("oops")}</DialogTitle>
			<DialogContent>
				<DialogContentText>{t("address.addressNotFound")}</DialogContentText>

				<Box display="flex" height={500} flex={1} mt={2}>
					<DragMap.MapBox center={center} isLoading={isLoading}>
						<DragMap.CenteredMarker
							position={position}
							onChange={onChangeMapCenter}
						/>
					</DragMap.MapBox>
				</Box>
			</DialogContent>
			<DialogActions>
				<Box display="flex" gap={1}>
					<Button
						onClick={reviewAddress}
						color="primary"
						variant="outlined"
						startIcon={<ArrowBack />}
					>
						{t("address.reviewAddress")}
					</Button>

					<LoadingButton
						loading={isSubmiting}
						type="submit"
						variant="contained"
						loadingPosition="end"
						endIcon={<Save />}
						color="primary"
					>
						{t("submit")}
					</LoadingButton>
				</Box>
			</DialogActions>
		</Dialog>
	);
}
