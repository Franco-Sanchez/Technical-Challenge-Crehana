import { useState } from "react";
import Checkout from "./pages/Checkout";
import CourseCatalog from "./pages/CourseCatalog";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [route, setRoute] = useState("catalog");
  let currentRoute: any = null;

  switch (route) {
    case "register":
      currentRoute = <Register goto={setRoute} />;
      break;
    case "login":
      currentRoute = <Login goto={setRoute} />;
      break;
    case "detail":
      currentRoute = <CourseDetail goto={setRoute} />;
      break;
    case "checkout":
      currentRoute = <Checkout goto={setRoute} />;
      break;
    default:
      currentRoute = <CourseCatalog goto={setRoute}/>
      break;
  }

  return <div>{currentRoute}</div>;
}

export default App;
