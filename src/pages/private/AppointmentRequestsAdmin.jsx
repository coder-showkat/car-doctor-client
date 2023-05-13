import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner2 from "../../components/Banner2";

const AppointmentRequestsAdmin = () => {
  const { user } = useContext(AuthContext);
  const [appointmentRequests, setAppointmentRequests] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5001/api/admin/appointments`)
        .then((res) => res.json())
        .then((data) => setAppointmentRequests(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleApprove = (id) => {
    fetch(`http://localhost:5001/api/admin/appointments/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setAppointmentRequests((requests) =>
            requests.map((request) => {
              if (request._id === id) {
                request.approved = true;
                return request;
              } else return request;
            })
          );
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto px-4 mt-4 mb-12">
      <Banner2 title="Appointment Requests">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        /Admin/Appointment-Requests
      </Banner2>

      {appointmentRequests.length === 0 && (
        <p className="text-center py-14 text-error font-medium">
          You did not requested for any services
        </p>
      )}

      <table className="w-full my-12">
        <tbody>
          {appointmentRequests.map((request) => (
            <tr key={request._id}>
              <td className="p-2">
                <img
                  src={request.img}
                  alt=""
                  className="w-28 aspect-square object-cover rounded-md"
                />
              </td>
              <td className="p-2">{request.service}</td>
              <td className="p-2">{request.cost}</td>
              <td className="p-2">{request.data}</td>
              <td className="p-2">
                <button
                  onClick={() => handleApprove(request._id)}
                  disabled={request.approved}
                  className="btn btn-primary disabled:bg-info normal-case"
                >
                  {request.approved ? "Approved" : "Approve"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentRequestsAdmin;
