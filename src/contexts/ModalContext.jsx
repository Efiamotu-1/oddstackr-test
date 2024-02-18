import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

function ModalProvider({children}) {
    const [showModal, setShowModal] = useState(false)
    return <ModalContext.Provider value={{showModal, setShowModal}}>{children}</ModalContext.Provider>
}

export function useModal() {
    const context = useContext(ModalContext)
    return context
}
 
export default ModalProvider