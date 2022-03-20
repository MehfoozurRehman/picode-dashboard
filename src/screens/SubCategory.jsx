import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import SubCategoryTableEntry from "../components/SubCategoryTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function SubCategory({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Sub Category</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
            <button
              className="main__header__top__buttons__button"
              onClick={onAdd}
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
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Parent Category" />
          </div>
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <SubCategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
