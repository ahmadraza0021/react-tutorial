// import React from 'react'
      //  Destructuring 1st method
// const Card = ({name, id}) => {
//   return (
//     <div>
//         <div>{name}</div>
//         <div>{id}</div>
//     </div>
//   )
// }

// export default Card


// Destructuring 2nd method
// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//       <div>{props.name}</div>
//       <div>{props.id}</div>
//     </div>
//   )
// }

// export default Card

// Destructuring 3rd method

import React from 'react'

const Card = (props) => {
  const {name, id} = props;
  return (
    <div>
      <div>{name}</div>
      <div>{id}</div>
    </div>
  )
}

export default Card