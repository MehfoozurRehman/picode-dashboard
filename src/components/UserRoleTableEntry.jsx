import React from "react";
import { Edit, Trash } from "react-feather";

export default function UserRoleTableEntry({ onEdit, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
          onClick={onEdit}
        >
          <Edit size={20} color="currentColor" strokeWidth={1} />
        </button>
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__secondary"
          onClick={onDelete}
        >
          <Trash size={20} color="currentColor" strokeWidth={1} />
        </button>
      </div>
      <div className="main__content__table__list__entry">Administrator</div>
    </div>
  );
}
