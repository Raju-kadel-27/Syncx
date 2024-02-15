export const getPlanFromPriceId = (priceId: string) => {
    const env = process.env
        .NEXT_PUBLIC_VERCEL_ENVIRONMENT ? 'production' : 'test';

    return PLANS
        .find((plan) =>
            plan.price.monthly.priceIds[env] === priceId ||
            plan.price.yearly.priceIds[env] === priceId
        )
}

export const isNewCustomer = (previousAttributes: {
    default_payment_method: string;
}) => {
    let isNewCustomer = false;
    try {
        if (
            previousAttributes.default_payment_method === null
        ) {
            isNewCustomer = true
        }
    } catch (error) {
        console.log({ error });
    }
    return isNewCustomer;
}

export const PLANS = [
    {
        name: 'Pro',
        slug: 'pro',
        price: {
            monthly: {
                amount: 30,
                priceIds: {
                    test: "price_some_random_userId",
                    production: "price_hfk_some_secret_key_from_stripe",
                }
            },
            yearly: {
                amount: 300,
                priceIds: {
                    test: "price_some_random_userId",
                    production: "price_hfk_some_secret_key_from_stripe",
                }
            },
        }
    }, {
        name: 'Starter',
        slug: 'pro',
        price: {
            monthly: {
                amount: 15,
                priceIds: {
                    test: "price_random_id",
                    production: "price_some_key_value"
                }
            },
            yearly: {
                amount: 150,
                priceIds: {
                    test: "price_random_id",
                    production: "price_some_key_value"
                }
            },
        }
    }
]

export const SubscriptionId = 'test_ley_live_pub_sub';