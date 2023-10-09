import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import io from 'socket.io-client';

const MainContext = createContext();

function MainProvider({ children }) {
    const [chatsArr, setChatsArr] = useState([]);
    const URL = 'https://primechat-backend.onrender.com/getChatsData';

      const [filteredChatsArr, setFilteredChatsArr] = useState([]);
      const [searchVal, setSearchVal] = useState('');
      const [showNewchatModal, setShowNewchatModal] = useState(false);
      const [selectedChat, setSelectedChat] = useState();
      const [socket, setSocket] = useState(null);
      const [message, setMessage] = useState({});

      useEffect(() => {
        const newSocket = io(`https://primechat-server.onrender.com`);
    
        setSocket(newSocket);
    
        return () => newSocket.close()
      }, [setSocket]);

      useEffect(() => {
        const filteredResults = chatsArr.filter((user) => {
            return user.userName.toLowerCase().includes(searchVal.toLowerCase())
      })
        setFilteredChatsArr(filteredResults)
    }, [searchVal])

    const fetchData = async () => {
      try {
        const resp = await axios.get(URL);
        const data = await resp?.data;
        setChatsArr(data)
      } catch(error) {
        console.error('Error Occured:', error)
      }
    }


    useEffect(() => {
      fetchData()
    }, [])


      return (
        <MainContext.Provider value={{message, setMessage, socket, selectedChat, setSelectedChat, showNewchatModal, setShowNewchatModal, chatsArr, setChatsArr, filteredChatsArr, setFilteredChatsArr, searchVal, setSearchVal}}>
            {children}
        </MainContext.Provider>
      )
}

const useMain = () => useContext(MainContext);

export { MainProvider, useMain };