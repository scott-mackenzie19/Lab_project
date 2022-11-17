import "./post.css"
import { MoreVert, AddLocation, AccessTime } from "@material-ui/icons"
import {Users} from "../../dummyData";
import {useState} from "react";

export default function Post({post, id}) {
    const [like,setLike] = useState(post.like) 
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = ()=> {
        setLike(isLiked ? like-1: like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                    <span className="postTime">{post.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postTitleText">{post.title}</div>
                <div className="postLocationWrapper">
                    <AddLocation className="postLocationIcon"/>
                    <div className="postLocationText">{post.location}</div>
                </div>
                <div className="postLocationWrapper">
                    <AccessTime className="postLocationIcon"/>
                    <div className="postLocationText">{post.time}</div>
                </div>
                <span className="postText">{post.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="postLikeIcon" src="./assets/like.png" onClick={likeHandler} alt="" />
                    <img className="postLikeIcon" src="./assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} People like this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
