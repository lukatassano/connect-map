import { Box, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { useTranslation } from "../../../hooks/translate.hook";
import { searchLocationByZipCode } from "../../../service/address.service";
import type { PinType } from "../../../types/pin.types";

export function AddressForm() {
	const { control, watch, setValue } = useFormContext<PinType>();
	const t = useTranslation();

	const zipCode = watch("zipCode");

	async function setAddressByZipCode(z: string) {
		const { data: result } = await searchLocationByZipCode(z);

		if (!result) return;

		setValue("country", "Brasil");
		setValue("city", result.city || "");
		setValue("street", result.street || "");
		setValue("district", result.neighborhood || "");
		setValue("state", result.state || "");

		if (!result.neighborhood || !result.street) return;
		if (
			!result.location.coordinates.latitude ||
			!result.location.coordinates.longitude
		)
			return;

		setValue("latitude", result.location.coordinates.latitude || "");
		setValue("longitude", result.location.coordinates.longitude || "");
	}

	useEffect(() => {
		const zip = (zipCode || "").replaceAll("_", "");
		if (zip?.length === 9) {
			setValue("latitude", "");
			setValue("longitude", "");
			setAddressByZipCode(zip);
		}
	}, [zipCode]);

	return (
		<Box display="flex" flexDirection="column" paddingTop={2} gap={2}>
			<Controller
				name="zipCode"
				control={control}
				defaultValue=""
				render={({ field, fieldState }) => (
					<ReactInputMask
						mask="99999-999"
						value={field.value}
						onChange={field.onChange}
						onBlur={field.onBlur}
					>
						<TextField
							{...field}
							placeholder={t("address.zipCodePlaceholder")}
							label={t("address.zipCode")}
							variant="outlined"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							fullWidth
							size="small"
						/>
					</ReactInputMask>
				)}
			/>

			<Box display="flex" gap={1}>
				<Controller
					name="street"
					control={control}
					defaultValue=""
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							label={t("address.street")}
							variant="outlined"
							error={!!fieldState?.error}
							helperText={fieldState.error?.message}
							fullWidth
							size="small"
							sx={{ flex: 0.8 }}
						/>
					)}
				/>
				<Controller
					name="number"
					control={control}
					defaultValue=""
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							label={t("address.number")}
							variant="outlined"
							error={!!fieldState?.error}
							helperText={fieldState.error?.message}
							size="small"
							sx={{ flex: 0.2 }}
						/>
					)}
				/>
			</Box>

			<Controller
				name="district"
				control={control}
				defaultValue=""
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						label={t("address.district")}
						variant="outlined"
						error={!!fieldState.error}
						helperText={fieldState.error?.message}
						fullWidth
						size="small"
					/>
				)}
			/>
			<Controller
				name="complement"
				control={control}
				defaultValue=""
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						label={t("address.complement")}
						variant="outlined"
						error={!!fieldState.error}
						helperText={fieldState.error?.message}
						fullWidth
						size="small"
					/>
				)}
			/>

			<Box display="flex" gap={1}>
				<Controller
					name="city"
					control={control}
					defaultValue=""
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							label={t("address.city")}
							variant="outlined"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							size="small"
							sx={{ flex: 0.8 }}
						/>
					)}
				/>
				<Controller
					name="state"
					control={control}
					defaultValue=""
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							label={t("address.state")}
							variant="outlined"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							size="small"
							sx={{ flex: 0.2 }}
						/>
					)}
				/>
			</Box>
			<Controller
				name="country"
				control={control}
				defaultValue=""
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						label={t("address.country")}
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
