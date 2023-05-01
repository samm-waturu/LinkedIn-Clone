import React from 'react';
import HeaderOption from './HeaderOption'
import '../component-styles/sidebar.css'
import {useSelector} from 'react-redux'
import {selectUser} from "../features/userSlice";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return (
            <div className="recent-item">
                <span className="sidebar_recentItems">
                  <b>
                      #
                  </b>
                </span>
                <p>{topic}</p>
            </div>
        )
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                {/*<img src={bgCover} alt="profile background-color"/>*/}
                <HeaderOption Acc={true}/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">

                <div className="sidebar_stat">
                    <p>
                        Who Viewed you
                    </p>
                    <p>
                        <span className="sidebar_statCount">1,052</span>
                    </p>
                </div>

                <div className="sidebar_stat">
                    <p>
                        Views on post
                    </p>
                    <p>
                        <span className="sidebar_statCount"> 5,012</span>
                    </p>
                </div>

            </div>
            <div className="sidebar_bottom">
                <p>
                    <b>
                        Recent posts
                    </b>

                </p>
                {recentItem('React.JS')}
                {recentItem('Firebase')}
                {recentItem('React Redux')}
                {/*{recentItem('Design')}*/}
                {/*{recentItem('Developer')}*/}
            </div>
        </div>
    )
}

export default Sidebar;