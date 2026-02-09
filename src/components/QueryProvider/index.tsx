"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services";
import { QueryProviderProps } from "./types";

export const QueryProvider = ({ children }: QueryProviderProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
