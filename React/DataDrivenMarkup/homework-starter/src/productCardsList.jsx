import { ProductCard } from "./productCard";

export const ProductCardList = ({products}) => {
    return (
        <ul className="cards-list">
            {products.map((product)=>(
                <li key={product.id}>
                    <ProductCard 
                        imageUrl={product.imageUrl}
                        price = {product.price}
                        title = {product.title}
                        discount={product.discount}
                    />
                </li>
            ))}
        </ul>
    )
}