import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body style={{backgroundColor : '#1A2138'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
