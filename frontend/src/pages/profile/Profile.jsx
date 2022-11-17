import "./profile.css"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import { Users } from "../../dummyData"

export default function Profile({id}) {
    let user = Users[id];
    if (!user) {
        return (
            <div>How did you even get here bro</div>
        )
    }
    else {
    return (
        <>
            <Topbar /> 
            <div className="profile">
            <Sidebar className="sidebar"/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/post3.jpeg" alt="" />
                            <img className="profileUserImg" src={user.profilePicture} alt="" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.userBio}</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed profile id={id}/>
                        <Rightbar profile id ={id}/>
                    </div>
                </div>

            </div>
        </>
    )
    }
}
