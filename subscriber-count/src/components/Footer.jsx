export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-0.5 fixed bottom-0 w-full md:mt-16">
      <div className="max-w-4xl mx-auto px-4 flex justify-center items-center">
        <p className="text-lg">
          Data source:{" "}
          <a
            className="text-yellow-200"
            href="https://socialcounts.org/youtube-live-subscriber-count"
          >
            Social Counts
          </a>
        </p>
      </div>
    </footer>
  );
}
