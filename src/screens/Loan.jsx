import React from "react";
import { Search } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import LoanTableEntry from "../components/LoanTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Loan({ heading, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">{heading}</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/loan_form/add");
              }}
            >
              Add New
            </button>
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="Action" />
            <TableHeaderEntry title="Image" />
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Ref" />
            <TableHeaderEntry title="Featured" />
            <TableHeaderEntry title="Type" />
            <TableHeaderEntry title="Rate" />
            <TableHeaderEntry title="Spread" />
          </div>
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
          <LoanTableEntry
            onEdit={() => {
              navigate("/dashboard/loan_form/edit");
            }}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
