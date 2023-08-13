import React from 'react'
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,trending} from "./urls"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner url={trending}/>
      <RowPost url={originals} title={'Netflix Originals'}/>
      <RowPost url={action} title={"Action"} isSmall />
    </div>
  );
}

export default App;
