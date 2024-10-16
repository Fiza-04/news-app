// import { useEffect } from "react";
// import "./App.css";
// import fetchData from "./api/newsApi";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  // useEffect(() => {
  //   const newsData = fetchData();

  //   console.log(newsData);
  // }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
