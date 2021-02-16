import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

const Tweets = () => {
  const [state, setState] = useState("Hi List!");
  useEffect(() => {
    const res = axios.get(`/list`).then((data: AxiosResponse) => {
      console.log(data);
      setState(data.data);
      return data;
    });
    return () => {};
  }, []);
  return (
    <div>
      <h1>Tweets</h1>
      <h3>{state}</h3>
    </div>
  );
};

export default Tweets;
