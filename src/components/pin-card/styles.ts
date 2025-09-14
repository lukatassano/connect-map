import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const OpenButton = styled(Button)`
  svg {
    transition: all 0.2s ease;
  }
  &:hover {
    svg {
      transform: translateX(4px);
    }
  }
`;
