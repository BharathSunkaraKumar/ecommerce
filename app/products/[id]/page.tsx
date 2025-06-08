import { ProductDeatil } from "@/components/ui/ProductDetail"
import { stripe } from "@/lib/stripe"

export default async function ProductPage({params}: {params: {id: string}}) {
    const product = await stripe.products.retrieve(params.id, {
        expand: ["default_price"]
    })
    return <ProductDeatil product={product}/>
}