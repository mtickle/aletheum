import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "@components/ScrollToTop";
import Layout from "@layouts/Layout";
import HomePage from "@pages/HomePage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}