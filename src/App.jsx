import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import {useDispatch, useSelector} from "react-redux";
import {logout, login, selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import Widget from "./components/Widget";

function App() {

    const user = useSelector(selectUser)

    console.log(user)

    const dispatch = useDispatch();

    //Login persistence
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(login({
                    // store.js to auth info
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])


    //End of login persistence

    return (
        <div className='app'>

            <Header/>

            {!user || !user.uid ? (
                    <Login/>
                ) :
                (
                    <div className='app_body'>
                        <Sidebar/>
                        {/*sidebar*/}
                        <Feed/>
                        {/*widget*/}
                        <Widget />
                    </div>
                )
            }


        </div>
    );
}

export default App;
