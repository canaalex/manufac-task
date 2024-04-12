import wineData from "./Wine-Data.json";
import FlavonoidsTable from "./FlavonoidsTable.tsx";
import GammaTable from './GammaTable.tsx';
import { useState ,useEffect } from 'react';
import { getStats,getGammaStats } from './utils.tsx';


function App() {
  const [data,setdata]=useState([]);
  const [flavonoidsData,setFlavonoidsData]=useState();
  const [gammaData,setGammaData]=useState();
 
  useEffect(() => {
    setdata(wineData);
    const sum=getStats(data,"Flavanoids");
    console.log('stats',sum)
    const check=getGammaStats(data);
    console.log('checkgamma',check);
    setFlavonoidsData(sum);
    setGammaData(check);
  },[data]);

 
  return (
    <div className="App">
      <FlavonoidsTable flavonoidsData={flavonoidsData}/>
      <GammaTable gammaData={gammaData}/>
    </div>
  );
}

export default App;
