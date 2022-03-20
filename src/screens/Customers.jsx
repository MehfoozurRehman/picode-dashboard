import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import CustomersTableEntry from "../components/CustomersTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Customers({}) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Customers Profile</div>
          <div className="main__header__top__buttons"></div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="Action" />
            <TableHeaderEntry title="Image" />
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Gender" />
            <TableHeaderEntry title="Monthly Income" />
            <TableHeaderEntry title="Occupation" />
            <TableHeaderEntry title="Tax Status" />
          </div>
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
          <CustomersTableEntry />
        </div>
      </div>
    </div>
  );
}
