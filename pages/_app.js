import Layout from '@/src/components/layout';


const App = (props) => {
  const { Component, pageProps } = props;

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
