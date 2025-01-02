import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Login />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
