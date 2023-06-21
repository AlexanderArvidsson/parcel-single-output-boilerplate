import { Global, css } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  body {
    background: red;
  }

  .page {
    max-width: 20rem;
    margin: 0 auto;
  }

  .card {
    padding: 2rem;
    background: white;
    border-radius: 0.5rem;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
