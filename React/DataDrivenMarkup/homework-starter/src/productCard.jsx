import { formatPrice } from './formatPrice.jsx';

export const ProductCard = ({ imageUrl, price, title, discount}) => {
    return (
    <div className="product-card">
        <img className="product-card__img" src={imageUrl} alt={title} height="1024" width="1024"></img>
        <div className="product-card__price-wrapper">
            {discount ? (
                <span className="product-card__price">{formatPrice(price*(1-discount))} ₽</span>
            ): <span className="product-card__price" style={{color:'#000000'}}>{formatPrice(price)} ₽</span>}
            {discount ? (
                <span className="product-card__discount">{price} ₽</span>
            ):null}
        </div>
        <h2 className="product-card__title">{title}</h2>
    </div>
    )
}