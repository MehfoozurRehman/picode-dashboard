import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import CategoryTableEntry from "../components/CategoryTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";
import Toggle from "react-toggle";

export default function AllocateRewards({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">
            <svg
              id="Group_1058"
              data-name="Group 1058"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.288 37.048"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_154"
                    data-name="Rectangle 154"
                    width="29.288"
                    height="37.048"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_735"
                data-name="Group 735"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Path_811"
                  data-name="Path 811"
                  d="M6.428,31.509c0-1.429.021-2.858-.019-4.285a1.176,1.176,0,0,0-.405-.8A14.613,14.613,0,0,1,19.54.86a14.484,14.484,0,0,1,9.736,14.415A14.105,14.105,0,0,1,23.422,26.3a1.2,1.2,0,0,0-.555,1.082c.024,2.7.013,5.407.011,8.11,0,1.472-.62,1.884-1.944,1.293-1.885-.841-3.775-1.673-5.644-2.547a1.383,1.383,0,0,0-1.3.014c-1.893.877-3.8,1.721-5.708,2.567-1.209.537-1.848.113-1.854-1.224-.006-1.363,0-2.725,0-4.088m8.179-4.436A12.46,12.46,0,1,0,2.142,14.626,12.495,12.495,0,0,0,14.607,27.073M20.7,34.327V27.942a14.793,14.793,0,0,1-12.095,0v6.347c.245-.1.447-.167.641-.254,1.5-.67,3.019-1.318,4.5-2.028a1.926,1.926,0,0,1,1.811,0c1.664.786,3.356,1.514,5.138,2.311"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_812"
                  data-name="Path 812"
                  d="M55.3,36.4a5.894,5.894,0,0,1,1,.885c.643.943,1.242,1.918,1.824,2.9a.965.965,0,0,0,.931.559c1.142,0,2.284.069,3.426.111s1.6.8,1.06,1.836-1.12,2.043-1.627,3.09a1.153,1.153,0,0,0,.006.888c.508,1.047,1.089,2.058,1.627,3.09.524,1.007.1,1.757-1.021,1.81-1.141.054-2.284.106-3.426.113a1.035,1.035,0,0,0-.99.591c-.568.965-1.171,1.911-1.776,2.854a1.121,1.121,0,0,1-2.084.006c-.606-.943-1.214-1.885-1.774-2.855a1.076,1.076,0,0,0-1.056-.6c-1.12-.006-2.241-.059-3.36-.111s-1.551-.8-1.03-1.8,1.032-1.99,1.59-2.961a1.008,1.008,0,0,0,.013-1.146c-.54-.93-1.026-1.892-1.529-2.844-.629-1.19-.207-1.922,1.121-1.962,1.142-.035,2.286-.058,3.424-.141a1.074,1.074,0,0,0,.712-.422c.662-.984,1.248-2.019,1.917-3A5.724,5.724,0,0,1,55.3,36.4M49.583,42.88c.507.951.869,1.7,1.3,2.41a1.62,1.62,0,0,1,.01,1.845c-.436.722-.8,1.486-1.3,2.434,1.033,0,1.881.017,2.728-.005a1.58,1.58,0,0,1,1.552.89c.423.753.912,1.469,1.427,2.289.551-.876,1.044-1.625,1.5-2.4a1.438,1.438,0,0,1,1.346-.777c.5,0,1.01-.013,1.514-.033.4-.016.8-.05,1.295-.083-.443-.833-.789-1.569-1.214-2.256a1.69,1.69,0,0,1,.006-1.961c.431-.7.779-1.451,1.261-2.363-.98,0-1.789-.033-2.593.009a1.768,1.768,0,0,1-1.794-1.061c-.379-.7-.84-1.36-1.316-2.119-.48.759-.937,1.38-1.283,2.058a1.874,1.874,0,0,1-1.958,1.128c-.761-.043-1.526-.009-2.474-.009"
                  transform="translate(-40.642 -31.604)"
                />
              </g>
            </svg>
            Allocate Rewards
          </div>
          <div className="main__header__top__buttons"></div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__allocate">
          <div className="main__content__allocate__row">
            <div className="main__content__allocate__row__heading">
              Target Points
            </div>
            <div className="main__content__allocate__row__value">50</div>
            <button
              className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
              onClick={onEdit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43.119"
                height="42.829"
                viewBox="0 0 43.119 42.829"
              >
                <defs>
                  <filter
                    id="Ellipse_150"
                    x="0"
                    y="0"
                    width="43.119"
                    height="42.829"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="3" dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  filter="url(#Ellipse_150)"
                >
                  <g
                    id="Ellipse_150-2"
                    data-name="Ellipse 150"
                    transform="translate(7.5 7.5)"
                    fill="transparent"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <ellipse
                      cx="11.059"
                      cy="10.915"
                      rx="11.059"
                      ry="10.915"
                      stroke="none"
                    />
                    <ellipse
                      cx="11.059"
                      cy="10.915"
                      rx="10.559"
                      ry="10.415"
                      fill="none"
                    />
                  </g>
                </g>
                <path
                  id="Icon_material-edit"
                  data-name="Icon material-edit"
                  d="M4.5,17.582v3.443H7.943L18.1,10.871,14.655,7.427ZM20.761,8.208a.914.914,0,0,0,0-1.295L18.612,4.765a.914.914,0,0,0-1.295,0l-1.68,1.68L19.08,9.888Z"
                  transform="translate(12.007 1.343)"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="main__content__allocate__row">
            <div className="main__content__allocate__row__left">
              <div className="main__content__allocate__row__left__row">
                <div className="main__content__allocate__row__heading">
                  Target Points
                </div>
                <div className="main__content__allocate__row__value">50</div>
              </div>
              <div className="main__content__allocate__row__left__row">
                <div className="main__content__allocate__row__heading">
                  Target Points
                </div>
                <div className="main__content__allocate__row__value">50</div>
              </div>
              <div className="main__content__allocate__row__left__row">
                <div className="main__content__allocate__row__heading">
                  Target Points
                </div>
                <div className="main__content__allocate__row__value">50</div>
              </div>
            </div>
            <Toggle defaultChecked={false} icons={false} />
            <button
              className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
              onClick={onEdit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43.119"
                height="42.829"
                viewBox="0 0 43.119 42.829"
              >
                <defs>
                  <filter
                    id="Ellipse_150"
                    x="0"
                    y="0"
                    width="43.119"
                    height="42.829"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="3" dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  filter="url(#Ellipse_150)"
                >
                  <g
                    id="Ellipse_150-2"
                    data-name="Ellipse 150"
                    transform="translate(7.5 7.5)"
                    fill="transparent"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <ellipse
                      cx="11.059"
                      cy="10.915"
                      rx="11.059"
                      ry="10.915"
                      stroke="none"
                    />
                    <ellipse
                      cx="11.059"
                      cy="10.915"
                      rx="10.559"
                      ry="10.415"
                      fill="none"
                    />
                  </g>
                </g>
                <path
                  id="Icon_material-edit"
                  data-name="Icon material-edit"
                  d="M4.5,17.582v3.443H7.943L18.1,10.871,14.655,7.427ZM20.761,8.208a.914.914,0,0,0,0-1.295L18.612,4.765a.914.914,0,0,0-1.295,0l-1.68,1.68L19.08,9.888Z"
                  transform="translate(12.007 1.343)"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              className="main__content__table__list__entry__button main__content__table__list__entry__button__secondary"
              onClick={onDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.339"
                height="20.15"
                viewBox="0 0 20.339 26.15"
              >
                <path
                  id="Icon_material-delete-forever"
                  data-name="Icon material-delete-forever"
                  d="M8.953,27.745a2.914,2.914,0,0,0,2.906,2.906H23.481a2.914,2.914,0,0,0,2.906-2.906V10.311H8.953ZM12.527,17.4l2.048-2.048,3.094,3.08,3.08-3.08L22.8,17.4l-3.08,3.08,3.08,3.08-2.048,2.048-3.08-3.08-.261.261L14.59,25.609l-2.048-2.048,3.08-3.08ZM22.754,5.953,21.3,4.5H14.038L12.585,5.953H7.5V8.858H27.839V5.953Z"
                  transform="translate(-7.5 -4.5)"
                  fill="currentcolor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
