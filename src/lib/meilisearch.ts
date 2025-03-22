import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

export const searchClient = instantMeiliSearch(
    process.env.NEXT_PUBLIC_MEILI_HOST || 'http://localhost:7700',
    process.env.NEXT_PUBLIC_MEILI_SEARCH_KEY || ''
);