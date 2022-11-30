import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { Users} from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import  fetchAllEvents from "./events.cjs";
import { array } from "./events.cjs";

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
  const [posts, setPosts] = useState([])

  useEffect(()=> { 
    const fetchPosts = async () => {   
    const res  = await axios.get('http://localhost:8000/feed' )
    console.log(res);
    }
    fetchPosts();
  },[])


  if (!profile) {
  return (
    <div className="feed">
        <div className="feedWrapper">
            <Share/>            
          
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
