import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="animate-spin w-12 h-12 text-accent-50 " />
    </div>
  );
}

export default Loading;
