import "./sidebar.css"
import { RssFeed, Chat, Group, Event } from "@material-ui/icons"
import {  MyFriends } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className ="sidebarIcon" />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className ="sidebarIcon" />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <Group className ="sidebarIcon" />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Event className ="sidebarIcon" />
                    <span className="sidebarListItemText">Events</span>
                </li>
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {MyFriends.map(u=> (
                    <CloseFriend key={u.id} user={u}/>
                ))}
                
            </ul>
        </div>
        
    </div>
  )
}
