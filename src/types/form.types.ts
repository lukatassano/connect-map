import { z } from "zod";

export const formSchema = z.object({
	id: z.number().optional(),
	uuid: z.string().optional(),
	name: z.string().min(1, "Este campo precisa ser preenchido"),
	cpf: z
		.string({ message: "Este campo precisa ser preenchido" })
		.min(14, "Este campo precisa ser preenchido")
		.regex(
			/^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
			"CPF precisa estar completo no formato XXX.XXX.XXX-XX",
		),
	phone: z.string().optional(),
	email: z.string().optional(),
	instagram: z.string().optional(),
	facebook: z.string().optional(),
	twitter: z.string().optional(),
	linkedin: z.string().optional(),
	birthday: z.string().optional(),
	gender: z.string().optional(),
	coren: z.string().optional(),
	specialties: z
		.array(z.string())
		.min(1, "Selecione pelo menos uma especialidade")
		.default([]),
	lgpd: z
		.boolean()
		.default(false)
		.refine((val) => val === true, {
			message: "Você precisa concordar com os termos para enviar",
		}),
	zipCode: z.string().min(9, "Este campo precisa ser preenchido"),
	type: z.string().optional(),
	street: z.string().min(1, "Este campo precisa ser preenchido"),
	district: z.string().min(1, "Este campo precisa ser preenchido"),
	complement: z.string(),
	city: z.string().min(1, "Este campo precisa ser preenchido"),
	state: z.string().min(1, "Este campo precisa ser preenchido"),
	country: z.string().min(1, "Este campo precisa ser preenchido"),
	number: z.string(),
	latitude: z.string().optional(),
	longitude: z.string().optional(),
	exactLocation: z.boolean().default(false),
});

export type FormType = z.infer<typeof formSchema>;

export type Nurse = FormType;
