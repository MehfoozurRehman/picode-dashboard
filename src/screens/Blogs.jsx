import React from "react";
import { Search } from "react-feather";
import BlogsTableEntry from "../components/BlogsTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Blogs({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Blogs</div>
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
            <TableHeaderEntry title="Title" />
            <TableHeaderEntry title="Author" />
            <TableHeaderEntry title="Date Created" />
            <TableHeaderEntry title="Catagory" />
          </div>
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BlogsTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
