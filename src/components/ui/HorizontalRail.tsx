import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface HorizontalRailProps<T> {
  data: T[];
  renderItem(item: T): React.ReactNode;
}

function HorizontalRail<T>({ data, renderItem }: HorizontalRailProps<T>) {
  const ITEM_WIDTH = 256;
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollLeft() {
    containerRef.current?.scrollBy({
      left: -ITEM_WIDTH,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    containerRef.current?.scrollBy({
      left: ITEM_WIDTH,
      behavior: "smooth",
    });
  }
  return (
    <div className="relative group ">
      {/* Scroll container */}
      <div
        ref={containerRef}
        className="flex space-x-3 overflow-x-auto scrollbar-hide p-3"
      >
        {data.map((data) => renderItem(data))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="
            absolute left-2 top-1/2 -translate-y-1/2
            opacity-0 group-hover:opacity-100
            transition-opacity
            bg-black/60 backdrop-blur
            p-2 rounded-full
            text-white
          "
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="
            absolute right-2 top-1/2 -translate-y-1/2
            opacity-0 group-hover:opacity-100
            transition-opacity
            bg-black/60 backdrop-blur
            p-2 rounded-full
            text-white
          "
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default HorizontalRail;
