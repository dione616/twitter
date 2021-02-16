import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const App = () => {
  const [state, setState] = useState("Hello World");
  useEffect(() => {
    const res = axios.get(`/home`).then((data: AxiosResponse) => {
      console.log(data);
      setState(data.data);
      return data;
    });
    return () => {};
  }, []);
  return <div>{state}</div>;
};

export default App;
