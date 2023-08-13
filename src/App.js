import React from 'react'
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,trending,comedy,horror,romance,documentry} from "./urls"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner url={trending}/>
      <RowPost url={originals} title={'Netflix Originals'}/>
      <RowPost url={action} title={"Action"} isSmall />
      <RowPost url={comedy} title={"Comedy"} isSmall />
      <RowPost url={horror} title={"Horror"} isSmall />
      <RowPost url={romance} title={"Romance"} isSmall />
      <RowPost url={documentry} title={"Documentary"} isSmall />
      
    </div>
  );
}

export default App;
