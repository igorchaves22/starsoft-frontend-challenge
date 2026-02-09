"use client";

import { Loader } from "~components";
import { useLoader } from "~hooks";
import { renderElementIfTrue } from "~utils";

export default function CartPage() {
    const { isLoading } = useLoader();

    return renderElementIfTrue(
        isLoading,
        <Loader />,
        <div>
            <p>Cart page</p>
        </div>
    );
}
