import type { z } from "zod";
import type { pinSchema } from "../schemas/pin.schema";

export type PinType = z.infer<typeof pinSchema>;
