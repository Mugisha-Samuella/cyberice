import React from 'react'
import Form from '../Components/Form/Form';
import { useState } from 'react';

const SignUp = () => {

   const [dataFromChild, setDataFromChild] = useState('');

  const handleName = (data)=>{
      setDataFromChild(data)
  }

  return (
    <div>
      <h1>Hello {dataFromChild}</h1>
     <Child onSendData={handleName}/>
    </div>
  )
}

export default SignUp























// import React, { useState } from 'react'

// const App = () => {
//   const [items, setItems] = useState([]);

//   const addItem = ()=> setItems([...items, "New item"])

//   const removeItem = (index)=> setItems(items.filter((_, i) => i !== index))

//   return (
//     <div>
//       <h1>Stateful List Example</h1>
//       <button onClick={addItem}>Add Item</button>
//       <ul>
//         {items.map((item, index)=>{
//           <li key={index}>
//              {item}
//              <button onClick={()=> removeItem(index)}>Remove</button>
//           </li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App
