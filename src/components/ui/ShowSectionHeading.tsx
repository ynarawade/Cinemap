import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ShowSectionHeadingProps {
  title: string;
  routePath?: string;
  showViewAll?: boolean;
}

function ShowSectionHeading({
  title,
  routePath,
  showViewAll = true,
}: ShowSectionHeadingProps) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <h2>{title}</h2>
      {showViewAll && (
        <button
          onClick={() => {
            navigate(`/discover/${routePath}`);
          }}
          className="text-neutral-300 hover:text-white text-sm hover:cursor-pointer flex justify-between items-center gap-x-1"
        >
          View All{" "}
          <span>
            {" "}
            <ChevronRight height={16} />{" "}
          </span>
        </button>
      )}
    </div>
  );
}

export default ShowSectionHeading;
