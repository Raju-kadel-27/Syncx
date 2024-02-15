import { Stripe as StripeProps, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<StripeProps | null>;

// Extract from env
let NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE = 'TEST_KEY_LIVE';

let NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = 'TEST_KEY';

export const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE ??
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
        )
    }

    return stripePromise;
}