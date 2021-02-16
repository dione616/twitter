import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const Home = () => {
  const [state, setState] = useState("Hello World");
  useEffect(() => {
    const res = axios
      .get(`/home?email=veta@gmail.com&pass=password123`)
      .then((data: AxiosResponse) => {
        console.log(data);
        setState(data.data);
        return data;
      });
    return () => {};
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <h3>{state}</h3>
    </div>
  );
};

export default Home;
