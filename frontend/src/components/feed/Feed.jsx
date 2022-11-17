import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import {HomePosts, Users} from "../../dummyData";

const ProfileFeed =({id})=> {
  let UserPosts = Users[id].UserPosts
  let user = Users[id].username
  if (UserPosts) {

  return (
    <div className="feed">
        <div className="feedWrapper">
            
            {UserPosts.map(p=>(
              <Post id ={user} key ={p.id} post={p}/>
            ))}
        </div>
    </div>
  )
        }
        else {
          return (
            <div className="feed">
        <div className="feedWrapper">
            
            <div>This user has no posts.</div>
        </div>
    </div>
          )
        }
}

export default function Feed({profile, id}) {
  if (!profile) {
  return (
    <div className="feed">
        <div className="feedWrapper">
            <Share/>            
            {HomePosts.map(p=>(
              <Post key ={p.id} post={p}/>
            ))}
        </div>
    </div>
  )
            }
  else {
    return (
      <ProfileFeed id={id}/>
    )
  }
}
