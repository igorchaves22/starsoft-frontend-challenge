"use client";

import { Loader } from "~components";
import { useLoader } from "~hooks";
import { renderElementIfTrue } from "~utils";

export default function HomePage() {
    const { isLoading } = useLoader();

    return renderElementIfTrue(
        isLoading,
        <Loader />,
        <div>
            <p>Home page</p>
        </div>
    );
}
