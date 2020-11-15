import { Route, Router } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/products';
import Footer from './components/footer';
import Video from './components/video'
import './base.scss';
import Subcribe from './components/subscribe';

const App = () => {
  return (
    <div className='App'>
      <Header />
      {/* <Hero />
      <Products />
      <Video />
      <Subcribe /> */}
      <Route exact path='/' component={Hero} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/video' component={Video} />
      <Route exact path='/subscribe' component={Subcribe} />
      <Footer />
    </div>
  );
};

export default App;
