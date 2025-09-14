import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "../../hooks/translate.hook";
import { Container } from "./styles";

export function Footer() {
	const t = useTranslation();

	return (
		<Container>
			<Box display="flex" flexDirection="column" gap={2}>
				<Typography variant="inherit">{t("footerDescription")}</Typography>

				<Typography variant="inherit">
					{t("developedBy")}{" "}
					<Link color="inherit" href="https://fsdata.co">
						{t("companyName")}
					</Link>
				</Typography>
			</Box>
		</Container>
	);
}
