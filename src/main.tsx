import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Discover from "./components/Discover";
import BaseLayerLayout from "./components/ui/BaseLayerLayout";
import "./index.css";
import NotFound from "./NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayerLayout />}>
          <Route index element={<App />} />
          <Route path="/discover/:slug" element={<Discover />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
