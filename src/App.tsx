import StackedHeroBanner from "./components/HeroBanner/StackedHeroBanner";

function App() {
  return (
    <main>
      <div className="pattern  blur-lg " />
      <div className="wrapper">
        <header>
          <StackedHeroBanner />
          <h1>
            Find films
            <br />
            worth <span className="text-gradient">watching</span>
          </h1>
        </header>
      </div>
    </main>
  );
}

export default App;
