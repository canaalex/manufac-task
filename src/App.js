import wineData from "./WineData.json";
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
    const stats=getStats(data,"Flavanoids");
    const gamma=getGammaStats(data);
    setFlavonoidsData(stats);
    setGammaData(gamma);
  },[data]);

 
  return (
    <div className="App">
      <FlavonoidsTable flavonoidsData={flavonoidsData}/>
      <GammaTable gammaData={gammaData}/>
    </div>
  );
}

export default App;
