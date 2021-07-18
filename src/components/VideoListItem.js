const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="flex flex-col mb-2 w-5/12 md:w-2/12 border-white rounded-lg border-2 mx-2"
    >
      <img alt="THUMBNAIL" src={video.snippet.thumbnails.default.url} />
      <p className="text-white font-semibold p-2">{video.snippet.title}</p>
    </div>
  );
};

export default VideoListItem;
