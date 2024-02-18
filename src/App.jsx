import { Route, Routes } from "react-router-dom"
import Holders from "./components/Holders"
import Navbar from "./components/Navbar"
import UserProvider from "./contexts/UsersContext"
import UserProfile from "./components/UserProfile"
import ModalProvider from "./contexts/ModalContext"

function App() {
  

  return (
    
    <div className="md:px-[5rem] p-5">
      <UserProvider>
        <ModalProvider>
              <Navbar />
          <Routes>
              <Route path="/" element={<Holders />}/>
              <Route path="/user-profile/:userId" element={<UserProfile />}/>
          </Routes>
        </ModalProvider>
      </UserProvider>
    </div>
  )
}

export default App
