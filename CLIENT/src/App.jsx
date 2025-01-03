import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLanding from './components/customer/CustomerLanding';
import Cart from './components/customer/Cart';
import Payment from './components/customer/Payment';
import Confirmation from './components/customer/Confirmation';
import Feedback from './components/customer/Feedback';
import BakerDashboard from './components/baker/BakerDashboard';
import DataFetchingComponent from './components/DataFetchingComponent';
import AboutSection from './components/customer/AboutSection';
import SignIn from './components/customer/SignIn';
import SignUp from './components/customer/Signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <Routes>
          <Route path="/" element={<CustomerLanding />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/baker-dashboard" element={<BakerDashboard />} />
          <Route path="/datafetch" element={<DataFetchingComponent/>} />
          <Route path="/about" element={<AboutSection/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/Signup" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
