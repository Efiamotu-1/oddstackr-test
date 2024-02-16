import { Route, Routes } from "react-router-dom"

function App() {

  return (

    <div>
      <Routes>
          <Route path="/" element={<div>Home</div>}/>
          <Route path="/about" element={<div>About</div>}/>
      </Routes>
    </div>
  )
}

export default App
