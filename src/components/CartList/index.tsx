"use client";

import { Icon } from "components/Icon";
import Image from "next/image";
import ethSvg from "~assets/svg/eth.svg";
import { useCart } from "~hooks";
import "./styles.scss";

export const CartList = () => {
    const {
        selector,
        handleClickRemoveProductFromCart,
        handleClickAddProductToCart,
        handleClickRemoveProductFromCartCompletely
    } = useCart();

    return (
        <ul className="cart-list">
            {selector.products.map((product) => (
                <li
                    key={product.id}
                    className="cart-list__box cart-list__box--card"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        loading="eager"
                        width={100}
                        height={100}
                        className="cart-list__image cart-list__image--item"
                    />
                    <div className="cart-list__box">
                        <div className="cart-list__box">
                            <p className="cart-list__typography cart-list__typography--name">{product.name}</p>
                            <p className="cart-list__typography">{product.description}</p>
                            <div className="cart-list__box cart-list__box--price">
                                <Image
                                    src={ethSvg}
                                    alt="ETH"
                                    loading="eager"
                                />
                                <span className="cart-list__typography">
                                    {Math.ceil(parseFloat(product.price))} ETH
                                </span>
                            </div>
                        </div>
                        <div className="cart-list__box cart-list__box--controls">
                            <div className="cart-list__box cart-list__box--quantity">
                                <button
                                    type="button"
                                    aria-label="Remove product from cart"
                                    onClick={() => handleClickRemoveProductFromCart(product.id)}
                                    className="cart-list__button"
                                >
                                    <Icon
                                        icon="Minus"
                                        weight="bold"
                                        size="sm"
                                    />
                                </button>
                                <span className="cart-list__typography">{product.quantity}</span>
                                <button
                                    type="button"
                                    aria-label="Add product to cart"
                                    onClick={() => handleClickAddProductToCart(product)}
                                    className="cart-list__button"
                                >
                                    <Icon
                                        icon="Plus"
                                        weight="bold"
                                        size="sm"
                                    />
                                </button>
                            </div>
                            <button
                                type="button"
                                aria-label="Remove product from cart completely"
                                onClick={() => handleClickRemoveProductFromCartCompletely(product.id)}
                                className="cart-list__button cart-list__button--trash"
                            >
                                <Icon
                                    icon="TrashSimple"
                                    weight="bold"
                                />
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
