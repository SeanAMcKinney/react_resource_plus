import "./App.css";
import Navigation from "./Components/Navigation";
//Below we are going to import a few mechanisms from react-router-dom
//1. Router   2. Routes  (kind of like a switch)  3.Route (gives instructions on which component tree to display as different routes are encountered)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components to import
import Bootstrap from "./Components/Bootstrap/Bootstrap";
import Routing from "./Components/Routing/Routing";
import Resources from "./Components/Resources/Resources";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        {/* The Browser Router is aliased as Router,. We surround Navigation because it has Link components that work with the BrowserRouter component. This comes from react-router-dom's docs */}
        <Navigation />
        {/*For every route we want to render a portion of our site for, we will create a Route component. It connects the url path wih a specific component to render  */}
        <Routes>
          <Route path="/" element={<Resources />} />
          <Route path="bootstrap" element={<Bootstrap />} />
          <Route path="routing" element={<Routing />} />
          {/* The NotFound component will be our error handling page and will be tied to a any other Route than what is detailed above. We have Resources, Bootstrap, and Routing which are tied to specific routes. The NotFound component will be tied to any other Route we haven't detailed */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
