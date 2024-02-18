import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

function UserProvider({children}) {
    const [users, setUsers] = useState()
    const [comments, setComments] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setUsers(data)

        }
        
        fetchUser()
    }, [])

    const fetchMoreData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${page}&_limit=10`);
          const data = await response.json();
          if (data.length === 0) {
            setHasMore(false);
          } else {
            setComments(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 10);
          }
        } catch (error) {
          console.error('Error fetching more data:', error);
        }
      };

    return <UserContext.Provider value={{users, comments, hasMore, fetchMoreData}}>{children}</UserContext.Provider>
}

export function useUsers() {
    const context = useContext(UserContext)
    return context
}

export default UserProvider