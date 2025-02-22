// import React from "react";
// import Login from "./components/Login";
// import "/src/styles/Login.css";

// function App() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import CategoryPage from "./components/CategoryPage";
// import Login from "./components/Login";
// import "/src/styles/Login.css";

// function App() {
//   return (
//     <>
//       <div>
//         <CategoryPage />
//         <Login />
//       </div>
//     </>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import OTPVerification from "./pages/OTPVerification";
// import RoleSelection from "./pages/RoleSelection";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/otp" element={<OTPVerification />} />
//         <Route path="/role" element={<RoleSelection />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Will create soon
import OTPVerification from "./pages/OTPVerification"; // Will create soon
import RoleSelection from "./pages/RoleSelection"; // Will create soon

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/role" element={<RoleSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
