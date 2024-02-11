import ProtectedRoute from "./components/hoc/Protected.Route";
import AddCar from "./pages/AddCar";
import Edit from "./pages/EditCar/Edit";
import Dashboard from "./pages/Dasboard";
import Login from "./pages/login";
import Cars from "./pages/Cars/Cars";

export const routes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/cars",
    element: <Cars />,
  },
  {
    path: "/admin/cars/add",
    element: (
      <ProtectedRoute>
        <AddCar />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/cars/edit/:id",
    element: (
      <ProtectedRoute>
        <Edit />
      </ProtectedRoute>
    ),
  },
];
