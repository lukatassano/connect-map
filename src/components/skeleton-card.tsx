import { ArrowForward, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Checkbox,
	Fade,
	Skeleton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useTranslation } from "../hooks/translate.hook";
import { theme } from "../theme";

export function SkeletonCard() {
	const t = useTranslation();
	const small = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Fade in>
			<Box
				pt={0.4}
				sx={(theme) => ({ background: theme.palette.grey[400] })}
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
						<Skeleton>
							<Typography sx={{ fontSize: 14 }} gutterBottom noWrap>
								{"aaaaaaaaaaaaaaaaaaaaaaa"}
							</Typography>
						</Skeleton>
						<Skeleton>
							<Typography variant="body2" color="text.secondary" noWrap>
								{"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
							</Typography>
						</Skeleton>
						<Skeleton>
							<Typography variant="body2" color="text.secondary" noWrap>
								{"aaaaaaaaaaaaaaaaaaaaaaaaa"}
							</Typography>
						</Skeleton>
					</CardContent>
					<CardActions
						sx={{ display: "flex", justifyContent: "space-between" }}
					>
						<Checkbox
							disabled
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
						/>
						<Button
							size="small"
							variant="outlined"
							disabled
							endIcon={<ArrowForward fontSize="small" />}
						>
							{t("seeMore")}
						</Button>
					</CardActions>
				</Card>
			</Box>
		</Fade>
	);
}
