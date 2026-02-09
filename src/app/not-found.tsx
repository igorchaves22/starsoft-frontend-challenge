import { StatusPageMessage } from "~components";

export default function NotFound() {
    return (
        <StatusPageMessage
            title="404"
            message="Ops! Parece que você se perdeu."
            subMessage="Retorne à página inicial para começar de novo."
            link={{ href: "/", text: "Ir para página inicial" }}
        />
    );
}
