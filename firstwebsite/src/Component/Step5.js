import React from "react";
import "../css/Step5.css";
import Logo from "./Images/net.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Step5() {

const element = <FontAwesomeIcon icon={faEnvelope} />
  return (
    <div>
      <div id="appMountPoint">
        <div class="Header1">
          <div class="netflix-sans-font-loaded">
            <div data-uia="loc" lang="en-IN" dir="ltr">
              <div
                class="basicLayout6 notMobile modernInApp hasLargeTypography6 signupSimplicity-paymentPicker simplicity6"
                lang="en-IN"
                dir="ltr"
              >
                <div class="nfHeader6 noBorderHeader6 signupBasicHeaderc6 onboarding-header">
                  <div class="img-div1">
                    <img class="img1" src={Logo} />
                  </div>
                  <a
                    href="/signout"
                    class="authLinks6 signupBasicHeader6 onboarding-header"
                    data-uia="header-signout-link"
                  >
                    Sign Out
                  </a>
                </div>
                <div
                  class="simpleContainer6"
                  data-uia="simpleContainer"
                  data-transitioned-child="true"
                >
                  <div class="centerContainer6 contextStep" tabindex="0">
                    <div class="paymentContainer6" data-uia="payment-container">
                      <div class="paymentPickerHeading6">
                        <div class="stepLogoContainer6">
                          <span class="stepLogo6 paymentStepLogo6"></span>
                        </div>
                        <div class="stepHeader-container" data-uia="header">
                          <div class="stepHeader6" role="status">
                            <span id="" class="stepIndicator6" data-uia="">
                              STEP <b>3</b> OF <b>3</b>
                            </span>
                            <h1 class="stepTitle6" data-uia="stepTitle">
                              Choose how to pay
                            </h1>
                          </div>
                        </div>
                        <div
                          class="narrowContainer6"
                          data-uia="messagesContainer"
                        >
                          <div
                            id=""
                            class="contextRow6 contextRowFirst6"
                            data-uia=""
                          >
                            Your payment is encrypted and you can change your
                            payment method at anytime.
                          </div>
                          <div class="contextRow6" data-uia="encouragements">
                            <div class="contextRowEmphasized6">
                              Secure for peace of mind.
                            </div>
                            <div class="contextRowEmphasized6">
                              Cancel easily online.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="secure-server-badge-align-right6">
                        <svg
                          id="secure-server-icon"
                          viewBox="0 0 12 16"
                          class="secure-server-badge--icon6 default-ltr-cache-189sllk"
                        >
                          <g fill="none">
                            <g fill="#FFB53F">
                              <path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path>
                            </g>
                          </g>
                        </svg>
                        <div class="secure-server-badge--text6">
                          End-to-end encrypted
                        </div>
                      </div>
                      <form method="POST" data-uia="payment-picker-form">
                        <div class="basic-spinner-region6">
                          <div
                            data-uia="loading-indicator"
                            class="basic-spinner6 center-absolute6 isHidden6"
                          ></div>
                          <div>
                            <button
                              class="paymentTab6 overrides6 paymentPicker6 standardHeight6 default-ltr-cache-qnpyub6"
                              id="creditOrDebitCardDisplayStringId"
                              data-uia="payment-choice+creditOrDebitOption"
                              type="button"
                            ></button>
                            <div class="mopNameAndLogos6">
                              <div class="paymentTab--text card-type-text6">
                                <span class="selectionLabel6">
                                  Credit or Debit Card
                                </span>
                              </div>
                              <div class="logosContainer6">
                                <span
                                  class="logos logos-inline"
                                  data-uia="cardLogos-comp"
                                  aria-label="We accept VISA, MASTERCARD, AMEX and DINERS."
                                ></span>
                                <img
                                  src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                                  alt="VISA"
                                  class="logoIcon VISA default-ltr-cache-kg1rox epojmy00"
                                  srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x"
                                  data-uia="logoIcon-VISA"
                                />
                                <img
                                  src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                                  alt="MASTERCARD"
                                  class="logoIcon MASTERCARD default-ltr-cache-kg1rox epojmy00"
                                  srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x"
                                  data-uia="logoIcon-MASTERCARD"
                                />
                                <img
                                  src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
                                  alt="AMEX"
                                  class="logoIcon AMEX default-ltr-cache-kg1rox epojmy00"
                                  srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX@2x.png 2x"
                                  data-uia="logoIcon-AMEX"
                                />
                                <img
                                  src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png"
                                  alt="DINERS"
                                  class="logoIcon DINERS default-ltr-cache-kg1rox epojmy00"
                                  srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS@2x.png 2x"
                                  data-uia="logoIcon-DINERS"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <span class="arrow">
                          <span
                            dir="ltr"
                            class="default-ltr-cache-s15e62 e1boxt2d0"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="Hawkins-Icon Hawkins-Icon-Standard"
                              data-name="ChevronRight"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </form>
                      <button
                        class="paymentTab6 overrides6 paymentPicker6 standardHeight6 default-ltr-cache-qnpyub6"
                        id="upiDisplayStringId"
                        data-uia="payment-choice+upiPaymentOption"
                        type="button"
                      ></button>
                      <div class="mopNameAndLogos6">
                        <div class="paymentTab--text card-type-text6">
                          <span class="selectionLabel6">UPI AutoPay</span>
                        </div>
                        <div class="logosContainer6">
                          <span
                            class="logos logos-inline"
                            data-uia="cardLogos-comp"
                            aria-label="We accept BHIM, PAYTM, PHONEPE, AMAZONPAY and GPAY."
                          >
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png"
                              alt="BHIM"
                              class="logoIcon BHIM default-ltr-cache-kg1rox epojmy00"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM@2x.png 2x"
                              data-uia="logoIcon-BHIM"
                            />
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png"
                              alt="PAYTM"
                              class="logoIcon PAYTM default-ltr-cache-kg1rox epojmy00"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM@2x.png 2x"
                              data-uia="logoIcon-PAYTM"
                            />
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png"
                              alt="PHONEPE"
                              class="logoIcon PHONEPE default-ltr-cache-kg1rox epojmy00"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE@2x.png 2x"
                              data-uia="logoIcon-PHONEPE"
                            />
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png"
                              alt="AMAZONPAY"
                              class="logoIcon AMAZONPAY default-ltr-cache-kg1rox epojmy00"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY@2x.png 2x"
                              data-uia="logoIcon-AMAZONPAY"
                            />
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png"
                              alt="GPAY"
                              class="logoIcon GPAY default-ltr-cache-kg1rox epojmy00"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY@2x.png 2x"
                              data-uia="logoIcon-GPAY"
                            />
                          </span>
                        </div>
                      </div>
                      <span class="arrow">
                        <span
                          dir="ltr"
                          class="default-ltr-cache-s15e62 e1boxt2d0"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="Hawkins-Icon Hawkins-Icon-Standard"
                            data-name="ChevronRight"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="site-footer-wrapper2 centered">
              <div class="footer-divider2"></div>
              <div class="site-footer2">
                <p class="footer-top2">
                  Questions? Call{" "}
                  <a class="footer-top-a" href="tel:000-800-919-1694">
                    000-800-919-1694
                  </a>
                </p>
                <ul class="footer-links2 structural">
                  <li
                    class="footer-link-item2"
                    placeholder="footer_responsive_link_faq_item"
                  >
                    <a
                      class="footer-link2"
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
                    class="footer-link-item2"
                    placeholder="footer_responsive_link_help_item"
                  >
                    <a
                      class="footer-link2"
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
                    class="footer-link-item2"
                    placeholder="footer_responsive_link_netflix_shop_item"
                  >
                    <a
                      class="footer-link2"
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
                    class="footer-link-item2"
                    placeholder="footer_responsive_link_terms_item"
                  >
                    <a
                      class="footer-link2"
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
                    class="footer-link-item2"
                    placeholder="footer_responsive_link_privacy_separate_link_item"
                  >
                    <a
                      class="footer-link2"
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
                    class="footer-link-item2"
                    placeholder="footer_responsive_link_cookies_separate_link_item"
                  >
                    <a
                      class="footer-link2"
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
                    class="footer-link-item2"
                    placeholder="footer_responsive_link_corporate_information_item"
                  >
                    <a
                      class="footer-link2"
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
                <div class="lang-selection-container2" id="lang-switcher">
                  <div
                    class="nfSelectWrapper2 inFooter2 selectArrow2 prefix2"
                    data-uia="language-picker+container"
                  >
                    <label class="nfLabel2" for="lang-switcher-select">
                      Select Language
                    </label>
                    <div class="nfSelectPlacement2 globe">
                      <select
                        data-uia="language-picker"
                        class="nfSelect2"
                        id="lang-switcher-select"
                        name="__langSelect"
                        tabindex="0"
                      >
                        <option
                          selected=""
                          label="English"
                          lang="en"
                          value="/signup?locale=en-IN"
                        >
                          English
                        </option>
                        <option
                          label="हिन्दी"
                          lang="hi"
                          value="/signup?locale=hi-IN"
                        >
                          हिन्दी
                        </option>
                      </select>

                      <div>
                        <FontAwesomeIcon icon="fa-solid fa-check-square" />
                        Your <FontAwesomeIcon icon="fa-regular fa-coffee" /> is
                        hot! Compliments of the{" "}
                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-hat-chef" />
                        !
                      </div>
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
  );
}

export default Step5;
