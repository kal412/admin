import axios from "axios";
import "../styles/Services.css";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-api-kalyan.herokuapp.com/api/v1/index")
      .then((res) => {
        setService(res.data[0].services);
      });
  }, []);

  return (
    <div className="services">
      {service.length === 0
        ? "loading......"
        : service.map((item) => {
            return <ServiceCard service={item} />;
          })}
    </div>
  );
};

export default Services;
