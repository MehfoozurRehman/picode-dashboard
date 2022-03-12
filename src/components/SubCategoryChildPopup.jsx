import React from "react";
import { X } from "react-feather";
import Select from "react-select";

export default function SubCategoryChildPopup({ onClose, onSubmit, isEdit }) {
  return (
    <div className="popup">
      <form className="popup__form">
        <button
          className="popup__form__close"
          type="button"
          onClick={() => onClose(false)}
        >
          <X size={20} color="currentColor" strokeWidth={4} />
        </button>
        <div className="popup__form__heading">
          {isEdit ? "Edit" : "Add"} Sub Category Child
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Name</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Name"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Category</div>
            <Select
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary25: "#f6f6f6",
                  primary: "#ed263d",
                  primary50: "f6f6f6",
                },
              })}
              isMulti
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Sub Category</div>
            <Select
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary25: "#f6f6f6",
                  primary: "#ed263d",
                  primary50: "f6f6f6",
                },
              })}
              isMulti
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <button onClick={() => onSubmit(false)} className="popup__form__button">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
