import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

function UserProvider({children}) {
    const [users, setUsers] = useState()

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setUsers(data)
            console.log(data)
        }

        fetchUser()
    }, [])
    return <UserContext.Provider value={{users}}>{children}</UserContext.Provider>
}

export function useUsers() {
    const context = useContext(UserContext)
    return context
}

export default UserProvider