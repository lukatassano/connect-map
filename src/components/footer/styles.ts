import { styled } from "@mui/material";
import { theme } from "../../theme";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 16px;
  background: ${theme.palette.grey[300]};
  padding: 30px;
  width: 100%;
  font-size: 12px;
  gap: 16px;
  margin-top: 40px;

  img {
    height: 44px;
  }

  ${theme.breakpoints.down("sm")} {
    flex-direction: column;
    border-top-left-radius: 0;
  }
`;
