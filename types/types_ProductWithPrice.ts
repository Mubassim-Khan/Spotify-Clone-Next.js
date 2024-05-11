import { Price } from "./types_Price";
import { Product } from "./types_Product";

export interface ProductWithPrice extends Product {
  prices?: Price[];
}
