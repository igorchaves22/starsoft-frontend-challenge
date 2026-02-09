"use client";

import { ActionButton } from "components/ActionButton";
import Image from "next/image";
import { useContext } from "react";
import ethSvg from "~assets/svg/eth.svg";
import { QueryControlsContext } from "~contexts";
import "./styles.scss";

export const ProductsList = () => {
    const { data } = useContext(QueryControlsContext);

    return (
        <ul className="product-list">
            {data.products.map((product) => (
                <li
                    key={product.id}
                    className="product-list__box product-list__box--card"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        loading="eager"
                        width={100}
                        height={100}
                        className="product-list__image"
                    />
                    <p className="product-list__typography product-list__typography--name">{product.name}</p>
                    <div className="product-list__box product-list__box--price">
                        <Image
                            src={ethSvg}
                            alt="ETH"
                            loading="eager"
                            className="product-list__icon"
                        />
                        <span className="product-list__typography product-list__typography--price">
                            {Math.ceil(parseFloat(product.price))} ETH
                        </span>
                    </div>
                    <ActionButton text="COMPRAR" />
                </li>
            ))}
        </ul>
    );
};
