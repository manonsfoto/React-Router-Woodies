import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Categories from "./pages/categories/Categories";
import Jenson from "./pages/jenson/Jenson";
import Deon from "./pages/deon/Deon";
import Krisha from "./pages/krisha/Krisha";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
        <Route path="jenson" element={<Jenson />} />
        <Route path="deon" element={<Deon />} />
        <Route path="krisha" element={<Krisha />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
