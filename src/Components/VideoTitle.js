const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 pt-36 px-12 text-white z-10 pointer-events-none bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold pointer-events-auto">{title}</h1>
      <p className="py-6 text-sm w-1/4 pointer-events-auto">{overview}</p>
      <div className="pointer-events-auto">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-slate-400 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
