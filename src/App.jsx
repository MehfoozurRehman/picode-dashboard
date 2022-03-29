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
import InvoiceBills from "./screens/InvoiceBills";
import Settings from "./screens/Settings";
import PricingDiscounting from "./screens/PricingDiscounting";
import AdsManagement from "./screens/AdsManagement";
import PaymentHistory from "./screens/PaymentHistory";
import Notifications from "./screens/Notifications";
import CallUs from "./screens/CallUs";
import NotificationForm from "./screens/NotificationForm";
import AllocateRewardPopup from "./components/AllocateRewardPopup";
import RecieptPopup from "./components/RecieptPopup";

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
  const [isAddAllocateRewardPopup, setIsAddAllocateRewardPopup] =
    useState(false);
  const [isEditAllocateRewardPopup, setIsEditAllocateRewardPopup] =
    useState(false);
  const [isAddRecieptPopup, setIsAddRecieptPopup] = useState(false);
  const [isEditRecieptPopup, setIsEditRecieptPopup] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}
      {isAddAllocateRewardPopup ? (
        <AllocateRewardPopup
          onClose={setIsAddAllocateRewardPopup}
          onSubmit={setIsAddAllocateRewardPopup}
        />
      ) : null}
      {isEditAllocateRewardPopup ? (
        <AllocateRewardPopup
          isEdit
          onClose={setIsEditAllocateRewardPopup}
          onSubmit={setIsEditAllocateRewardPopup}
        />
      ) : null}
      {isAddRecieptPopup ? (
        <RecieptPopup
          onClose={setIsAddRecieptPopup}
          onSubmit={setIsAddRecieptPopup}
        />
      ) : null}
      {isEditRecieptPopup ? (
        <RecieptPopup
          isEdit
          onClose={setIsEditRecieptPopup}
          onSubmit={setIsEditRecieptPopup}
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
            element={
              <AllocateRewards
                onDelete={setIsDeleteConfirmation}
                onAdd={setIsAddAllocateRewardPopup}
                onEdit={setIsEditAllocateRewardPopup}
              />
            }
          />
          <Route
            path="invoice_bills"
            element={<InvoiceBills onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="settings"
            element={
              <Settings
                onDelete={setIsDeleteConfirmation}
                onAdd={setIsAddRecieptPopup}
                onEdit={setIsEditRecieptPopup}
              />
            }
          />
          <Route
            path="pricing_discounting"
            element={<PricingDiscounting onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="ad_management"
            element={<AdsManagement onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="payment_history"
            element={<PaymentHistory onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="notifications"
            element={<Notifications onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="notifications/add"
            element={<NotificationForm heading="Add" />}
          />
          <Route
            path="notifications/edit"
            element={<NotificationForm heading="Edit" />}
          />
          <Route
            path="call_us"
            element={<CallUs onDelete={setIsDeleteConfirmation} />}
          />
        </Route>
      </Routes>
    </>
  );
}
