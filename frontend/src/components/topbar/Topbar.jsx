import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function topBar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
            <Link className="linkWrapper" to="/" style={{textDecoration:"none"}}>
                <span className="topbarLink">Homepage</span>
                </Link>
                <Link className="linkWrapper" to="/" style={{textDecoration:"none"}}>
                <span className="topbarLink">Discover</span>
                </Link>
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
          <Link to='/profile/Scott_mackenzie'className="profileLink"  >
          <img src={PF +"person/person4.jpg"} alt="" className="topbarImg" />
          </Link>
        </div>
    </div>
  );
}
