/* eslint-disable react/no-unescaped-entities */
import parts from "../assets/images/about_us/parts.jpg";
import person from "../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-24">
      <div className="order-2 md:order-1 relative mb-16">
        <img
          src={person}
          alt=""
          className="w-3/4 aspect-square object-cover rounded"
        />
        <img
          src={parts}
          alt=""
          className="absolute -bottom-16 right-0 w-1/2 aspect-square border-8 rounded border-white object-cover"
        />
      </div>
      <div className="order-1 md:order-2 space-y-5">
        <h3 className="text-primary font-bold text-xl">About Us</h3>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </h1>
        <p className="text-secondary">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="text-secondary">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="btn btn-primary md:btn-lg normal-case">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
