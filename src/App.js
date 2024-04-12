
import './App.css';
import wineData from "./Wine-Data.json";
import FlavonoidsTable from "./FlavonoidsTable";
import { useState ,useEffect } from 'react';
import { getStats } from './statistics.tsx';


function App() {
  const [data,setdata]=useState([]);
  const [flavonoidsData,setFlavonoidsData]=useState();
 
  useEffect(() => {
  
    setdata(wineData);
    const sum=getStats(data,"Flavanoids");
    console.log('sum',sum)
    setFlavonoidsData(sum);
  },[data]);

 
  return (
    <div className="App">
      
      <FlavonoidsTable flavonoidsData={flavonoidsData}/>
      {/* {data.map((item)=>(item.Alcohol))} */}
     
      
    </div>
  );
}

export default App;
