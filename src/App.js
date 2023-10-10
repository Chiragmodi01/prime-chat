import "./App.css";
import { ChatRoom, SignIn } from "./screens";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from "react";
import { useMain } from "./helpers/context/main-context";
import { LoadingAnimation } from "./components";

firebase.initializeApp({
  apiKey: "AIzaSyCa1ujh5UzuQVslesY3LIQe25rIWorAWwI",
  authDomain: "primechat-3cc74.firebaseapp.com",
  projectId: "primechat-3cc74",
  storageBucket: "primechat-3cc74.appspot.com",
  messagingSenderId: "574230904484",
  appId: "1:574230904484:web:dafa7682a965a4b552f031"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}

function App() {
  const[user, loading, error] = useAuthState(auth);
  const [loadingChats, setLoadingChats] = useState(true);
  const {socket, searchVal, setSearchVal, chatsArr, setChatsArr, filteredChatsArr, setFilteredChatsArr} = useMain();
  
  const handleSignOut = () => {
    const confirmResp = window.confirm("Do you want to log out of the app?");
    return confirmResp && auth.signOut()
  }

  useEffect(() => {
    socket && socket.connected && socket.emit('setUser', user);
  }, [socket])

  useEffect(() => {
     setTimeout(() => {
      return loading && setLoadingChats(false)
    }, 2000)
  }, [loading])

	return (
		<div className="App">
      {
           loadingChats ? <LoadingAnimation /> :
      (user ? <ChatRoom handleSignOut={handleSignOut} user={user} setChatsArr={setChatsArr} searchVal={searchVal} setSearchVal={setSearchVal} filteredChatsArr={filteredChatsArr} chatsArr={chatsArr} /> : <SignIn signInWithGoogle={signInWithGoogle}/>)
      }
		</div>
	);
}

export default App;
