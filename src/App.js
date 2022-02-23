import React, {useEffect} from 'react'
import Provider from './context/provider';
import Header from './components/Header';
import Main from "./containers/Main"
import M from "materialize-css"
import "../node_modules/materialize-css/dist/css/materialize.min.css"
import "swiper/css/bundle";
import Footer from './containers/Footer';

function App() {
  useEffect(()=>{
    M.AutoInit()
  }, [])
  
  return (
    <Provider>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
