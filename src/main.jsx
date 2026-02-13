import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "./components/Loader";
import "./index.css";

function Root() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <App />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);