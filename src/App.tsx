import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index.js";
import HomePage from "./pages/HomePage/index.js";
import LatestLaunchPage from "./pages/LatestLaunchPage/index.js";
import LaunchPage from "./pages/LaunchPage/index.js";
import NextLaunchPage from "./pages/NextLaunchPage/index.js";
import UpcomingPage from "./pages/UpcomingPage/index.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/next" element={<NextLaunchPage />} />
          <Route path="/latest" element={<LatestLaunchPage />} />
          <Route path="/:id" element={<LaunchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
