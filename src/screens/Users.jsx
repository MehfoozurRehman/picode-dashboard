import React from "react";
import { Search } from "react-feather";
import TableHeaderEntry from "../components/TableHeaderEntry";
import UsersTableEntry from "../components/UsersTableEntry";

export default function Users({ onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Users</div>
          <div className="main__header__top__buttons"></div>
        </div>
        <div className="main__header__bottom">
          <div></div>
          <form className="main__header__bottom__input">
            <input
              type="text"
              className="main__header__bottom__input__field"
              placeholder="Search here"
            />
            <button className="main__header__bottom__input__button">
              <Search size={18} color="currentColor" />
            </button>
          </form>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="Action" />
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Email" />
            <TableHeaderEntry title="Number" />
          </div>
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
          <UsersTableEntry onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
