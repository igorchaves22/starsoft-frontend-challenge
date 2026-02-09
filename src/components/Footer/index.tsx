"use client";

import { useContext } from "react";
import { FooterContext } from "~contexts";
import "./styles.scss";

export const Footer = () => {
    const { footerRef } = useContext(FooterContext);

    return (
        <footer
            ref={footerRef}
            className="footer"
        >
            <small className="footer__typography">STARSOFT © TODOS OS DIREITOS RESERVADOS</small>
        </footer>
    );
};
