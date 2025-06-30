import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { PlayerProfile } from "./pages/PlayerProfile";

import "./App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/player/:username" element={<PlayerProfile />} />
  </Routes>
);

export default App;
