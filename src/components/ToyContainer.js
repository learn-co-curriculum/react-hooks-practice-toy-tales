import React from "react";

import ToyCard from "./ToyCard";


function ToyContainer( props ) {

  console.log( props ) //

  return (
    <div id="toy-collection">
      {

        /* Render the collection of ToyCards */
        // [ eachToy:{} , {}{}{}{}{} ]
        props.arrayOfToyObjects.map( ( eachToy )=>{ 

          return( < ToyCard key={ eachToy.id } toyObject={ eachToy }  /> )
          // return( < ToyCard key={ `Toy-${eachToy.id}` } toyObject={ eachToy }  /> )

        } )
        
        
      }
    </div>
  );
}
export default ToyContainer;
