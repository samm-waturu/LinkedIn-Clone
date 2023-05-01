import React, {useState} from 'react'
import '../component-styles/login.css'
import {auth} from "../firebase";
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";

function Login() {
    // login basics
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [img, setImg] = useState('')
    const dispatch = useDispatch()
    //Registering a new user
    const register = () => {
        if (!name || !email || !password) {
            return alert(`Please enter the required fields`)
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                //firebase keys
                displayName: name,
                photoURL: img
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,//firebase
                        displayName: name,
                        photoUrl: img
                    }))
                })
        })
            .catch(error => alert(error))

    }

    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL

            }))
        })
            .catch((error) => alert(error))
        // setImg('');
        // setName('');
        // setEmail('');
        // setPassword('');

    }
    return (
        <div className="login">
            <div className="login">
                <h1>
                    Basic Demo
                </h1>
                <h4>
                    Create an account if not registered
                </h4>
            </div>
            <form action="">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                       placeholder={'Full names (required)'}/>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)}
                       placeholder={'Profile pic URL (optional)'}/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                       placeholder={'Email (required)'}/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder={'Password (required)'}/>

                <button type='submit' onClick={loginToApp}>Sign in</button>

            </form>

            <p>
                Not a member?{' '}
                <span className={'login_register'} onClick={register}>
                Register now
                </span>
            </p>
        </div>
    )
}

export default Login
