import "./rightbar.css"
import { Settings } from "@material-ui/icons"
import FriendList from "../friendList/FriendList.jsx"
import { Users } from "../../dummyData"



export default function Rightbar({ profile, id }) {

  const HomeRightbar = () => {
    return (
      <div className="settingsContainer">
        <Settings className="settingsIcon" />
        <div className="settingText">Settings</div>
      </div>

    )
  }

  const ProfileRightBar = () => {
    let user = Users[id]
    let UserFriends = Users[id].UserFriends
    if (UserFriends) {
      return (
        <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Zipcode:</span>
              <span className="rightbarInfoValue">{user.zipcode}</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Age:</span>
              <span className="rightbarInfoValue">{user.age}</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">{user.city}</span>
            </div>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            {UserFriends.map(u => (
              <FriendList key={u.id} user={u} />
            ))}
          </div>
        </>
      )
    }
    else {
      return (<>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Zipcode:</span>
            <span className="rightbarInfoValue">{user.zipcode}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Age:</span>
            <span className="rightbarInfoValue">{user.age}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div>This user has no friends.</div>
      </>
      )
    }
  }
  if (profile) {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <ProfileRightBar />
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <HomeRightbar />
        </div>
      </div>
    )
  }
}
