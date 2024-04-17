export function SubscriberCount() {
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
      <div className="bg-red-100 p-5 max-w-4xl mx-auto min-h-screen">
        <h2 className="font-bold text-center text-2xl p-2">
          Top 10 Most Subscribed
        </h2>
        <div className="flex justify-evenly p-5 flex-wrap">
          {channelIds.map((channelId) => (
            <iframe
              key={channelId}
              className="border border-gray-300 rounded-lg shadow-md mt-2"
              height="91px"
              width="310px"
              src={`https://socialcounts.org/youtube-live-subscriber-count/${channelId}/embed`}
              allowFullScreen
            ></iframe>

            // when hovering show actions like "view channel on youtube"
          ))}
        </div>
      </div>
    </>
  );
}
