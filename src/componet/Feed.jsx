import React from "react";
import "./feed.scss";
const Feed = ({data}) => {
    const date= data.event_date;
    var Newdate= new Date(date).toLocaleString()
  console.log(data);
  return (
      <div key={data.id}>
          <div className="feed">
            <div className="event">
              <div>Event_name :- {data.event_name} </div>
              <div>
                Event_date <i className="far fa-clock"></i>  {Newdate}
              </div>
            </div>
            <div className="image">
              <img src={data.thumbnail_image} alt="" />
            </div>
            <div className="details">
              <span>
                Views <i className="fas fa-eye"></i> {data.views}
              </span>
              <span>
                Likes <i className="fas fa-thumbs-up"></i> {data.likes}
              </span>
              <span>
                Share <i className="fas fa-share-square"></i> {data.shares}
              </span>
            </div>
          </div>
    </div>
  );
};

export default Feed;
