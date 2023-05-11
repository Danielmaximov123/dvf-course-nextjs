import React from 'react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./Header'), { ssr: false });

const Layout = ({ children, ...props }) => {
  const isClient = typeof window !== 'undefined';
  const token = isClient ? sessionStorage.getItem('token') : null;

  const theme = createTheme({
    direction: 'rtl',
  });

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <Box>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ direction: 'rtl' }}>
            {isClient && token && <DynamicHeader token={token} />}
            <main {...props}>{children}</main>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
};

export default Layout;
