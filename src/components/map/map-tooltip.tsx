import type { ReactNode } from "react";
import { Tooltip as LeafletTooltip } from "react-leaflet";

type Props = { children: ReactNode };

export function Tooltip({ children }: Props) {
	return (
		<LeafletTooltip direction="bottom" offset={[0, 20]} opacity={1}>
			{children}
		</LeafletTooltip>
	);
}
