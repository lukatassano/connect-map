import { Skeleton, Typography } from "@mui/material";
import { usePins } from "../hooks/pin.hook";
import { useTranslation } from "../hooks/translate.hook";

export function FoundPins() {
	const t = useTranslation();

	const { isLoading, pins } = usePins();

	const quantity = pins.length;

	return isLoading ? (
		<Skeleton>
			<Typography variant="h6">{t("foundPins")}</Typography>
		</Skeleton>
	) : (
		<Typography variant="h6">{t("foundPins", { quantity })}</Typography>
	);
}
