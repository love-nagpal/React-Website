import React from "react";
import Card from "./Card";
import Sdata from './Sdata'
const Services=()=>{

  return (
  
  <> 
  <div  className="my-5">

<h1 className="text-center">
    Our Services
</h1>
<h6 col-md-8>Nagpal team  is an ISO 9001-2015 certified Global On Demand 
Mobile App Development Company in India, we have expertise in applications
 development technology. We help entrepreneur in reference to develop
  their own business application & also provide peer to peer solution
   from designing to development of the software. Our dedicated 
   development center is located in India,
 Our sales & marketing offices are located in the USA & UK</h6>
</div>
<div className= "container-fluid  mb-5">
  	  <div className="row">
  		      <div className="col=10 mx-auto">
            <div className="row gy-4">


{

    Sdata.map((val, ind)=>{

        return <Card key={ind}
         imgsrc={ val.imgsrc}
         title={val.title}
    />
    })
}

       </div>
                 </div> 
    	</div>
</div>

</>
    );
};
  export default Services;
