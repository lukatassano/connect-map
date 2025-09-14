export enum AppRoutes {
	Map = "/connect-map",
	NewPin = "/connect-map/new/pin",
	SelectedPin = "/connect-map/:id",
}

export type RouteParams = {
	"/connect-map/:id": { id: string };
	"/connect-map/new/pin": undefined;
	"/connect-map": undefined;
};
