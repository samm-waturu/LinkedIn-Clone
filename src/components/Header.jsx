import React from 'react';
import '../component-styles/header.css';
import HeaderOption from './HeaderOption'
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import {useDispatch} from "react-redux";
import {logout} from "../features/userSlice";
import {auth} from "../firebase";

/*
// import SearchIcon from '@mui/icons-material/Search';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import WorkIcon from '@mui/icons-material/Work';
// import MessageIcon from '@mui/icons-material/Message';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
*/

function Header() {

    const dispatch = useDispatch();

    const logOutApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">

            <div className="header_left">
                <HeaderOption Icon={HomeIcon} title={'Home'}/>
                <HeaderOption Icon={LogoutIcon} title={'Logout'} onClick={logOutApp}/>

                {/*<div className="header_search">
                {/*<SearchIcon />
                {/*<input type="text" placeholder={'search'}/>
                {/*    *search icon*
                {/*</div>*/}

            </div>

            {/*
             Deals with link icons such as my network
                <div className="header_right">
                    <HeaderOption Icon={HomeIcon} title={'Home'}/>
                    <HeaderOption Icon={SupervisorAccountIcon} title={'My network'}/>
                    <HeaderOption Icon={WorkIcon} title={'Jobs'}/>
                    <HeaderOption Icon={MessageIcon} title={'Messaging'}/>
                    <HeaderOption Icon={CircleNotificationsIcon} title={'Notification'}/>
                    <HeaderOption Icon={LogoutIcon} title={'Logout'} onClick={logOutApp}/>
                    <HeaderOption Avatar={true} title={'me'}/>
                 </div>
            */}
        </div>
    );
}

export default Header;