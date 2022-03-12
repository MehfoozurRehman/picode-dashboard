import React from "react";
import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function ManageEntries({ heading }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const listOfEntries = [
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: true,
    },
    {
      name: "Add image",
      default: false,
    },
    {
      name: "Add image",
      default: false,
    },
  ];
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            <button
              className="main__header__top__heading__button"
              onClick={() => {
                navigate(state ? state.data.path : "/dashboard");
              }}
            >
              <ArrowLeft size={20} color="currentColor" />
            </button>
            {heading}
          </div>
          <div className="main__header__top__buttons"></div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form">
          {listOfEntries.map((item, i) => (
            <div key={i} className="main__content__form__col">
              <label className="main__content__form__toggle">
                <span>{item.name}</span>
                <Toggle defaultChecked={item.default} icons={false} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
