import React from "react";
import Logo from "./Images/net.png";
import "../css/Step4.css";

function Step4() {
  return (
    <div>
      <div id="appMountPoint">
        <div class="Header1">
          <div class="netflix-sans-font-loaded">
            <div data-uia="loc" lang="en-IN" dir="ltr">
              <div
                class="basicLayout3 notMobile modernInApp hasLargeTypography signupSimplicity-planSelection simplicity3"
                lang="en-IN"
                dir="ltr"
              >
                <div class="nfHeader3 noBorderHeader3 signupBasicHeader3 onboarding-header">
                  <div class="img-div1">
                    <img class="img1" src={Logo} />
                  </div>
                  <a
                    href="/signout"
                    class="authLinks3 signupBasicHeader3 onboarding-header"
                    data-uia="header-signout-link"
                  >
                    Sign Out
                  </a>
                </div>
                <div
                  class="simpleContainer3"
                  data-uia="simpleContainer"
                  data-transitioned-child="true"
                >
                  <div
                    class="centerContainer3 narrowCenterContainer3"
                    aria-hidden="false"
                    tabindex="0"
                  >
                    <div
                      class="planFormContainer3"
                      data-uia="form-plan-selection"
                    >
                      <div>
                        <div class="stepHeader-container3" data-uia="header">
                          <div class="stepHeader3" role="status">
                            <span id="" class="stepIndicator3" data-uia="">
                              STEP <b>2</b> OF <b>3</b>
                            </span>
                            <h1 class="stepTitle" data-uia="stepTitle">
                              Choose the plan that’s right for you
                            </h1>
                          </div>
                        </div>
                        <div class="changeAnytime3">
                          <ul
                            class="checkmark-group -compact"
                            data-uia="checkmark-group"
                          >
                            <li
                              class="checkmark-group--row -compact"
                              data-uia="checkmark-group+row-0"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="checkmark-group--icon"
                                data-name="Checkmark"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <span
                                class="checkmark-group--text"
                                data-uia="checkmark-group+row-0+content"
                              >
                                Watch all you want. Ad-free.
                              </span>
                            </li>
                            <li
                              class="checkmark-group--row -compact"
                              data-uia="checkmark-group+row-1"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="checkmark-group--icon"
                                data-name="Checkmark"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <span
                                class="checkmark-group--text"
                                data-uia="checkmark-group+row-1+content"
                              >
                                Recommendations just for you.
                              </span>
                            </li>
                            <li
                              class="checkmark-group--row -compact"
                              data-uia="checkmark-group+row-2"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="checkmark-group--icon"
                                data-name="Checkmark"
                                aria-hidden="true"
                              >
                                \
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <span
                                class="checkmark-group--text"
                                data-uia="checkmark-group+row-2+content"
                              >
                                Change or cancel your plan anytime.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="planGrid planGrid--has4Plans"
                        data-uia="plan-grid"
                      >
                        <div class="planGrid__header">
                          <div
                            class="planGrid__selector planGrid__planSelector"
                            role="radiogroup"
                            aria-label="Plan"
                            aria-describedby="planGrid_planChoice_description"
                            data-uia="plan-grid-plan-selector"
                          >
                            <span
                              class="planGrid__selectorDescription"
                              id="planGrid_planChoice_description"
                              data-uia="plan-grid-plan-selector+description"
                              aria-hidden="true"
                            >
                              Select the plan you'd like
                            </span>
                            <label
                              class="planGrid__selectorChoice planGrid__planChoice"
                              for="planGrid_planChoice_0"
                              data-uia="plan-grid-plan-selector+label-text_1_stream_name"
                            >
                              <input
                                type="radio"
                                name="planChoice"
                                class="planGrid__selectorInput planGrid__planInput"
                                id="planGrid_planChoice_0"
                                data-uia="plan-grid-plan-selector+input-text_1_stream_name"
                                value="114120"
                              />
                              <span class="planGrid__selectorLabel planGrid__planLabel">
                                Mobile
                              </span>
                            </label>
                            <label
                              class="planGrid__selectorChoice planGrid__planChoice"
                              for="planGrid_planChoice_1"
                              data-uia="plan-grid-plan-selector+label-text_1_stream_name"
                            >
                              <input
                                type="radio"
                                name="planChoice"
                                class="planGrid__selectorInput planGrid__planInput"
                                id="planGrid_planChoice_1"
                                data-uia="plan-grid-plan-selector+input-text_1_stream_name"
                                value="314001031"
                                checked=""
                              />
                              <span class="planGrid__selectorLabel planGrid__planLabel">
                                Basic
                              </span>
                            </label>
                            <label
                              class="planGrid__selectorChoice planGrid__planChoice"
                              for="planGrid_planChoice_2"
                              data-uia="plan-grid-plan-selector+label-text_2_stream_name"
                            >
                              <input
                                type="radio"
                                name="planChoice"
                                class="planGrid__selectorInput planGrid__planInput"
                                id="planGrid_planChoice_2"
                                data-uia="plan-grid-plan-selector+input-text_2_stream_name"
                                value="10322"
                              />
                              <span class="planGrid__selectorLabel planGrid__planLabel">
                                Standard
                              </span>
                            </label>
                            <label
                              class="planGrid__selectorChoice planGrid__planChoice"
                              for="planGrid_planChoice_3"
                              data-uia="plan-grid-plan-selector+label-text_4_stream_name"
                            >
                              <input
                                type="radio"
                                name="planChoice"
                                class="planGrid__selectorInput planGrid__planInput"
                                id="planGrid_planChoice_3"
                                data-uia="plan-grid-plan-selector+input-text_4_stream_name"
                                value="10341"
                              />
                              <span class="planGrid__selectorLabel planGrid__planLabel">
                                Premium
                              </span>
                            </label>
                          </div>
                        </div>
                        <table
                          class="planGrid__featureTable"
                          role="table"
                          data-uia="plan-grid-feature-table"
                        >
                          <caption class="planGrid__featureTableCaption">
                            Netflix Plan Features
                          </caption>
                          <tbody
                            class="planGrid__featureTableBody"
                            data-uia="plan-grid-feature-table-body"
                          >
                            <tr
                              role="row"
                              class="planGrid__featureTableRow planGrid__featureTableRow--planPrice"
                            >
                              <td
                                class="planGrid__cell planGrid__featureCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+planPrice-feature"
                              >
                                Monthly price
                              </td>
                              <td
                                class="planGrid__cell planGrid__stringCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name"
                                aria-label="Mobile"
                              >
                                ₹&nbsp;149
                              </td>
                              <td
                                class="planGrid__cell planGrid__cell--isSelected planGrid__stringCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name"
                                aria-label="Basic"
                              >
                                ₹&nbsp;199
                              </td>
                              <td
                                class="planGrid__cell planGrid__stringCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+planPrice-text_2_stream_name"
                                aria-label="Standard"
                              >
                                ₹&nbsp;499
                              </td>
                              <td
                                class="planGrid__cell planGrid__stringCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+planPrice-text_4_stream_name"
                                aria-label="Premium"
                              >
                                ₹&nbsp;649
                              </td>
                            </tr>
                            <tr
                              role="row"
                              class="planGrid__featureTableRow planGrid__featureTableRow--videoQuality"
                            >
                              <td
                                class="planGrid__cell planGrid__featureCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+videoQuality-feature"
                              >
                                Video quality
                              </td>
                              <td
                                class="planGrid__cell planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name"
                                aria-label="Mobile"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  Good
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name"
                                aria-label="Basic"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  Good
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+videoQuality-text_2_stream_name"
                                aria-label="Standard"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  Better
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+videoQuality-text_4_stream_name"
                                aria-label="Premium"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  Best
                                </div>
                              </td>
                            </tr>
                            <tr
                              role="row"
                              class="planGrid__featureTableRow planGrid__featureTableRow--resolution"
                            >
                              <td
                                class="planGrid__cell planGrid__featureCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+resolution-feature"
                              >
                                Resolution
                              </td>
                              <td
                                class="planGrid__cell planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name"
                                aria-label="Mobile"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  480p
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name"
                                aria-label="Basic"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  720p
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+resolution-text_2_stream_name"
                                aria-label="Standard"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  1080p
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__videoQualityCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+resolution-text_4_stream_name"
                                aria-label="Premium"
                              >
                                <div class="planGrid__videoQualityLabel">
                                  4K+HDR
                                </div>
                              </td>
                            </tr>
                            <tr
                              role="row"
                              class="planGrid__featureTableRow planGrid__featureTableRow--supportedDevices"
                            >
                              <td
                                class="planGrid__cell planGrid__featureCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+supportedDevices-feature"
                              >
                                Devices you can use to watch
                              </td>
                              <td
                                class="planGrid__cell planGrid__supportedDevicesCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+supportedDevices-text_1_stream_name"
                                aria-label="Mobile"
                              >
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Phone"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Phone
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Tablet"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Tablet
                                  </div>
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__cell--isSelected planGrid__supportedDevicesCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+supportedDevices-text_1_stream_name"
                                aria-label="Basic"
                              >
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Phone"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Phone
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Tablet"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Tablet
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Laptop"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Computer
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Tv"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    TV
                                  </div>
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__supportedDevicesCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+supportedDevices-text_2_stream_name"
                                aria-label="Standard"
                              >
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Phone"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Phone
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Tablet"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Tablet
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Laptop"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Computer
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Tv"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    TV
                                  </div>
                                </div>
                              </td>
                              <td
                                class="planGrid__cell planGrid__supportedDevicesCell"
                                role="cell"
                                data-uia="plan-grid-feature-table-cell+supportedDevices-text_4_stream_name"
                                aria-label="Premium"
                              >
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Phone"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Phone
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Tablet"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Tablet
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Laptop"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    Computer
                                  </div>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="planGrid__supportedDevicesIcon"
                                    data-name="Tv"
                                    focusable="false"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  <div class="planGrid__supportedDevicesLabel">
                                    TV
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div>
                          <small class="planGrid__disclaimer planGrid__standardDisclaimer">
                            <span id="" data-uia="plan-grid-legal">
                              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
                              availability subject to your internet service and
                              device capabilities. Not all content is available
                              in all resolutions. See our{" "}
                              <a
                                href="https://help.netflix.com/legal/termsofuse"
                                target="_blank"
                              >
                                Terms of Use
                              </a>{" "}
                              for more details.
                            </span>
                          </small>
                          <small class="planGrid__disclaimer planGrid__standardDisclaimer">
                            <span id="" data-uia="plan-grid-legal">
                              Only people who live with you may use your
                              account. Watch on 4 different devices at the same
                              time with Premium, 2 with Standard, and 1 with
                              Basic and Mobile.
                            </span>
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="submitBtnContainer">
                      <button
                        type="button"
                        autocomplete="off"
                        tabindex="0"
                        class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                        data-uia="cta-plan-selection"
                        placeholder="planSelection_button_continue"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div class="site-footer-wrapper centered">
                  <div class="footer-divider"></div>
                  <div class="site-footer">
                    <p class="footer-top">
                      Questions? Call{" "}
                      <a class="footer-top-a" href="tel:000-800-919-1694">
                        000-800-919-1694
                      </a>
                    </p>
                    <ul class="footer-links structural">
                      <li
                        class="footer-link-item"
                        placeholder="footer_responsive_link_faq_item"
                      >
                        <a
                          class="footer-link"
                          data-uia="footer-link"
                          href="https://help.netflix.com/support/412"
                          placeholder="footer_responsive_link_faq"
                        >
                          <span id="" data-uia="data-uia-footer-label">
                            FAQ
                          </span>
                        </a>
                      </li>
                      <li
                        class="footer-link-item"
                        placeholder="footer_responsive_link_help_item"
                      >
                        <a
                          class="footer-link"
                          data-uia="footer-link"
                          href="https://help.netflix.com"
                          placeholder="footer_responsive_link_help"
                        >
                          <span id="" data-uia="data-uia-footer-label">
                            Help Centre
                          </span>
                        </a>
                      </li>
                      <li
                        class="footer-link-item"
                        placeholder="footer_responsive_link_netflix_shop_item"
                      >
                        <a
                          class="footer-link"
                          data-uia="footer-link"
                          href="https://netflix.shop/"
                          placeholder="footer_responsive_link_netflix_shop"
                        >
                          <span id="" data-uia="data-uia-footer-label">
                            Netflix Shop
                          </span>
                        </a>
                      </li>
                      <li
                        class="footer-link-item"
                        placeholder="footer_responsive_link_terms_item"
                      >
                        <a
                          class="footer-link"
                          data-uia="footer-link"
                          href="https://help.netflix.com/legal/termsofuse"
                          placeholder="footer_responsive_link_terms"
                        >
                          <span id="" data-uia="data-uia-footer-label">
                            Terms of Use
                          </span>
                        </a>
                      </li>
                      <li
                        class="footer-link-item"
                        placeholder="footer_responsive_link_privacy_separate_link_item"
                      >
                        <a
                          class="footer-link"
                          data-uia="footer-link"
                          href="https://help.netflix.com/legal/privacy"
                          placeholder="footer_responsive_link_privacy_separate_link"
                        >
                          <span id="" data-uia="data-uia-footer-label">
                            Privacy
                          </span>
                        </a>
                      </li>
                      <li
                        class="footer-link-item"
                        placeholder="footer_responsive_link_cookies_separate_link_item"
                      >
                        <a
                          class="footer-link"
                          data-uia="footer-link"
                          href="#"
                          placeholder="footer_responsive_link_cookies_separate_link"
                        >
                          <span id="" data-uia="data-uia-footer-label">
                            Cookie Preferences
                          </span>
                        </a>
                      </li>
                      <li
                        class="footer-link-item"
                        placeholder="footer_responsive_link_corporate_information_item"
                      >
                        <a
                          class="footer-link"
                          data-uia="footer-link"
                          href="https://help.netflix.com/legal/corpinfo"
                          placeholder="footer_responsive_link_corporate_information"
                        >
                          <span id="" data-uia="data-uia-footer-label">
                            Corporate Information
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div class="lang-selection-container" id="lang-switcher">
                      <div
                        class="nfSelectWrapper inFooter selectArrow prefix"
                        data-uia="language-picker+container"
                      >
                        <label class="nfLabel" for="lang-switcher-select">
                          Select Language
                        </label>
                        <div class="nfSelectPlacement globe">
                          <select
                            data-uia="language-picker"
                            class="nfSelect"
                            id="lang-switcher-select"
                            name="__langSelect"
                            tabindex="0"
                          >
                            <option
                              selected=""
                              label="English"
                              lang="en"
                              value="/signup/planform?locale=en-IN"
                            >
                              English
                            </option>
                            <option
                              label="हिन्दी"
                              lang="hi"
                              value="/signup/planform?locale=hi-IN"
                            >
                              हिन्दी
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="a11yAnnouncer"
                  aria-live="assertive"
                  tabindex="-1"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
