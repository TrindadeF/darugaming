'use client';

import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from "@/lib/meilisearch";


export function MeilisearchProvier(props: { children: React.ReactNode }) {

    return (
        <InstantSearch
            indexName="products"
            searchClient={searchClient}
        >
            {props.children}
        </InstantSearch>
    )
}