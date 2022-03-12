import React, { useState } from "react";

export default function InputBox({ svg, placeholder, type, error }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className="auth__container__left__form__input">
      <div className="auth__container__left__form__input__header">
        {error != "" ? (
          <div className="auth__container__left__form__input__header__label">
            {placeholder}
          </div>
        ) : focus ? (
          <div className="auth__container__left__form__input__header__label">
            {placeholder}
          </div>
        ) : null}
        <div className="auth__container__left__form__input__header__error">
          {error}
        </div>
      </div>
      {svg}
      <input
        type={type}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        placeholder={placeholder}
        className="auth__container__left__form__input__field"
      />
    </div>
  );
}
