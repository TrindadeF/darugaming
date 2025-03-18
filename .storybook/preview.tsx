import React from 'react';
import type { Preview } from '@storybook/react'
import "../src/app/[locale]/globals.css";
import { CartProvider } from "../src/components/providers/cart"

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
      <CartProvider>
        <Story />
      </CartProvider>
    ),
  ],
};

export default preview;