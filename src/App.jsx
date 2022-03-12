import React, { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Loan from "./screens/Loan";
import Category from "./screens/Category";
import CategoryChild from "./screens/CategoryChild";
import Customers from "./screens/Customers";
import DashboardPanel from "./screens/DashboardPanel";
import Login from "./screens/Login";
import SubCategory from "./screens/SubCategory";
import Sidebar from "./components/Sidebar";
import Users from "./screens/Users";
import UserRole from "./screens/UserRole";
import Contacts from "./screens/Contacts";
import Blogs from "./screens/Blogs";
import Testimonials from "./screens/Testimonials";
import Partners from "./screens/Partners";
import CustomersApplied from "./screens/CustomersApplied";
import UserRolePopup from "./components/UserRolePopup";
import CategoryPopup from "./components/CategoryPopup";
import SubCategoryPopup from "./components/SubCategoryPopup";
import SubCategoryChildPopup from "./components/SubCategoryChildPopup";
import LoanForm from "./screens/LoanForm";
import ManageEntries from "./screens/ManageEntries";
import PartnersPopup from "./components/PartnersPopup";
import BlogsPopup from "./components/BlogsPopup";
import TestimonialsForm from "./screens/TestimonialsForm";
import DeleteConfirmation from "./components/DeleteConfirmation";
import Signup from "./screens/Signup";
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword from "./screens/ForgotPassword";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  const [isEditUserRolePopup, setIsEditUserRolePopup] = useState(false);
  const [isAddUserRolePopup, setIsAddUserRolePopup] = useState(false);
  const [isEditCategoryPopup, setIsEditCategoryPopup] = useState(false);
  const [isAddCategoryPopup, setIsAddCategoryPopup] = useState(false);
  const [isEditSubCategoryPopup, setIsEditSubCategoryPopup] = useState(false);
  const [isAddSubCategoryPopup, setIsAddSubCategoryPopup] = useState(false);
  const [isEditSubCategoryChildPopup, setIsEditSubCategoryChildPopup] =
    useState(false);
  const [isAddSubCategoryChildPopup, setIsAddSubCategoryChildPopup] =
    useState(false);
  const [isEditPartnersPopup, setIsEditPartnersPopup] = useState(false);
  const [isAddPartnersPopup, setIsAddPartnersPopup] = useState(false);
  const [isEditBlogsPopup, setIsEditBlogsPopup] = useState(false);
  const [isAddBlogsPopup, setIsAddBlogsPopup] = useState(false);
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}
      {isEditUserRolePopup ? (
        <UserRolePopup
          isEdit
          onClose={setIsEditUserRolePopup}
          onSubmit={setIsEditUserRolePopup}
        />
      ) : null}
      {isAddUserRolePopup ? (
        <UserRolePopup
          onClose={setIsAddUserRolePopup}
          onSubmit={setIsAddUserRolePopup}
        />
      ) : null}
      {isEditCategoryPopup ? (
        <CategoryPopup
          isEdit
          onClose={setIsEditCategoryPopup}
          onSubmit={setIsEditCategoryPopup}
        />
      ) : null}
      {isAddCategoryPopup ? (
        <CategoryPopup
          onClose={setIsAddCategoryPopup}
          onSubmit={setIsAddCategoryPopup}
        />
      ) : null}
      {isEditSubCategoryPopup ? (
        <SubCategoryPopup
          isEdit
          onClose={setIsEditSubCategoryPopup}
          onSubmit={setIsEditSubCategoryPopup}
        />
      ) : null}
      {isAddSubCategoryPopup ? (
        <SubCategoryPopup
          onClose={setIsAddSubCategoryPopup}
          onSubmit={setIsAddSubCategoryPopup}
        />
      ) : null}
      {isEditSubCategoryChildPopup ? (
        <SubCategoryChildPopup
          isEdit
          onClose={setIsEditSubCategoryChildPopup}
          onSubmit={setIsEditSubCategoryChildPopup}
        />
      ) : null}
      {isAddSubCategoryChildPopup ? (
        <SubCategoryChildPopup
          onClose={setIsAddSubCategoryChildPopup}
          onSubmit={setIsAddSubCategoryChildPopup}
        />
      ) : null}
      {isEditPartnersPopup ? (
        <PartnersPopup
          isEdit
          onClose={setIsEditPartnersPopup}
          onSubmit={setIsEditPartnersPopup}
        />
      ) : null}
      {isAddPartnersPopup ? (
        <PartnersPopup
          onClose={setIsAddPartnersPopup}
          onSubmit={setIsAddPartnersPopup}
        />
      ) : null}
      {isEditBlogsPopup ? (
        <BlogsPopup
          isEdit
          onClose={setIsEditBlogsPopup}
          onSubmit={setIsEditBlogsPopup}
        />
      ) : null}
      {isAddBlogsPopup ? (
        <BlogsPopup
          onClose={setIsAddBlogsPopup}
          onSubmit={setIsAddBlogsPopup}
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
            path="users"
            element={<Users onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="user_role"
            element={
              <UserRole
                onAdd={setIsAddUserRolePopup}
                onEdit={setIsEditUserRolePopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="category"
            element={
              <Category
                onAdd={setIsAddCategoryPopup}
                onEdit={setIsEditCategoryPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="category/sub_category"
            element={
              <SubCategory
                onAdd={setIsAddSubCategoryPopup}
                onEdit={setIsEditSubCategoryPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="category/sub_category/child"
            element={
              <CategoryChild
                onAdd={setIsAddSubCategoryChildPopup}
                onEdit={setIsEditSubCategoryChildPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="invest_money/mutual_funds"
            element={
              <Loan heading="Mutual Funds" onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="invest_money/national_savings"
            element={
              <Loan
                heading="National Savings"
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="need_money/credit_card"
            element={
              <Loan heading="Credit Card" onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="need_money/auto_loan"
            element={
              <Loan heading="Auto Loan" onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="need_money/car_loans"
            element={
              <Loan heading="Car Loans" onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="need_money/home_loans"
            element={
              <Loan heading="Home Loans" onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="protection/health_insurance"
            element={
              <Loan
                heading="Health Insurance"
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="protection/life_insurance"
            element={
              <Loan
                heading="Life Insurance"
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="protection/travel_insurance"
            element={
              <Loan
                heading="Travel Insurance"
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="protection/car_insurance"
            element={
              <Loan
                heading="Car Insurance"
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route path="loan_form/edit" element={<LoanForm heading="Edit" />} />
          <Route
            path="loan_form/add"
            element={<LoanForm heading="Add New" />}
          />
          <Route
            path="manage_entries"
            element={<ManageEntries heading="Manage Entries" />}
          />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/applied" element={<CustomersApplied />} />
          <Route
            path="contact"
            element={<Contacts onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="blogs"
            element={
              <Blogs
                onAdd={setIsAddBlogsPopup}
                onEdit={setIsEditBlogsPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="testimonials"
            element={<Testimonials onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="testimonials/add"
            element={<TestimonialsForm heading="Add" />}
          />
          <Route
            path="testimonials/edit"
            element={<TestimonialsForm heading="Edit" />}
          />
          <Route
            path="partners"
            element={
              <Partners
                onAdd={setIsAddPartnersPopup}
                onEdit={setIsEditPartnersPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
