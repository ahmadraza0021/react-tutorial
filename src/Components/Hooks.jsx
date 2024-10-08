import React, { useState } from 'react'

const Hooks = () => {
  const [name, setName] = useState(false);
  console.log(name);
  return (
    <div><button onClick={()=>setName(true)}>{name?'Ahmad Raza':'Ahmad'}</button></div>
  )
}

export default Hooks







// import React, { useState } from 'react'


// const Hooks = () => {
//   const [loading, setLoading] = useState(false);
//   console.log(loading);
//   return (
//     <div>
//       <button onClick={()=>setLoading(true)}>{loading?'Loading':'Click'}</button>
//     </div>
//   )
// }

// export default Hooks






// import React, { useState } from 'react'
// const Hooks = () => {
//   const [name, setName] = useState('Ahmad');)
//   // console.log(name);
//   return (
//     <div> <button onClick={()=>setName('Raza')}>{name}</button> </div>

//   )
// }

// export default Hooks