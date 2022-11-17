import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"

export default function topBar() {
  return (
    <div className ="topbarContainer">
        <div className ="topbarLeft">
            <span className="logo">Event Social</span>
        </div>
        <div className ="topbarCenter">
            <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="Search for friend, or post."type="text" className="searchInput" />

            </div>
            </div>
        <div className ="topbarRight">
          <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Discover</span>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge"> 1</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge"> 2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge"> 1</span>
              </div>
          </div>
          <img src="./assets/person/person1.jfif" alt="" className="topbarImg" />
        </div>
    </div>
  );
}
