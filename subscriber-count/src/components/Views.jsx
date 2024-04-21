export default function ViewCount() {
  const viewIds = [
    "XqZsoesa55w",
    "kJQP7kiw5Fk",
    "F4tHL8reNCs",
    "WRVsOCh907o",
    "JGwWNGJdvx8",
    "RgKAFK5djSk",
    "e_04ZrNroTo",
    "hq3yfQnllfQ",
    "OPf0YbXqDm0",
    "9bZkp7q19f0",
  ];
  return (
    <>
      <div className="bg-red-100 p-5 min-h-screen">
        <h2 className="font-bold text-center text-2xl p-2">
          Top 10 Most Viewed Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
          {viewIds.map((videoId, i) => (
            <div
              key={videoId}
              className="flex bg-red-500 border p-2 rounded-xl shadow-lg max-w-screen-sm"
            >
              <span className="text-xl text-slate-50 my-auto px-0.5 md:px-2">#{i + 1}</span>
              <iframe
                className="border border-gray-300 rounded-lg shadow-md"
                height="91px"
                width="310px"
                src={`https://socialcounts.org/youtube-video-live-view-count/${videoId}/embed`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
