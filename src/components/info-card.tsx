import styled from "@emotion/styled";
import { Paper } from "@mui/material";

interface Props {
	backgroundColor: string;
	color: string;
}

export const InfoCard = styled(Paper)`
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  color: ${({ color }: Props) => color};
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.9;

  svg {
    transition: all 0.2s ease;
  }

  &:hover {
    opacity: 1;

    .arrow {
      transform: translateX(4px);
    }
  }
`;
