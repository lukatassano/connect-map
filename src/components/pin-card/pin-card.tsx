import { ArrowForward, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	Checkbox,
	Fade,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useAtom } from "jotai";
import {
	addOrRemoveFavoritePinAtom,
	favoritePinsAtom,
} from "../../atoms/pins.atoms";
import { AppRoutes } from "../../constants/routes.consts";
import { useNavigation } from "../../hooks/navigate.hook";
import { useTranslation } from "../../hooks/translate.hook";
import { theme } from "../../theme";
import type { PinType } from "../../types/pin.types";
import { OpenButton } from "./styles";

interface Props {
	pin: PinType;
}

export function PinCard({ pin }: Props) {
	const navigate = useNavigation();
	const t = useTranslation();
	const small = useMediaQuery(theme.breakpoints.down("sm"));

	const [favoritePins] = useAtom(favoritePinsAtom);
	const [, addFavoritePin] = useAtom(addOrRemoveFavoritePinAtom);

	function handleOpen(pin: PinType) {
		navigate(AppRoutes.SelectedPin, { id: String(pin.id) });
	}

	const address = `${pin.street} - ${pin.district}`;

	const isFavorite =
		favoritePins.findIndex((favorite) => favorite.id === pin.id) > -1;

	return (
		<Fade in>
			<Box
				pt={0.4}
				sx={(theme) => ({ background: theme.palette.primary.light })}
				borderRadius={4}
				display="flex"
			>
				<Card
					variant="outlined"
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						minHeight: small ? 130 : 200,
						maxHeight: 200,
						minWidth: small ? 260 : 320,
						maxWidth: small ? 500 : 320,
						flex: 1,
						borderRadius: 4,
						overflow: "auto",
					}}
				>
					<CardContent
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
						}}
					>
						<Typography sx={{ fontSize: 14 }} gutterBottom noWrap>
							{pin.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{address}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{pin.city} - {pin.state}
						</Typography>
					</CardContent>
					<CardActions
						sx={{ display: "flex", justifyContent: "space-between" }}
					>
						<Checkbox
							onClick={() => addFavoritePin(pin)}
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
							checked={isFavorite}
						/>
						<OpenButton
							size="small"
							variant="outlined"
							endIcon={<ArrowForward fontSize="small" />}
							onClick={() => handleOpen(pin)}
						>
							{t("seeMore")}
						</OpenButton>
					</CardActions>
				</Card>
			</Box>
		</Fade>
	);
}
