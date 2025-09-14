const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

export const isValidURL = (value: string) => urlRegex.test(value);

export const isString = (value: unknown) => typeof value === "string";

export const isNumber = (value: unknown) => typeof value === "number";
