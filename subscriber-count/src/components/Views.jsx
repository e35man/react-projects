export function ViewCount() {
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
        <div className="grid md:grid-cols-2 place-items-center">
          {viewIds.map((videoId, i) => (
            <div className="flex bg-red-400 border p-2 rounded-xl shadow-lg max-w-screen-sm">
              <span className="text-xl my-auto px-2">#{i + 1}</span>
              <iframe
                key={videoId}
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
