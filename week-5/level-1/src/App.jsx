import { useState } from 'react'
import './App.css'
import BusinessCard from './components/BusinessCard'

function App() {

  const usersData=[{
    name:"Shravan Chinchkar",
    description:"A B.E. Student",
    interest:["Driving Cars","Coding","Gym"],
    socialMedia:["Instagram","LinkedIn","Twitter"]
  }]

  return (
    <div>
      <BusinessCard userData={usersData}/>
    </div>
  )
}

export default App
