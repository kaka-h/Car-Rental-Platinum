import DetailCarPage from "./pages/DetailCarPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Registerpage from "./pages/registerpage";
import SearchResult from "./pages/SearchResult";
import Payment from "./pages/Payment";
import TransferPages from "./pages/TransferPages";
import Eticket from "./pages/E-Ticket"
import AuthLogin from "./components/hoc/authLogin";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/search",
    element: <SearchResult />,
  },
  {
    path: "/detail/:id",
    element: <DetailCarPage />,
  },
  {
    path: "/payment/:id",
    element: (
      <AuthLogin>
        <Payment/>
      </AuthLogin>)
  },
  {
    path: "/transfer/:id",
    element: <TransferPages/>
  },
  {
    path: "/eticket/:id",
    element: <Eticket/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <Registerpage />,
  },
];
