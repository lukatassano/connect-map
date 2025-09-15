import { Box, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { useTranslation } from "../../../hooks/translate.hook";
import type { PinType } from "../../../types/pin.types";

export function PersonalForm() {
	const t = useTranslation();
	const { control } = useFormContext<PinType>();

	return (
		<Box display="flex" flexDirection="column" gap={2} paddingTop={2} flex={1}>
			<Controller
				name="name"
				control={control}
				defaultValue=""
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						label={t("personalData.name")}
						variant="outlined"
						error={!!fieldState.error}
						helperText={fieldState?.error?.message}
						size="small"
						sx={{ flex: 1 }}
						fullWidth
					/>
				)}
			/>

			<Controller
				name="phone"
				control={control}
				defaultValue=""
				render={({ field, fieldState }) => (
					<ReactInputMask
						mask="(99) 99999-9999"
						value={field.value}
						onChange={field.onChange}
						onBlur={field.onBlur}
					>
						<TextField
							{...field}
							label={t("personalData.phone")}
							variant="outlined"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							fullWidth
							size="small"
						/>
					</ReactInputMask>
				)}
			/>

			<Controller
				name="email"
				control={control}
				defaultValue=""
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						label={t("personalData.email")}
						variant="outlined"
						error={!!fieldState.error}
						helperText={fieldState.error?.message}
						fullWidth
						size="small"
					/>
				)}
			/>
		</Box>
	);
}
