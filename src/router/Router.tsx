import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "../App";
import { FoundPage } from "../pages/Found";
import { HomePage } from "../pages/Home";
import { NewFoundPage } from "../pages/New";
import { LoginPage } from "../pages/Login";
import { MyFOsPage } from "./MyFOsPage";
import { PopularPage } from "./PopularPage";
import { RegisterPage } from "../pages/Register";
import { TrendingPage } from "./TrendingPage";
import { FeedPage } from "../pages/Feed";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewFoundPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/my" element={<MyFOsPage />} />
          <Route path="/:id" element={<FoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
