import { key } from "localforage";
import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5 my-16">
        <h3 className="text-2xl font-semibold text-rose-600">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="max-w-xl mx-auto ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
              </p>
      </div>
          <div className="grid grid-cols-3 my-16 gap-8">
              {
                 service.map(item => <ServiceCard key={item._id} serviceItem={item}></ServiceCard>)
              }
      </div>
    </div>
  );
};

export default Service;
