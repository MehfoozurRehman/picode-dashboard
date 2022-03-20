import React from "react";
import { ArrowLeft, Search } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import CustomersAppliedTableEntry from "../components/CustomersAppliedTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function CustomersApplied() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">
            <button
              className="main__header__top__heading__button"
              onClick={() => {
                navigate("/dashboard/customers");
              }}
            >
              <ArrowLeft size={20} color="currentColor" />
            </button>
            Customers Applied
          </div>
          <div className="main__header__top__buttons"></div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="Name" style={{ minWidth: 200 }} />
            <TableHeaderEntry title="CNIC" />
            <TableHeaderEntry title="Salary Slip" />
            <TableHeaderEntry title="Bank Statement" />
            <TableHeaderEntry title="Monthly Income" />
            <TableHeaderEntry title="Back Name" />
            <TableHeaderEntry title="CNIC No." />
            <TableHeaderEntry title="Card Limit" />
          </div>
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
          <CustomersAppliedTableEntry />
        </div>
      </div>
    </div>
  );
}
