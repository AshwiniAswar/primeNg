import React, { useState } from 'react'
import Data from './Data';
import Accordion from "@mui/material/Accordion";
import { AccordionSummary, Typography,AccordionDetails} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const App=()=> {
    const [data,setData]=useState({
      sectionHeading:"",
      sectionDetail:"",
    });
    const [sectionData,setSectionData]=useState([])
    const handleChange=(e)=>{
      const{name,value}=e.target
      setData((prev)=>({...prev,[name]:value}))

    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      setSectionData([...sectionData,data])
      console.log (data);
    }
  return (
    <>
     {/* <h1>primeNg</h1> */}
     <div className="container">
      <div class='row'>
        <div className='head col-sm-6 pt-20'>
          <h2>Add Section</h2>
          <h4>Section Head</h4>
          <input  name='sectionHeading' value={data.sectionHeading} type='text' onChange={handleChange}></input>
          <h4>Section Details</h4>
          <textarea  name='sectionDetail' value={data.sectionDetail} type='text' onChange={handleChange}></textarea>
          <button type="button" class="btn btn-info" onClick={handleSubmit}>Add</button>
        </div>
       
      </div>
      {sectionData.length>0 && (

            <div className="accordianBlock">
            {sectionData.map((val)=>(
             <Accordion>
             <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
             >
               <Typography>{val.sectionHeading}</Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography>
                 {val.sectionDetail}
               </Typography>
             </AccordionDetails>
           </Accordion>
            ))}
                
            </div>
      )}
       </div>
    
    </>
  )
}

export default App;





// import React from 'react';
// import './App.css';
// import AccordionComponent from './AccordionComponent';

// function App() {
//   return (
//     <div className="App">
//       <h1>PrimeNG Accordion</h1>
//       <AccordionComponent />
//     </div>
//   );
// }

// export default App;
