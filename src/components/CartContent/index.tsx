"use client";

import Image from "next/image";
import Link from "next/link";
import ethSvg from "~assets/svg/eth.svg";
import { renderElementIfTrue } from "~utils";
import { ActionButton } from "../ActionButton";
import { CartList } from "../CartList";
import { useController } from "./useController";
import "./styles.scss";

export const CartContent = () => {
    const { selector, confirm, handleClickConfirm } = useController();

    return renderElementIfTrue(
        selector.totalProducts > 0,
        <section className="cart-content">
            <div className="cart-content__box cart-content__box--main">
                <CartList />
                <form className="cart-content__box cart-content__box--form">
                    <span className="cart-content__typography">TOTAL</span>
                    <div className="cart-content__box cart-content__box--price">
                        <Image
                            src={ethSvg}
                            alt="ETH"
                            loading="eager"
                            width={50}
                            height={50}
                            className="cart-content__icon"
                        />
                        <span className="cart-content__typography">{selector.totalPrice} ETH</span>
                    </div>
                    <ActionButton
                        onClick={handleClickConfirm}
                        text={confirm.immediate ? "COMPRA FINALIZADA!" : "FINALIZAR COMPRA"}
                    />
                </form>
            </div>
        </section>,
        <div className="cart-content__box cart-content__box--message">
            <p className="cart-content__typography">Seu carrinho está vazio</p>
            <Link
                href="/"
                className="cart-content__link"
            >
                Voltar para a página inicial
            </Link>
        </div>
    );
};
