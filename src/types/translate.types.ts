import type en from "../intl/languages/en";

type NestedKeys<T, Prefix extends string = ""> = {
	[K in keyof T]: T[K] extends object
		? NestedKeys<T[K], `${Prefix}${K & string}.`>
		: `${Prefix}${K & string}`;
}[keyof T];

export type TranslationKey = NestedKeys<typeof en>;

export type TranslationType = typeof en;
