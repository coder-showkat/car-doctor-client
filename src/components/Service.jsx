/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="space-y-5 my-24">
      <h3 className="text-primary text-xl text-center font-bold">Service</h3>
      <h1 className="text-5xl text-center font-bold">Our Service Area</h1>
      <p className="max-w-xl text-center mx-auto text-secondary">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
