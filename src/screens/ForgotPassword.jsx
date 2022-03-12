import React from "react";
import logo from "../assets/logo.png";
import signupSvg from "../assets/signupSvg.svg";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="auth__container">
      <div className="auth__container__left">
        <img src={logo} alt="logo" className="auth__container__left__img" />
        <form
          onSubmit={() => {
            navigate("/dashboard");
          }}
          className="auth__container__left__form"
        >
          <div className="auth__container__left__form__heading">
            Forgot Password
          </div>
          <InputBox
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.099"
                height="19.976"
                viewBox="0 0 18.099 19.976"
              >
                <g
                  id="Icon_feather-lock"
                  data-name="Icon feather-lock"
                  transform="translate(0.6 0.6)"
                >
                  <path
                    id="Path_6620"
                    data-name="Path 6620"
                    d="M6.378,16.5H19.521A1.878,1.878,0,0,1,21.4,18.378v6.572a1.878,1.878,0,0,1-1.878,1.878H6.378A1.878,1.878,0,0,1,4.5,24.949V18.378A1.878,1.878,0,0,1,6.378,16.5Z"
                    transform="translate(-4.5 -8.051)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                  <path
                    id="Path_6621"
                    data-name="Path 6621"
                    d="M10.5,11.449V7.694a4.694,4.694,0,1,1,9.388,0v3.755"
                    transform="translate(-6.745 -3)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                </g>
              </svg>
            }
            type="email"
            placeholder="Email"
            error=""
          />

          <button className="auth__container__left__form__button">
            Forgot Password
          </button>
        </form>
      </div>
      <div className="auth__container__right">
        <img
          src={signupSvg}
          alt="signupSvg"
          className="auth__container__right__img"
        />
      </div>
    </div>
  );
}
