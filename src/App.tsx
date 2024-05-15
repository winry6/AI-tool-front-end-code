import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AIChatbot from "./pages/AIChatbot";
import LandingPage from "./pages/LandingPage";
import IndicatorSearch from "./pages/IndicatorSearch";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/indicator-search":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AIChatbot />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/indicator-search" element={<IndicatorSearch />} />
    </Routes>
  );
}
export default App;
