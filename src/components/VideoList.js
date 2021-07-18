import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoListItem key={id} video={video} onVideoSelect={onVideoSelect} />
  ));

  return <div className="flex flex-wrap justify-center">{listOfVideos}</div>;
};

export default VideoList;
