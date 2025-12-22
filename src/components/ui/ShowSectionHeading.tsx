import { ChevronRight } from "lucide-react";

interface ShowSectionHeadingProps {
  title: string;
  routePath: string;
}

function ShowSectionHeading({ title, routePath }: ShowSectionHeadingProps) {
  return (
    <div className="flex justify-between">
      <h2>{title}</h2>
      <button
        onClick={() => console.log(`Going to ${routePath} route`)}
        className="text-neutral-300 hover:text-white text-sm hover:cursor-pointer flex justify-between items-center gap-x-1"
      >
        View All{" "}
        <span>
          {" "}
          <ChevronRight height={16} />{" "}
        </span>
      </button>
    </div>
  );
}

export default ShowSectionHeading;
