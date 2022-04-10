import React, { useState } from "react";
import logo from "../assets/logo.png";
import authBg from "../assets/authBg.png";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import CheckBox from "../components/Checkbox";

function RecieptUploader() {
  const [image, setImage] = useState("");
  return (
    <div className="authentication__container__overlay__form__content__receipt">
      <div className="authentication__container__overlay__form__content__receipt__col">
        <InputBox placeholder="Name on Receipt" type="text" error="" />
        <InputBox placeholder="Arabic" type="text" error="" />
        <InputBox placeholder="Branch" type="text" error="" />
        <div className="authentication__container__overlay__form__content__receipt__col__row">
          <div className="authentication__container__overlay__form__content__receipt__col__row__upload__btn">
            <input
              type="file"
              className="authentication__container__overlay__form__content__receipt__col__row__upload__btn__input"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <div className="authentication__container__overlay__form__content__receipt__col__row__upload__btn__content">
              <div className="authentication__container__overlay__form__content__receipt__col__row__upload__btn__content__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              Upload Receipt
            </div>
          </div>
          <button
            className="authentication__container__overlay__form__content__receipt__col__button"
            style={{ position: "relative", top: "auto", right: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.008"
              height="14.153"
              viewBox="0 0 11.008 14.153"
            >
              <path
                id="Icon_material-delete-forever"
                data-name="Icon material-delete-forever"
                d="M8.286,17.08a1.577,1.577,0,0,0,1.573,1.573h6.29a1.577,1.577,0,0,0,1.573-1.573V7.645H8.286Zm1.934-5.6,1.109-1.109L13,12.04l1.667-1.667,1.109,1.109-1.667,1.667,1.667,1.667-1.109,1.109L13,14.258l-1.667,1.667-1.109-1.109L11.9,13.149Zm5.535-6.2L14.97,4.5H11.038l-.786.786H7.5V6.859H18.508V5.286Z"
                transform="translate(-7.5 -4.5)"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="authentication__container__overlay__form__content__receipt__col">
        {image != "" ? (
          <>
            <button
              className="authentication__container__overlay__form__content__receipt__col__button"
              type="button"
              onClick={(e) => {
                setImage("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={URL.createObjectURL(image)}
              alt="image"
              className="authentication__container__overlay__form__content__receipt__col__img"
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default function Signup2nd() {
  const navigate = useNavigate();
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="authentication__container">
      <img src={authBg} alt="" className="authentication__container__img" />
      <div className="authentication__container__overlay">
        <form action="" className="authentication__container__overlay__form">
          <div className="authentication__container__overlay__form__header">
            <div className="authentication__container__overlay__form__header__heading">
              Sign Up
            </div>
            <img
              src={logo}
              alt="logo"
              className="authentication__container__overlay__form__header__img"
            />
          </div>
          <div
            className="authentication__container__overlay__form__content"
            style={{ paddingRight: "1em" }}
          >
            <InputBox
              placeholder="Type of merchant"
              type="text"
              error=""
              autoFocus
            />
            <InputBox placeholder="Number of Branches" type="text" error="" />
            <InputBox
              placeholder="City"
              error=""
              name="cities"
              id="city"
              list="cities"
            />
            <datalist id="cities">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
            <RecieptUploader />
            <RecieptUploader />
          </div>
          <button
            type="button"
            className="authentication__container__overlay__form__content__receipt__col__row__upload__btn__content"
            style={{
              marginBottom: -15,
              border: "none",
              marginTop: 20,
              height: 50,
            }}
          >
            <div className="authentication__container__overlay__form__content__receipt__col__row__upload__btn__content__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            Upload Receipt
          </button>
          <Link
            to="/sign_up_second_last"
            className="authentication__container__overlay__form__btn"
          >
            Next
          </Link>
          <div className="authentication__container__overlay__form__toSignup">
            Already have an account? <a href="#"> Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
}
