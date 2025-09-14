import { SkeletonCard } from "./skeleton-card";

export function LoadingSkeletonCards() {
	return new Array(20)
		.fill("")
		.map(() => <SkeletonCard key={crypto.randomUUID()} />);
}
