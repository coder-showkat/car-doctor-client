import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner2 from "../../components/Banner2";

const Appointment = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, img, service_id, price } = service;
  const navigate = useNavigate();

  const handleAppointment = (e) => {
    e.preventDefault();
    const form = e.target;
    const customerName = form.customerName.value;
    const email = form.email.value;
    const date = form.date.value;
    const cost = form.cost.value;
    const message = form.message.value;
    try {
      if (
        customerName.trim().length === 0 ||
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) === false ||
        date.trim().length === 0 ||
        cost.trim().length === 0 ||
        message.trim().length === 0
      )
        throw new Error("Please input all field with valid information.");
      fetch("http://localhost:5001/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName,
          email,
          date,
          service_id,
          service: title,
          img,
          cost,
          message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            Swal.fire({
              icon: "success",
              text: "You have successfully appointed for a service.",
            }).then(() => navigate("/"));
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            text: err.message,
          });
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 mt-4 mb-12">
      <Banner2 title="Appointment">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        /Appointment
      </Banner2>

      <form
        onSubmit={handleAppointment}
        className="bg-secondary/20 rounded-lg p-10 mt-16 space-y-6"
      >
        <h1 className="text-center font-semibold text-2xl pb-4">
          Service Name: {title}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 form-control w-full">
            <input
              type="text"
              id="customerName"
              className="input"
              placeholder="Customer Name"
              defaultValue={user.displayName}
            />
          </div>
          <div className="flex-1 form-control w-full">
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Email"
              defaultValue={user.email}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 form-control w-full">
            <input type="date" id="date" className="input" placeholder="Date" />
          </div>
          <div className="flex-1 form-control w-full">
            <input
              type="text"
              id="cost"
              className="input"
              placeholder="Service cost"
              defaultValue={"$" + price}
            />
          </div>
        </div>
        <div className="form-control">
          <textarea
            id="message"
            className="input py-2 h-48"
            placeholder="Your Message"
          />
        </div>
        <button type="submit" className="btn btn-primary normal-case w-full">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
