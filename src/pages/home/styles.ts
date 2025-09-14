import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	maxHeight: "100vh",
	height: "100vh",
	overflow: "hidden",
	flexDirection: "row",
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
	[theme.breakpoints.down("sm")]: {
		height: "100vh",
		marginTop: 24,
	},
}));

export const MobileContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 24px;
`;

export const ContainerBox = styled("div")(({ theme }) => ({
	display: "flex",
	flex: 1,
	flexDirection: "row",
	height: "100%",
	maxWidth: theme.spacing(250),
	paddingLeft: theme.spacing(4),
	paddingRight: theme.spacing(8),
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
}));
