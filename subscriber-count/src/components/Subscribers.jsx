export default function SubscriberCount() {
  const channelIds = [
    "UCq-Fj5jknLsUf-MWSy4_brA",
    "UCX6OQ3DkcsbYNE6H8uQQuVA",
    "UCbCmjCuTUZos6Inko4u57UQ",
    "UCpEhnqL0y41EpW2TvWAHD7Q",
    "UCk8GzjMOrta8yxDcKfylJYw",
    "UCvlE5gTbOvjiolFlEm-c_Ow",
    "UCJplp5SjeGSdVdwsfb9Q7lQ",
    "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    "UCFFbwnve3yF62-tVXkTyHqg",
    "UCJ5v_MCY6GNUBTO8-D3XoAg",
  ];
  return (
    <>
      <div className="min-h-screen min-w-full container mb-5 bg-red-100 p-5">
        <h2 className="font-bold text-center text-2xl p-2">
          Top 10 Most Subscribed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-evenly place-items-center ">
          {channelIds.map((channelId, i) => (
            <div
              key={channelId}
              className="flex bg-red-500 border p-2 rounded-xl shadow-lg mx-auto"
            >
              <span className="text-xl my-auto px-0.5 md:px-2 text-slate-50">#{i + 1}</span>
              <iframe
                className="border border-gray-300 rounded-lg shadow-md"
                height="91px"
                width="310px"
                src={`https://socialcounts.org/youtube-live-subscriber-count/${channelId}/embed`}
                allowFullScreen
              ></iframe>
            </div>
            // when hovering show actions like "view channel on youtube"
          ))}
        </div>
      </div>
    </>
  );
}
