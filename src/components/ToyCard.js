import React from "react";


//// Use Destructuring 

function ToyCard( { toyObject } ) {

  let { name , image , likes } = toyObject
  
  // console.log( "props: " , props )  //
  // console.log( "props.arrayOfToyObjects: " , props.toyObject )  //

    // let toy = props.toyObject


  return (

    <div className="card">

      <h2>{name /* Toy's Name */}</h2>

      <img
        src={image /* Toy's Image */}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />

      <p>{likes /* Toy's Likes */} Likes </p>

      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>

    </div>

  );
}
export default ToyCard;






//// Using Props

// function ToyCard( props ) {
//   console.log( "props: " , props )  //
//   console.log( "props.arrayOfToyObjects: " , props.toyObject )  //


//   return (

//     <div className="card">

//       <h2>{props.toyObject.name /* Toy's Name */}</h2>

//       <img
//         src={props.toyObject.image /* Toy's Image */}
//         alt={props.toyObject.name /* Toy's Name */}
//         className="toy-avatar"
//       />

//       <p>{props.toyObject.likes /* Toy's Likes */} Likes </p>

//       <button className="like-btn">Like {"<3"}</button>
//       <button className="del-btn">Donate to GoodWill</button>

//     </div>

//   );
// }
// export default ToyCard;










// function ToyCard( props ) {
//   console.log( "props: " , props )  //
//   console.log( "props.arrayOfToyObjects: " , props.arrayOfToyObjects )  //


//   return (

//     <div className="card">

//       <h2>{props.arrayOfToyObjects[ 0 ].name /* Toy's Name */}</h2>

//       <img
//         src={"" /* Toy's Image */}
//         alt={"" /* Toy's Name */}
//         className="toy-avatar"
//       />

//       <p>{"" /* Toy's Likes */} Likes </p>

//       <button className="like-btn">Like {"<3"}</button>
//       <button className="del-btn">Donate to GoodWill</button>

//     </div>

//   );
// }
// export default ToyCard;
