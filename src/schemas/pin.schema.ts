import { z } from "zod";
import { translate } from "../intl/translate";

const requiredFieldMessage = translate("requiredField");

export const pinSchema = z.object({
	id: z.number().optional(),
	name: z.string().min(1, requiredFieldMessage),
	phone: z.string().optional(),
	email: z.string().optional(),
	zipCode: z.string().min(9, requiredFieldMessage),
	type: z.string().optional(),
	street: z.string().min(1, requiredFieldMessage),
	district: z.string().min(1, requiredFieldMessage),
	complement: z.string(),
	city: z.string().min(1, requiredFieldMessage),
	state: z.string().min(1, requiredFieldMessage),
	country: z.string().min(1, requiredFieldMessage),
	number: z.string(),
	latitude: z.string().optional(),
	longitude: z.string().optional(),
});
