//npm run dev

import "./App.css";
import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import ContactUs from "./pages/ContactUs";
import TransactionHistory from "./pages/TransactionHistory";
import TransferAmount from "./pages/TransferAmount";

function App() {
  return (

      <Router>
        <Navbar />

        <main className="main-content">
          <div style={{ paddingTop: "5rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Customer" element={<Customer />} />
              <Route path="/TransferAmount" element={<TransferAmount />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route
                path="/TransactionHistory"
                element={<TransactionHistory />}
              />
            </Routes>
          </div>
        </main>
      </Router>

  );
}

export default App;
