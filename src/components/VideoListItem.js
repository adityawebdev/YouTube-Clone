const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="flex flex-col mb-2 w-5/12 md:w-2/12  bg-gray-300 rounded-lg mx-2"
    >
      <img alt="THUMBNAIL" src={video.snippet.thumbnails.high.url} />
      <p className="text-black font-semibold p-2">{video.snippet.title}</p>
    </div>
  );
};

export default VideoListItem;
