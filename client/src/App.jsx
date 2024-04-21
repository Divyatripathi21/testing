import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client1 from './Client1';
import Client2 from './Client2';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/client1" element={<Client1/>}/>
      <Route path="/client2" element={<Client2/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
