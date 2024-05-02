import Stripe from "stripe";

export type Product = {
  id: string;
  active?: boolean;
  description?: string;
  name?: string;
  image?: string;
  metadata?: Stripe.Metadata;
};
