import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Appointment from "../pages/private/Appointment";
import AppointmentRequests from "../pages/private/AppointmentRequests";
import AppointmentRequestsAdmin from "../pages/private/AppointmentRequestsAdmin";
import PrivateRoute from "../pages/private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment/:id",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/api/services/${params.id}`),
      },
      {
        path: "/appointment-requests",
        element: (
          <PrivateRoute>
            <AppointmentRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/appointment-requests",
        element: (
          <PrivateRoute>
            <AppointmentRequestsAdmin />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
