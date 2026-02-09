"use client";

import { StatusPageMessage } from "~components";

export default function ErrorPage() {
    return (
        <StatusPageMessage
            title="Algo deu errado"
            message="Ops! Algo deu errado."
            subMessage="Parece que esta área do site está fora de alcance por enquanto."
            link={{ href: "/", text: "Ir para página inicial" }}
        />
    );
}
