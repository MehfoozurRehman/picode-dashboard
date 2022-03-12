import React, { useState } from "react";
import { Plus } from "react-feather";

export default function UploadImage({ label }) {
  const [upload, setUpload] = useState("");
  return (
    <div className="popup__form__upload__wrapper">
      <div className="popup__form__input__label">{label}</div>
      <div className="popup__form__upload">
        <input
          type="file"
          className="popup__form__upload__input"
          onChange={(e) => {
            setUpload(e.target.files[0]);
          }}
        />
        <div className="popup__form__upload__content">
          {upload === "" ? (
            <Plus size={30} color="currentcolor" />
          ) : (
            <img
              src={URL.createObjectURL(upload)}
              alt=""
              className="popup__form__upload__content__img"
            />
          )}
        </div>
      </div>
    </div>
  );
}
