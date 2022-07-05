import React, { useState, useEffect } from "react";  //  📚📚📚📚📚📚📚
// import { useEffect } from "react"; // 📗

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


  //// Just for Testing Purposes

    import ToyCard from "./ToyCard";

  //// Just for Testing Purposes


function App() {
  ///////// js


  // const [ someVariable , someSetterFunction ] = useState( initialValueForSomeVariable );
  const [ dataFromFetch , setDataFromFetch ] = useState( [ ] );
    console.log( "The State of dataFromFetch: " , dataFromFetch )  //

    

    // [].map( ()=>{} )
    // " i CANNOT function "


   useEffect( ()=>{

     fetch( "http://localhost:3001/toys" )
     .then( ( reponse )=> reponse.json() )
     .then( 
       
        ( data )=>{ 
          
          console.log( "data: " , data )  //
          // console.log( "data + spread: " , ...data )  //

          setDataFromFetch( data )

            //// dataFromFetch =INASPECIALWAY= data

          // setDataFromFetch( [ ...data ] )
          // setDataFromFetch( ( data )=>{ return data } )

        } 

      )
    //  .then( handleEverythingForSetup )
     // .then( data => console.log( data ) )
     // .then( console.log )

   } , [ ] )  // depends


    function handleEverythingForSetup( theImplicitReturnValue ){


      console.log( "theImplicitReturnValue: " , theImplicitReturnValue )  //

        let arrayOfToysForReadablity = theImplicitReturnValue

      // setDataFromFetch( arrayOfToysForReadablity )
      setDataFromFetch( (arrayOfToysForReadablity)=>{  return arrayOfToysForReadablity } )


    }



  
    const [ showForm , setShowForm ] = useState( false );
      // console.log( "The State of showForm: " , showForm )  //

      // let showForm = false
    function handleClick() {

      setShowForm(  ( showFormPlaceHolder )=>{  return !showFormPlaceHolder }  );

      // setShowForm( !showForm );


      // showForm = !showForm
      // console.log( "showForm NO USESTATE: " , showForm )  //
    }


    function goGetToyFromToyForm( toyFromToyForm ){

      console.log( "goGetToyFromToyForm" , toyFromToyForm )  //


      //// Frontend Portion

        setDataFromFetch(  [ toyFromToyForm , ...dataFromFetch ]  )
        // setDataFromFetch(  [ ...dataFromFetch , toyFromToyForm ]  )

          //X// setDataFromFetch( dataFromFetch.push(  ) )
          //X// setDataFromFetch( [ toyFromToyForm ] )
          //X// setDataFromFetch( toyFromToyForm )


      //// Frontend Portion

      fetch( "http://localhost:3001/toys" , {

        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( toyFromToyForm )

      } )
      .then( response => response.json() )
      .then( console.log )




    }


  ///////// js
  return (
    <>

      <>


        {/*   
        
          arrayOfToyObjects={ dataFromFetch } 

          nameForWhereWeAreGoing={ whatIsIsRefferedToAsHERE }
          
        */}

        {

          dataFromFetch.length > 0 ?
          (
            <>
              {/* <ToyCard arrayOfToyObjects={ dataFromFetch } />
              <ToyCard arrayOfToyObjects={ dataFromFetch } />
              <ToyCard arrayOfToyObjects={ dataFromFetch } /> */}
            </>
          )

          :

          <></>
        }

      </>


      {/* Just a Presentational Component */}
      <Header />


      {/* Conditional Rendering */}
      {  

        showForm ? 
        
        <ToyForm sendToyUpToAppjs={ goGetToyFromToyForm } />  // true case
        
        : 
        
        null  // false case 
        
      }

      <div className="buttonContainer">

        <button onClick={ handleClick }>Show Toy Form</button>

      </div>

      <ToyContainer arrayOfToyObjects={ dataFromFetch } />
    </>
  );
}
export default App;



/*


  < App /> datafromFetch:[]

    < Header>           ||||
    < ToyForm />        ||||
    < ToyContainer />
      < ToyCard />      ||||
      < ToyCard />      ||||
      < ToyCard />      ||||

        [ like ][ delete ]
          [ like ]< ToyCard />
          [ like ][ delete ]< ToyContainer />< ToyCard /> 


  //// DELIVRABLES

  When our application loads, make a GET request to /toys to fetch the toy array. 
  Given your component tree, think about which component should be responsible for the array. 
  After you have put the data in the proper component, your next job is to render the ToyCard components on the page.


    fetch
    hold data == useState
    don't want a reRender infiniteLoop == useEffect , ⚓️[ ]⚓️





  When the ToyForm is submitted, make a POST request to /toys to save a new toy to the server. 
  Using the ideas of controlled form and inverse data flow, 
  think about how to render a new ToyCard for the toy that you created.

    < ToyForm /> 

  When the Donate to Goodwill button is clicked, make a DELETE request to /toys/:id with the ID of the toy that was clicked to delete the toy from the server. The ToyCard that you clicked on should also be removed from the DOM.

  When the like button is clicked, make a PATCH request to /toys/:id with the id of the toy that was clicked, along with the new number of likes (this should be sent in the body of the PATCH request, as a object: { likes: 10 }), to update the toy on the server. Clicking on the button should also increase the number of likes on the DOM.




*/


















































// function App() {
//   ///////// js


//   // const [ someVariable , someSetterFunction ] = useState( initialValueForSomeVariable );

//   const [ showForm , setShowForm ] = useState( false );
//     console.log( "The State of showForm: " , showForm )  //

//     // let showForm = false

//   function handleClick() {
//     setShowForm( (showForm) => !showForm );


//     // showForm = !showForm
//     // console.log( "showForm NO USESTATE: " , showForm )  //
//   }


//   ///////// js
//   return (
//     <>
//       <Header />
//       {/* { conditionOrQuestion ? true : false } */}
//       {
//         /* 
//           { 
//           conditionOrQuestion ? 
          
//             <ToyForm />   // true case
            
//             : 
            
//             null  // false case 
//           } 
//         */
//       }

//       {/* { showForm ? <ToyForm /> : null} */}
//       { 

//         showForm ? 
        
//         <ToyForm />  // true case
        
//         : 
        
//         // null  // false case 
//         <></>  // false case 
        
//       }

//       <div className="buttonContainer">
//         <button onClick={handleClick}>Show Toy Form</button>
//       </div>
//       <ToyContainer />
//     </>
//   );
// }
// export default App;