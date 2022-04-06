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
import AuthProvider from "./contexts/AuthContext";
import Login from "./Components/Auth/Login";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* The Browser Router is aliased as Router,. We surround Navigation because it has Link components that work with the BrowserRouter component. This comes from react-router-dom's docs */}
          <Navigation />
          {/*For every route we want to render a portion of our site for, we will create a Route component. It connects the url path wih a specific component to render  */}
          <Routes>
            {/* ProtectedRoute is surrounding the Resources route so you have to go to Login first */}
            <Route path="/" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
            <Route path="resources" element={<ProtectedRoute><Resources/></ProtectedRoute>} />
            <Route path="categories" element={<ProtectedRoute><Categories/></ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="bootstrap" element={<ProtectedRoute><Bootstrap /></ProtectedRoute>} />
            <Route path="routing" element={<ProtectedRoute><Routing /></ProtectedRoute>} />
            {/* The NotFound component will be our error handling page and will be tied to a any other Route than what is detailed above. We have Resources, Bootstrap, and Routing which are tied to specific routes. The NotFound component will be tied to any other Route we haven't detailed */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
