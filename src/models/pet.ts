import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { status1Schema, type Status1 } from "./status1.js";
import { tagSchema, type Tag } from "./tag.js";

export type Pet = {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: string[];
  tags?: Tag[];
  /** pet status in the store */
  status?: Status1;
};

export const petSchema: Schema<Pet> = s.object<Pet>({
  id: s.optional(s.int()),
  name: s.string(),
  category: s.optional(s.lazy(() => categorySchema)),
  photoUrls: s.array(s.string()),
  tags: s.optional(s.array(s.lazy(() => tagSchema))),
  status: s.optional(s.lazy(() => status1Schema)),
});
