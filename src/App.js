
import './App.css';
import wineData from "./Wine-Data.json";
import FlavonoidsTable from "./FlavonoidsTable";
import { useState ,useEffect } from 'react';
import { getMean } from './statistics.tsx';


function App() {
  const [data,setdata]=useState([]);
 
  useEffect(() => {
  
    setdata(wineData);
    const sum=getMean(data,"Flavanoids");
    console.log('sum',sum)
  },[data]);

 
  return (
    <div className="App">
      
      <FlavonoidsTable/>
      {/* {data.map((item)=>(item.Alcohol))} */}
     
      
    </div>
  );
}

export default App;
