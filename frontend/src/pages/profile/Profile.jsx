import "./profile.css"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import { Users } from "../../dummyData"

export default function Profile({id}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    let user =""
    let index
    console.log(id);
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].username === id) {
        user = Users[i]
        index = i
        console.log(index)
        }

    }
    
    if (user) {
    return (
        <>
            <Topbar /> 
            <div className="profile">
            <Sidebar className="sidebar"/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={PF+"post/post3.jpeg"} alt="" />
                            <img className="profileUserImg" src={PF+user.profilePicture} alt="" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username} {console.log(user.username)}</h4>
                        <span className="profileInfoDesc">{user.userBio}</span>
                    </div>
                    <div className="profileRightBottom">
                        {console.log(index)}
                        <Feed profile id={index}/>
                        <Rightbar profile id ={index}/>
                    </div>
                </div>
            </div>
        </>
    )
    }
    else  {
        return (
            <div>How did you even get here bro</div>
        )
    }
}
