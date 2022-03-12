import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import CategoryTableEntry from "../components/CategoryTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Category({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Category</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
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
          <Link
            to="/dashboard/manage_entries"
            state={{ data: { path: "/dashboard/category" } }}
            className="main__header__bottom__button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 31 31"
            >
              <g
                id="Icon_feather-settings"
                data-name="Icon feather-settings"
                transform="translate(-0.5 -0.5)"
              >
                <path
                  id="Path_21946"
                  data-name="Path 21946"
                  d="M21.409,17.455A3.955,3.955,0,1,1,17.455,13.5,3.955,3.955,0,0,1,21.409,17.455Z"
                  transform="translate(-1.455 -1.455)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  id="Path_21947"
                  data-name="Path 21947"
                  d="M25.755,19.955a2.175,2.175,0,0,0,.435,2.4l.079.079a2.638,2.638,0,1,1-3.73,3.73l-.079-.079a2.193,2.193,0,0,0-3.717,1.555v.224a2.636,2.636,0,0,1-5.273,0v-.119a2.175,2.175,0,0,0-1.424-1.99,2.175,2.175,0,0,0-2.4.435l-.079.079a2.638,2.638,0,1,1-3.73-3.73l.079-.079A2.193,2.193,0,0,0,4.36,18.742H4.136a2.636,2.636,0,1,1,0-5.273h.119a2.175,2.175,0,0,0,1.99-1.424,2.175,2.175,0,0,0-.435-2.4l-.079-.079a2.638,2.638,0,1,1,3.73-3.73l.079.079a2.175,2.175,0,0,0,2.4.435h.105a2.175,2.175,0,0,0,1.318-1.99V4.136a2.636,2.636,0,1,1,5.273,0v.119A2.193,2.193,0,0,0,22.354,5.81l.079-.079a2.638,2.638,0,1,1,3.73,3.73l-.079.079a2.175,2.175,0,0,0-.435,2.4v.105a2.175,2.175,0,0,0,1.99,1.318h.224a2.636,2.636,0,0,1,0,5.273h-.119a2.175,2.175,0,0,0-1.99,1.318Z"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
            Manage Entries
          </Link>
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
            <TableHeaderEntry title="Active Image" />
            <TableHeaderEntry title="Inactive Image" />
            <TableHeaderEntry title="Name" />
          </div>
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
          <CategoryTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
