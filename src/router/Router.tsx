import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "../App";
import FOPage from "./FOPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NewFOPage } from "./NewFOPage";
import { PopularPage } from "./PopularPage";
import { TrendingPage } from "./TrendingPage";
import { MyFOsPage } from "./MyFOsPage";
import { RegisterPage } from "./RegisterPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewFOPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/my" element={<MyFOsPage />} />
          <Route path="/:id" element={<FOPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
