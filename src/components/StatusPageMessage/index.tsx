import Link from "next/link";
import { StatusPageMessageProps } from "./types";
import "./styles.scss";

export const StatusPageMessage = ({ title, message, subMessage, link }: StatusPageMessageProps) => (
    <section className="status-page-message">
        <div className="status-page-message__box status-page-message__box--container">
            <div className="status-page-message__box">
                <h1 className="status-page-message__typography status-page-message__typography--title">{title}</h1>
                <p className="status-page-message__typography">
                    {message}
                    <br />
                    {subMessage}
                </p>
            </div>
            <Link
                href={link.href}
                className="status-page-message__link"
            >
                {link.text}
            </Link>
        </div>
    </section>
);
