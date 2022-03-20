import React, { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword from "./screens/ForgotPassword";
import Sidebar from "./components/Sidebar";
import DashboardPanel from "./screens/DashboardPanel";

import DeleteConfirmation from "./components/DeleteConfirmation";
import AllocateRewards from "./screens/AllocateRewards";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardPanel />} />
          <Route
            path="allocate_rewards"
            element={<AllocateRewards onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="invoice_bills"
            element={<DashboardPanel onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="settings"
            element={<DashboardPanel onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="pricing_discounting"
            element={<DashboardPanel onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="ad_management"
            element={<DashboardPanel onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="payment_history"
            element={<DashboardPanel onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="notifications"
            element={<DashboardPanel onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="call_us"
            element={<DashboardPanel onDelete={setIsDeleteConfirmation} />}
          />
        </Route>
      </Routes>
    </>
  );
}
