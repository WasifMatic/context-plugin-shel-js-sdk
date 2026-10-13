import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Order = {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: Date;
  /** Order Status */
  status?: Status;
  complete?: boolean;
};

export const orderSchema: Schema<Order> = s.object<Order>({
  id: s.optional(s.int()),
  petId: s.optional(s.int()),
  quantity: s.optional(s.int()),
  shipDate: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusSchema)),
  complete: s.optional(s.boolean()),
});
