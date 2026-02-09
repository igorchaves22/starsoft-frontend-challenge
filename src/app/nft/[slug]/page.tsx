"use client";

import { Loader } from "~components";
import { useLoader } from "~hooks";
import { renderElementIfTrue } from "~utils";

export default function NftDetailPage() {
    const { isLoading } = useLoader();

    return renderElementIfTrue(
        isLoading,
        <Loader />,
        <div>
            <p>NFT detail page</p>
        </div>
    );
}
