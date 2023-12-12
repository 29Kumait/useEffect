import "./App.css";

import { useEffect, useState } from "react";

import { useFetch } from "./useFetch";

const useStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Count = ${count}`);
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return count;
};

function App() {
  const [url, setUrl] = useState(null);
  const count = useStopwatch();
  const { data } = useFetch({ url, onSuccess: () => console.log("success") });

  console.log("rendering console ");
  return (
    <div className="App">
      <div> UI-TEST .. </div>
      <div>Count: {count} </div>
      <div> {JSON.stringify(data)} </div>
      <div>
        <button onClick={() => setUrl("/kumait.json")}> KUMAIT </button>
        <button onClick={() => setUrl("/com8.json")}> COM8 </button>
      </div>
    </div>
  );
}

export default App;
