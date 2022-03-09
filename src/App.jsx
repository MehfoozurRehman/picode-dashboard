import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Ad from "./screens/Ad";
import AllocateRewards from "./screens/AllocateRewards";
import Dashboard from "./screens/Dashboard";
import DashboardPanel from "./screens/DashboardPanel";
import InvoiceBills from "./screens/InvoiceBills";
import Login from "./screens/Login";
import Notifications from "./screens/Notifications";
import PaymentHistory from "./screens/PaymentHistory";
import PricingDiscounting from "./screens/PricingDiscounting";
import Settings from "./screens/Settings";
import Signup from "./screens/Signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<DashboardPanel />} />
        <Route path="allocate_rewards" element={<AllocateRewards />} />
        <Route path="invoice_bill" element={<InvoiceBills />} />
        <Route path="settings" element={<Settings />} />
        <Route path="pricing_discounting" element={<PricingDiscounting />} />
        <Route path="ad" element={<Ad />} />
        <Route path="payment_history" element={<PaymentHistory />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
}
