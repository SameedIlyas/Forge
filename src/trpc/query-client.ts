import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from '@tanstack/react-query';
import superjson from 'superjson';
/**
 * Creates and returns a new QueryClient instance with custom serialization, hydration, and query options.
 *
 * The client uses SuperJSON for serializing and deserializing query data, sets a 30-second stale time for queries, and customizes dehydration to include pending queries.
 *
 * @returns A configured QueryClient instance.
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
      hydrate: {
        deserializeData: superjson.deserialize,
      },
    },
  });
}