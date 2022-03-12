import React from "react";
import { Search } from "react-feather";
import TableHeaderEntry from "../components/TableHeaderEntry";
import UserRoleTableEntry from "../components/UserRoleTableEntry";

export default function UserRole({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">User Role</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                onAdd(true);
              }}
            >
              Add New
            </button>
          </div>
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
            <TableHeaderEntry title="Role" />
          </div>
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
          <UserRoleTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
