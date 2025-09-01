import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,  // Aplica o tema dark nas docs
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;

