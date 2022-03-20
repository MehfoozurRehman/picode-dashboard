import React from "react";
import { Search } from "react-feather";
import PartnersTableEntry from "../components/PartnersTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Partners({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Partners</div>
          <div className="main__header__top__buttons">
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
            <TableHeaderEntry title="Image" />
            <TableHeaderEntry title="Name" />
          </div>
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
          <PartnersTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
