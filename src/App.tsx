import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import StackedHeroBanner from "./components/ui/StackedHeroBanner";
function App() {
  return (
    <main className="selection:bg-accent-200 selection:text-accent-50">
      <div className="pattern  blur-lg " />
      <div className="wrapper space-y-20">
        <header className="space-y-1">
          <StackedHeroBanner />
          <h1>
            Find films
            <br />
            worth <span className="text-gradient">watching</span>
          </h1>
          {/* <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
        </header>
        <section>
          <TvShows />
        </section>
        <section>
          <Movies />
        </section>
      </div>
    </main>
  );
}

export default App;
