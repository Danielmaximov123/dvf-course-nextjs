import React from 'react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { Box, createTheme, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';

const DynamicHeader = dynamic(() => import('./Header'), { ssr: false });

const Layout = ({ children, ...props }) => {
  const isClient = typeof window !== 'undefined';
  const token = isClient ? localStorage.getItem('token') : null;

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
          <Toaster
          toastOptions={{
            className: '',
            duration: 3000,
            style: {
                direction: 'rtl',
                background: '#3F4D7A',
                color: '#fff',
              },
            }}
          />
          <div style={{ direction: 'rtl' }}>
            {isClient && token && <DynamicHeader token={token} />}
            <main {...props} style={{ marginTop : '6rem' }}>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
};

export default Layout;
