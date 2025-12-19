import { useState } from "react";

function App() {
  return (
    <div className="h-screen w-full p-4 m-auto">
      App
      <Card title="Starwars" ratings={3.9} isLiked={true} />
      <Card title="Avatar" ratings={4.5} isLiked={false} />
      <Card title="Inception" ratings={4.9} isLiked={true} />
    </div>
  );
}

interface CardInterface {
  title: string;
  ratings: number;
  isLiked: boolean;
}

const Card = ({ title, ratings, isLiked }: CardInterface) => {
  const [hasLiked, setHasLiked] = useState<boolean>(isLiked ?? false);
  return (
    <div className="bg-neutral-300 w-25 m-2 p-3 rounded-2xl space-y-3.5">
      <h2 className="">{title}</h2>
      <h5>{ratings}/5.0</h5>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export default App;
