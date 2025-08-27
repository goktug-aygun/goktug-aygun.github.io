import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from "./components/Card";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="row">
      <Card
        title="Master's Education at KU Leuven"
        image="src/assets/images/projects/KU_Leuven_logo.png"
        description="I am pursuing my Master's Degree at KU Leuven with a strong focus on Artificial Intelligence and Machine Learning. I am eager to sharpen my skills and improve my expertise by contributing to projects and research in these fields. My goal is to apply AI-driven approaches to real-world problems and develop efficient, impactful solutions."
        buttonText="Learn More"
        interval="Sep. 2025 - Exp. Jun. 2027"
      />
    </div>      
    </>
  )
}

export default App
