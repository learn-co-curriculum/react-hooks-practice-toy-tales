import React, { useState } from "react";

function ToyForm( props ) {
  //////// js

    console.log( "props: " , props )  // 15-seconds ~
    

    // const [ v , f ] = useState( initialValue )
    const [ inputFieldForNewToyNameValue , updateInputFieldForNewToyNameValue ] = useState( "" )
      console.log( "State of inputFieldForNewToyNameValue: " , inputFieldForNewToyNameValue )  //
    const [ inputFieldForNewToyImageValue , updateInputFieldForNewToyImageValue ] = useState( "" )
      console.log( "State of inputFieldForNewToyImageValue: " , inputFieldForNewToyImageValue )  //


  
  //////// js
  return (
    <div className="container">


      <form 
      
        className="add-toy-form"

        onSubmit={ 
          
          ( synthEvent )=>{

            synthEvent.preventDefault()

            // console.log( synthEvent )  //

            let newToy = {

              name: inputFieldForNewToyNameValue,
              image: inputFieldForNewToyImageValue

            }
            props.sendToyUpToAppjs( newToy )  //
            //X// props.goGetToyFromToyForm( newToy )  //


          } 
      
        }
      
      >

        <h3>Create a toy!</h3>

        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"

            value={ inputFieldForNewToyNameValue }
            onChange={ ( synthEvent )=>{ updateInputFieldForNewToyNameValue( synthEvent.target.value ) } }

        /><br />

        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"

            value={ inputFieldForNewToyImageValue }
            onChange={ ( synthEvent )=>{ updateInputFieldForNewToyImageValue( synthEvent.target.value ) }  }

        /><br />

        <input
            type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />

      </form>


    </div>
  );
}

export default ToyForm;
