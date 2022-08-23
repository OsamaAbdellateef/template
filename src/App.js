import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Content/Content";
import Loader from "./Loader/Loader";
import Navbar from "./Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
