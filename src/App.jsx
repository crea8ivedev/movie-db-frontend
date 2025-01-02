import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import CreateMovie from "./pages/CreateMovie";
import EditMovie from "./pages/EditMovie";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/create" element={<CreateMovie />} />
          <Route path="/movies/:id/edit" element={<EditMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
