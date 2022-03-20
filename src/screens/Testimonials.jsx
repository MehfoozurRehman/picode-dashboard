import React from "react";
import { Search } from "react-feather";
import TestimonialsTableEntry from "../components/TestimonialsTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";
import { useNavigate } from "react-router-dom";

export default function Testimonials({ onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Testimonials</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/testimonials/add");
              }}
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
            <TableHeaderEntry title="Designation" />
            <TableHeaderEntry title="Rating" />
          </div>
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
          <TestimonialsTableEntry
            onEdit={() => {
              navigate("/dashboard/testimonials/edit");
            }}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
