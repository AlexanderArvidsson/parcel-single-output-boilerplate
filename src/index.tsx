import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const element = document.getElementById('app');

if (!element) throw new Error('Could not find root node for React');

const root = createRoot(element);

root.render(
  <>
    <GlobalStyles />

    <App />
  </>
);
