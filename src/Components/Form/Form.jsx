import React, { useState } from 'react'

const Form = ({onSendData}) => {

    const [name, setName] = useState('');

    const handleChange = (e)=>{
        setName(e.target.value)
    }

    const sendData = (e)=>{
        e.preventDefault();
        onSendData(name);
        setName('');
    }

  return (
    <div>
       <label htmlFor=""></label>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={sendData}>Send</button>

    </div>
  )
}

export default Form
