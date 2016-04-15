import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //ES6 JSON arg magic -- ({video}) => {...} means that "yeah yeah bro look:
  // this here argument's going to be a JSON-object and it's going to have a property/field
  // called "video" and I want you to just give me that ok, thanks. I guess you could
  // throw away the rest or whatever; I don't know?
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};


export default VideoListItem;
