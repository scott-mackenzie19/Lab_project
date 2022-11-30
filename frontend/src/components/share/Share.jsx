import "./share.css";
import { PermMedia, AccessTime, AddLocation, DateRange } from '@material-ui/icons'

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="./assets/person/person4.jpg" alt="" />
                    <input placeholder="Event Title" className="shareTitle" />
                    <input placeholder="Event description" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareOption">
                    <PermMedia className="shareIcon" />
                    <span className="shareOptionText">Photo</span>
                    <select className="optionInput" >
                        <option >/assets/post/post1.jpg</option>
                        <option>/assets/post/post2.jpg</option>
                        <option>/assets/post/post3.jpeg</option>
                        <option>/assets/post/post4.jpg</option>
                        <option>/assets/post/post5.jpeg</option>
                        <option>/assets/post/post6.webp</option>
                        <option>/assets/post/post7.jpg</option>
                    </select>
                </div>
                <div className="shareOption">
                    <DateRange className="shareIcon" />
                    <span className="shareOptionText">Date</span>
                    <input placeholder="Date" className="shareInput" />
                </div>
                <div className="shareOption">
                    <AccessTime className="shareIcon" />
                    <span className="shareOptionText">Time</span>
                    <input placeholder="Time" className="shareInput" />
                </div>
                <div className="shareOption">
                    <AddLocation className="shareIcon" />
                    <span className="shareOptionText">Location</span>
                    <input placeholder="Location" className="shareInput" />
                </div>
                <div className="shareBottom">
                    <button className="shareButton">Share</button>
                </div>

            </div>
        </div>
    )
}
