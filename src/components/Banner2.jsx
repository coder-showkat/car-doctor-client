/* eslint-disable react/prop-types */
import bg from "../assets/images/checkout/checkout.png";

const Banner2 = ({ children, title }) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-gradient-to-r from-neutral to-transparent relative">
        <h1 className="text-5xl font-bold text-white p-24">{title}</h1>
        <div className="text-white bg-primary px-6 py-2 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
