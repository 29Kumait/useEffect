import { useState, useMemo } from "react";
import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const [url, setUrl] = useState(null);
  const myOptions = useMemo(() => ({ url }), [url]);
  // const { data } = useFetch({ url });
  const { data } = useFetch(myOptions);

  console.log("rendering console ");
  return (
    <div className="App">
      <div> UI-TEST .. </div>
      <div> {JSON.stringify(data)} </div>
      <div>
        <button onClick={() => setUrl("/kumait.json")}> KUMAIT </button>
        <button onClick={() => setUrl("/com8.json")}> COM8 </button>
      </div>
    </div>
  );
}

export default App;
