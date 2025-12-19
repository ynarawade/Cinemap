function StackedHeroBanner() {
  return (
    <div className="relative h-105 w-full max-w-3xl mx-auto">
      {/* Left background card */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-60 h-90
          -translate-x-full -translate-y-1/2
          -rotate-6
          z-10
          rounded-2xl
          overflow-hidden
          shadow-xl
        "
      >
        <img
          src="/kantara-ch1.jpg"
          alt="Kantara chapter 1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right background card */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-60 h-90
          -translate-x-0.5 -translate-y-1/2
          rotate-6
          z-10
          rounded-2xl
          overflow-hidden
          shadow-xl
        "
      >
        <img
          src="https://m.media-amazon.com/images/M/MV5BOGRjMzM1ZmUtMjk0Yi00NzA0LTk3ZWYtZWM3MWY3M2EwMjBhXkEyXkFqcGc@._V1_.jpg"
          alt="Panchayat"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Front / main card */}

      <div
        className="
          absolute left-1/2 top-1/2
          w-60 h-90
          -translate-x-1/2 -translate-y-1/2
          z-20
          rounded-2xl
          overflow-hidden
          shadow-2xl
        "
      >
        <img
          src="/avatar-fire.jpg"
          alt="Avatar Fire and Ash"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default StackedHeroBanner;
