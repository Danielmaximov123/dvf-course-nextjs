import store from '@/redux/store';
import Layout from '@/src/components/layout';
import { Provider } from 'react-redux';


const App = (props) => {
  const { Component, pageProps } = props;

  return(
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  )
}

export default App
