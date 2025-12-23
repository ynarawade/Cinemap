function SkeletonCard() {
  return (
    <div className="bg-dark-100 p-5 rounded-2xl">
      {/* Poster */}
      <div className="w-full aspect-2/3 rounded-xl bg-white/10 animate-pulse" />

      {/* Text */}
      <div className="mt-4 space-y-2">
        <div className="h-4 w-3/4 rounded bg-white/10 animate-pulse" />
        <div className="h-3 w-1/2 rounded bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}

export default SkeletonCard;
