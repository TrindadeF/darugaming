import React from 'react';
import type { Preview } from '@storybook/react'
import "../src/app/[locale]/globals.css";
import { CartProvider } from "../src/components/providers/cart"
import { CurrencyProvider } from "../src/components/providers/currency"
import SessionProvider from "../src/components/providers/session"
import { Toaster } from "../src/components/ui/sonner"
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../src/lib/meilisearch'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <SessionProvider initialSession={null}>
        <InstantSearch
          indexName="products"
          searchClient={searchClient}
        >
          <CartProvider>
            <CurrencyProvider>
              <Story />
            </CurrencyProvider>
            <Toaster />
          </CartProvider>
        </InstantSearch>
      </SessionProvider>
    ),
  ],
};

export default preview;