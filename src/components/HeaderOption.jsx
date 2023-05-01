import React from 'react';
import '../component-styles/headerOption.css'
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {Avatar} from "@mui/material";

function HeaderOption({Icon, title, Acc, onClick}) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon"/>}
            {Acc && (
                <Avatar className="sidebar_avatar" src={user?.photoUrl}> {user?.email[0]}  </Avatar> )}
            <h3 className={'header_title'}>{title}</h3>
        </div>
    )
}

export default HeaderOption;