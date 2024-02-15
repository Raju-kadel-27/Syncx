import Stripe from 'stripe';

// Extract from env
let NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE = 'TEST_KEY_LIVE';

let NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = 'TEST_KEY';

export const stripe = new Stripe(
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE ?? NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '',
    {
        apiVersion:"2023-10-16",
        appInfo:{
            name:"syncx.com",
            version:"0.1.0"
        }
    }
)

//customer may be some id here
export async function cancelSubscription(customer?:string){

    if(!customer) return;

    try {
        const subscrriptionId= await stripe.subscriptions
        .list({
            customer
        }).then((res)=>res.data[0].id);

        return await stripe.subscriptions.update(subscrriptionId,{
            cancel_at_period_end:true,
            cancellation_details:{
                comment:"Customer unsubscribes syncx.com"
            }
        })
    } catch (error) {
        console.log({error});
        return ;
    }
}