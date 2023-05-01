import React, {useEffect, useState} from 'react';
import '../component-styles/feed.css';
import InputOptions from "./InputOptions";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from "./Posts";
import {db} from '../firebase'
import firebase from 'firebase/compat/app';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {

    const user = useSelector(selectUser)

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            ))
    }, [])


    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        //After sending the post - clean up the field
        setInput('')
    }
    // console.log(`${input} am input`)
    return (
        <div className="feed">
            <div className="feed_container">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Post</button>
                    </form>
                </div>

                <div className="feed_options">
                    <InputOptions Icon={ImageIcon} title={'Photo'} color={'#7005f9'}/>
                    <InputOptions Icon={SubscriptionsIcon} title={'Video'} color={'#E7A33E'}/>
                    <InputOptions Icon={EventNoteIcon} title={'Event'} color={'#C0CBCD'}/>
                    <InputOptions Icon={CalendarViewDayIcon} title={'Write'} color={'#7FC15E'}/>
                </div>
            </div>

            {/*posts*/}
            <FlipMove>
                {posts.map(({id, data:{name, description, message, photoUrl}}) => (
                    <Posts
                        key = {id}
                        name={name}
                        description={description}
                        photoUrl={photoUrl}
                        message={message}
                    />
                ))
                }
            </FlipMove>

        </div>
    )
}

export default Feed;