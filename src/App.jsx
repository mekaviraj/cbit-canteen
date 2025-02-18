// // import React from "react";
// // import Login from "./components/Login";
// // import "/src/styles/Login.css";

// // function App() {
// //   return (
// //     <div>
// //       <Login />
// //     </div>
// //   );
// // }

// // export default App;
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

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Orders from './components/Orders';
import AdminDashboard from './components/AdminDashboard';
import "/src/styles/Login.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Protected Route wrapper component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  // Admin Route wrapper component
  const AdminRoute = ({ children }) => {
    if (!isAuthenticated || !isAdmin) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<CategoryPage />} />
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />} 
          />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route 
            path="/cart" 
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/orders" 
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;