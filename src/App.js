import React, {useEffect} from 'react'
import Header from './components/Header';
import Main from "./containers/Main"
import M from "materialize-css"
import "../node_modules/materialize-css/dist/css/materialize.min.css"
import "swiper/css/bundle";

function App() {
  useEffect(()=>{
    M.AutoInit()
  }, [])
  
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
