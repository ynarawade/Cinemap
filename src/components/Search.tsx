import { SearchIcon } from "lucide-react";

interface SearchBarInterface {
  searchQuery: string;
  setSearchQuery(value: string): void;
}

function Search({ searchQuery, setSearchQuery }: SearchBarInterface) {
  return (
    <div className="search">
      <div>
        <SearchIcon />
        <input
          type="text"
          placeholder="search your fav movie"
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
