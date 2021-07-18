const Video = ({ video }) => {
  if (!video)
    return (
      <div className="flex justify-center items-center mx-4 my-4 md:mx-10 md:mt-32">
        <p className="text-white font-black text-6xl">
          Watch Youtube videos ads-free with a single search 😎
        </p>
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="flex flex-col mx-6 my-6 w-11/12 items-stretch">
      <iframe
        frameBorder="0"
        title="Video Player"
        src={videoSrc}
        height="500"
        className=""
      />
      <p className="text-white font-semibold text-2xl mt-2">
        {video.snippet.title}
      </p>
      <p className="text-white font-semibold text-3xl">
        {video.snippet.channelTitle}
      </p>
      <p className="text-white font-normal text-xl">
        {video.snippet.description}
      </p>
    </div>
  );
};

export default Video;
