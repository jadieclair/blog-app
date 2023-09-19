// Import necessary components and modules
import Home from "./pages/home/Home"; // Import the Home page component
import TopBar from "./components/topbar/TopBar"; // Import the top navigation bar component
import Single from "./pages/single/Single"; // Import the Single post page component
import Write from "./pages/write/Write"; // Import the Write post page component
import Settings from "./pages/settings/Settings"; // Import the Settings page component
import Login from "./pages/login/Login"; // Import the Login page component
import Register from "./pages/register/Register"; // Import the Register page component
import About from "./pages/about/About"; // Import the About page component
import Contact from "./pages/contact/Contact"; // Import the Contact page component

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components from react-router-dom
import { useContext } from "react"; // Import the useContext hook from React
import { Context } from "./context/Context"; // Import the context for user authentication

function App() {
  // Access user information from the context
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        {/* Conditionally render Register or Home page based on user authentication */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        {/* Conditionally render Login or Home page based on user authentication */}
        <Route path="/login" element={user ? <Home /> : <Login />} />
        {/* Conditionally render About or Register page based on user authentication */}
        <Route path="/about" element={user ? <About /> : <Register />} />
        {/* Conditionally render Contact or Register page based on user authentication */}
        <Route path="/contact" element={user ? <Contact /> : <Register />} />
        {/* Conditionally render Write or Register page based on user authentication */}
        <Route path="/write" element={user ? <Write /> : <Register />} />
        {/* Conditionally render Settings or Register page based on user authentication */}
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />{" "}
        {/* Define a route for Single post page */}
      </Routes>
    </Router>
  );
}

export default App; // Export the App component as the main entry point of the application

// This code defines routes for various pages, and the pages are conditionally rendered based on whether the user is authenticated or not.
