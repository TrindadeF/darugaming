"use client"

import { InstantSearch } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import SearchPage from "@/components/search/page";

const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILI_HOST!,
  process.env.NEXT_PUBLIC_MEILI_SEARCH_KEY!
);

export default function Page() {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <div className="md:w-[1100px] w-full container mx-auto mt-20 relative text-white py-6">
        <div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
          <div className="flex flex-col gap-6 mt-6">
            <h1 className="text-3xl font-bold text-start mb-8">Pesquisar Produtos</h1>
            <SearchPage />
          </div>
        </div>
      </div>
    </InstantSearch>
  )
}