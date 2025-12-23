import { Outlet } from "react-router-dom";

function BaseLayerLayout() {
  return (
    <main className="selection:bg-accent-200 selection:text-accent-50">
      <div className="pattern  blur-xl " />
      <div className="wrapper space-y-20">
        <Outlet />
      </div>
    </main>
  );
}

export default BaseLayerLayout;
