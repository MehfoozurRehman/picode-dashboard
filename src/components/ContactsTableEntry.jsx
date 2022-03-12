import React from "react";
import { Trash } from "react-feather";

export default function ContactsTableEntry({ onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__secondary"
          onClick={onDelete}
        >
          <Trash size={20} color="currentColor" strokeWidth={1} />
        </button>
      </div>
      <div className="main__content__table__list__entry">Bilal John</div>
      <div className="main__content__table__list__entry">Bilal@gmail.com</div>
      <div className="main__content__table__list__entry">Work with you</div>
      <div className="main__content__table__list__entry">
        View Message
        <div className="main__content__table__list__entry__message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Esse, eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Esse, eligendi!
        </div>
      </div>
    </div>
  );
}
