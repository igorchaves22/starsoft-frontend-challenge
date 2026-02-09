"use client";

import { useContext } from "react";
import { QueryControlsContext } from "~contexts";
import { FetchQueries } from "~types";
import { ActionButton } from "../ActionButton";
import { ProductsList } from "../ProductsList";
import "./styles.scss";

export const CatalogContent = () => {
    const { queries, handleQuery, isError, data, hasNextPage, loadMore } = useContext(QueryControlsContext);

    if (isError) throw new Error();

    return (
        <section className="catalog-content">
            <div className="catalog-content__box">
                <form className="catalog-content__box catalog-content__box--form">
                    <div className="catalog-content__box catalog-content__box--button">
                        <button
                            type="button"
                            disabled={queries.orderBy === "ASC"}
                            onClick={() => handleQuery("orderBy", "ASC")}
                            className="catalog-content__button"
                        >
                            ASC
                        </button>
                        <button
                            type="button"
                            disabled={queries.orderBy === "DESC"}
                            onClick={() => handleQuery("orderBy", "DESC")}
                            className="catalog-content__button"
                        >
                            DESC
                        </button>
                    </div>
                    <div className="catalog-content__box catalog-content__box--select">
                        <label
                            htmlFor="sortBy"
                            className="catalog-content__typography"
                        >
                            Ordenar por
                        </label>
                        <select
                            id="sortBy"
                            value={queries.sortBy}
                            onChange={(e) => {
                                const value = e.target.value as FetchQueries["sortBy"];

                                handleQuery("sortBy", value);
                            }}
                        >
                            <option value="id">ID</option>
                            <option value="name">Nome</option>
                            <option value="price">Preço</option>
                        </select>
                    </div>
                </form>
                <div className="catalog-content__box catalog-content__box--content">
                    <p className="catalog-content__typography catalog-content__typography--count">
                        Current: {data.count.current} | Total: {data.count.total}
                    </p>
                    <ProductsList />
                    <ActionButton
                        disabled={!hasNextPage}
                        onClick={loadMore}
                        isDark
                        isMax
                        text={hasNextPage ? "Carregar mais" : "Você já viu tudo"}
                    />
                </div>
            </div>
        </section>
    );
};
