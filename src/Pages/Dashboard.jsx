import React, { useState } from 'react'
import Form from '../Components/Form/Form'

const Dashboard = () => {

    const [dataFromChild, setDataFromChild] = useState('');

    const handleData = (data) => {
        setDataFromChild(data)
    }

  return (
    <div>
      <h1>Good Morning {dataFromChild} </h1>
      <Form onSendData={handleData}/>
    </div>
  )
}

export default Dashboard
