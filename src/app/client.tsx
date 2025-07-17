"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.Greet.queryOptions({ text: 'Forge' }));

    return (
        <div>
            <h1>{JSON.stringify(data)}</h1>
            <p>This is the client component.</p>
        </div>
    )
};