import { Close, MapSharp, Phone, WhatsApp } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	Skeleton,
	Tooltip,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { AppRoutes } from "../constants/routes.consts";
import { useNavigation } from "../hooks/navigate.hook";
import { usePinQuery } from "../hooks/queries/pin.query";
import { useTranslation } from "../hooks/translate.hook";
import { theme } from "../theme";
import { formatAddress, formatGoogleMapsAddress } from "../utils/address.utils";
import { openMaps } from "../utils/google-maps.utils";
import { phoneCall } from "../utils/phone-call.utils";
import { openWhatsApp } from "../utils/whatsapp.utils";
import { SelectedPinBox } from "./styles";

export function SelectedPin() {
	const translate = useTranslation();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const params = useParams();
	const navigate = useNavigation();

	const condition = typeof params.id !== "undefined";
	const pinId = Number(params.id);

	const { data: pin, isLoading } = usePinQuery({
		id: pinId,
		condition,
	});

	function handleClose() {
		navigate(AppRoutes.Map);
	}

	function handleCall(): void {
		if (!pin || !pin.phone) return;

		phoneCall(pin.phone);
	}

	function handleWhatsApp() {
		if (!pin || !pin.phone) return;

		const number = `+55 ${pin.phone}`;
		openWhatsApp(number);
	}

	function handleOpenMaps(): void {
		if (!pin) return;

		const address = formatGoogleMapsAddress(pin);
		openMaps(address);
	}

	const [address, rest] = formatAddress(pin);

	return (
		<Dialog
			open
			fullScreen={fullScreen}
			onClose={handleClose}
			PaperProps={{
				sx: {
					borderRadius: fullScreen ? 0 : 4,
					minHeight: fullScreen ? undefined : 600,
					minWidth: fullScreen ? undefined : 420,
				},
			}}
		>
			<DialogTitle
				sx={({ palette }) => ({
					background: palette.grey[400],
				})}
			>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.common.white,
					}}
				>
					<Close />
				</IconButton>
			</DialogTitle>
			<Box
				sx={({ palette }) => ({
					background: palette.grey[400],
					display: "flex",
					alignItems: "flex-end",
					minHeight: 100,
				})}
			>
				<Avatar
					sx={{
						transform: "translateY(30px)",
						marginLeft: 3,
						width: 60,
						height: 60,
					}}
				/>
			</Box>
			<DialogContent>
				<Box marginTop={4}>
					{isLoading ? (
						<Skeleton variant="text" width={200}></Skeleton>
					) : (
						<Typography variant="h5" sx={{ fontWeight: "500" }}>
							{pin?.name}
						</Typography>
					)}
				</Box>

				<Box marginTop={4} display="flex" flexDirection="column" gap={2}>
					<Box display="grid" gridTemplateColumns="1fr 2fr" gap={2}>
						<Typography sx={{ fontWeight: "500" }} color="GrayText">
							{translate("selectedPin.address")}
						</Typography>

						<Box maxWidth={230}>
							{isLoading ? (
								<>
									<Skeleton variant="text" width="100%"></Skeleton>
									<Skeleton variant="text" width="100%"></Skeleton>
									<Skeleton variant="text" width="20%"></Skeleton>
								</>
							) : (
								<>
									<Typography variant="body2">{address}</Typography>
									<Typography variant="body2">{rest}</Typography>
								</>
							)}
						</Box>
					</Box>
					<Divider>
						<Typography color="gray" variant="overline">
							{translate("selectedPin.contact")}
						</Typography>
					</Divider>

					<Box display="grid" gridTemplateColumns="1fr 2fr" gap={2}>
						<Typography sx={{ fontWeight: "500" }} color="GrayText">
							{translate("selectedPin.phone")}
						</Typography>

						<Box>
							{isLoading ? (
								<Skeleton variant="text" width="100%" />
							) : (
								<Typography variant="body2">{pin?.phone || "-"}</Typography>
							)}
						</Box>
					</Box>
					<Box display="grid" gridTemplateColumns="1fr 2fr" gap={2}>
						<Typography sx={{ fontWeight: "500" }} color="GrayText">
							{translate("selectedPin.email")}
						</Typography>

						<Box>
							{isLoading ? (
								<Skeleton variant="text" width="100%" />
							) : (
								<Typography variant="body2">{pin?.email || "-"}</Typography>
							)}
						</Box>
					</Box>
				</Box>
			</DialogContent>

			<DialogActions sx={{ m: 1 }}>
				<SelectedPinBox display="flex" gap={1} flex={1} flexDirection="column">
					<Tooltip title={translate("selectedPin.callTooltip")} arrow>
						<Button
							sx={{ px: 3 }}
							variant="outlined"
							size="small"
							startIcon={<Phone />}
							fullWidth
							onClick={handleCall}
						>
							{translate("selectedPin.call")}
						</Button>
					</Tooltip>
					<Tooltip title={translate("selectedPin.whatsappTooltip")} arrow>
						<Button
							sx={{ px: 3 }}
							variant="outlined"
							size="small"
							startIcon={<WhatsApp />}
							fullWidth
							onClick={handleWhatsApp}
						>
							{translate("selectedPin.whatsapp")}
						</Button>
					</Tooltip>
					<Tooltip title={translate("selectedPin.mapsTooltip")} arrow>
						<Button
							sx={{ px: 3 }}
							variant="outlined"
							size="small"
							startIcon={<MapSharp />}
							fullWidth
							onClick={handleOpenMaps}
						>
							{translate("selectedPin.maps")}
						</Button>
					</Tooltip>
				</SelectedPinBox>
			</DialogActions>
		</Dialog>
	);
}
