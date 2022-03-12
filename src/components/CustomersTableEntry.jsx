import React from "react";
import { Eye } from "react-feather";
import { Link } from "react-router-dom";

export default function CustomersTableEntry({}) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <Link
          to="/dashboard/customers/applied"
          className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
        >
          <Eye size={20} color="currentColor" strokeWidth={1} />
        </Link>
      </div>
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
      <div className="main__content__table__list__entry">Bilal John</div>
      <div className="main__content__table__list__entry">Male</div>
      <div className="main__content__table__list__entry">20000000</div>
      <div className="main__content__table__list__entry">Developer</div>
      <div className="main__content__table__list__entry">Paid</div>
    </div>
  );
}
