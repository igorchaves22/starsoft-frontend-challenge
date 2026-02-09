import Image from "next/image";
import Link from "next/link";
import logoSvg from "~assets/svg/logo.svg";
import { Icon } from "../Icon";
import "./styles.scss";

export const Header = () => (
    <header className="header">
        <div className="header__box">
            <Link
                href="/"
                className="header__link"
            >
                <Image
                    src={logoSvg}
                    alt="starsoft logo"
                    loading="eager"
                    className="header__image"
                />
            </Link>
            <Link
                href="/cart"
                className="header__link"
            >
                <Icon
                    icon="Bag"
                    color="brand"
                    size="lg"
                />
                <span>0</span>
            </Link>
        </div>
    </header>
);
