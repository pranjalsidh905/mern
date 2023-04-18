import React from "react";
import "../css/Step6.css";
import Logo from "./Images/net.png";
import { FaTwitterSquare } from "react-icons/fa";
const Step6 = () => {
  return (
    <div>
      <div id="appMountPoint">
        <div class="Header1">
          <div class="netflix-sans-font-loaded">
            <div data-uia="loc" lang="en-IN" dir="ltr">
              <div
                class="basicLayout7 notMobile modernInApp hasLargeTypography7 signupSimplicity-creditOptionMode simplicity7"
                lang="en-IN"
                dir="ltr"
              >
                <div class="nfHeader6 noBorderHeader6 signupBasicHeader7 onboarding-header">
                  <div class="img-div1">
                    <img class="img1" src={Logo} />
                  </div>
                  <a
                    href="/signout"
                    class="authLinks7 signupBasicHeader7 onboarding-header"
                    data-uia="header-signout-link"
                  >
                    Sign Out
                  </a>
                </div>
                <div
                  class="simpleContainer7"
                  data-uia="simpleContainer"
                  data-transitioned-child="true"
                >
                  <div
                    class="centerContainer7"
                    tabindex="0"
                    style={{
                      display: "block",
                      transform: "none",
                      opacity: "1",
                      transitionduration: "250ms",
                    }}
                  >
                    <form method="POST" data-uia="payment-form">
                      <div class="paymentFormContainer7">
                        <div>
                          <div class="stepHeader-container7" data-uia="header">
                            <div class="stepHeader7" role="status">
                              <span id="" class="stepIndicator7" data-uia="">
                                STEP <b>3</b> OF <b>3</b>
                              </span>
                              <h1 class="stepTitle7" data-uia="stepTitle">
                                Set up your credit or debit card
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div class="fieldContainer7">
                          <span
                            class="logos7 logos-block7"
                            data-uia="cardLogos-comp"
                            aria-label="We accept Visa, Mastercard, American Express and Diners Club."
                          >
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                              alt="Visa"
                              class="logoIcon7 VISA7 default-ltr-cache-kg1rox7 epojmy007"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x"
                              data-uia="logoIcon-VISA"
                            />
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                              alt="Mastercard"
                              class="logoIcon7 MASTERCARD7 default-ltr-cache-kg1rox7 epojmy007"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x"
                              data-uia="logoIcon-MASTERCARD"
                            />
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
                              alt="American Express"
                              class="logoIcon7 AMEX7 default-ltr-cache-kg1rox7 epojmy007"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX@2x.png 2x"
                              data-uia="logoIcon-AMEX"
                            />
                            <img
                              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png"
                              alt="Diners Club"
                              class="logoIcon7 DINERS7 default-ltr-cache-kg1rox7 epojmy007"
                              srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS@2x.png 2x"
                              data-uia="logoIcon-DINERS"
                            />
                          </span>
                          <div class="formFieldContainer7">
                            <ul class="simpleForm7 structural7 ui-grid7 inlineContainer7">
                              <li
                                data-uia="field-creditCardNumber+wrapper"
                                class="nfFormSpace7"
                              >
                                <div class="cardNumberContainer7">
                                  <div
                                    data-uia="field-creditCardNumber+container"
                                    class="nfInput7 nfInputOversize7 hasLogo7"
                                  >
                                    <div class="nfInputPlacement7">
                                      <label
                                        class="input_id7"
                                        placeholder="creditCardNumber"
                                      >
                                        <input
                                          data-uia="field-creditCardNumber"
                                          name="creditCardNumber"
                                          class="nfTextField7"
                                          id="id_creditCardNumber"
                                          type="tel"
                                          tabindex="0"
                                          autocomplete="cc-number"
                                          maxlength="19"
                                          minlength="12"
                                          dir=""
                                          placeholder=""
                                          value=""
                                        />
                                        <label
                                          for="id_creditCardNumber"
                                          class="placeLabel"
                                        >
                                          Card number
                                        </label>
                                      </label>
                                      <span class="default-ltr-cache-17w7xsa7 e10wqibd07">
                                        <svg
                                          width="24"
                                          height="22"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="Hawkins-Icon7 Hawkins-Icon-Standard7"
                                          data-name="CreditCard"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V8H22V6C22 5.44771 21.5523 5 21 5H3ZM2 18V10H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18ZM16 16H20V14H16V16Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                data-uia="field-creditExpirationMonth+wrapper"
                                class="nfFormSpace7 inline7"
                              >
                                <div
                                  data-uia="field-creditExpirationMonth+container"
                                  class="nfInput nfInputOversize"
                                >
                                  <div class="nfInputPlacement7">
                                    <label
                                      class="input_id7"
                                      placeholder="creditExpirationMonth"
                                    >
                                      <input
                                        data-uia="field-creditExpirationMonth"
                                        name="creditExpirationMonth"
                                        class="nfTextField7 error"
                                        id="id_creditExpirationMonth7"
                                        type="tel"
                                        tabindex="0"
                                        autocomplete="cc-exp"
                                        dir=""
                                        placeholder=""
                                        value=""
                                      />
                                      <label
                                        for="id_creditExpirationMonth"
                                        class="placeLabel"
                                      >
                                        Expiration date
                                      </label>
                                    </label>
                                  </div>
                                </div>
                              </li>
                              <li
                                data-uia="field-creditExpirationYear+wrapper"
                                class="nfFormSpace7 compressField7"
                              ></li>
                              <li
                                data-uia="field-creditCardSecurityCode+wrapper"
                                class="nfFormSpace7 inline7"
                              >
                                <div
                                  data-uia="field-creditCardSecurityCode+container"
                                  class="nfInput7 nfInputOversize7"
                                >
                                  <div class="nfInputPlacement7">
                                    <label
                                      class="input_id7"
                                      placeholder="creditCardSecurityCode"
                                    >
                                      <input
                                        data-uia="field-creditCardSecurityCode"
                                        name="creditCardSecurityCode"
                                        class="nfTextField7"
                                        id="id_creditCardSecurityCode"
                                        type="tel"
                                        tabindex="0"
                                        autocomplete="cc-csc"
                                        maxlength="4"
                                        minlength="3"
                                        dir=""
                                        placeholder=""
                                        value=""
                                      />
                                      <label
                                        for="id_creditCardSecurityCode"
                                        class="placeLabel"
                                      >
                                        CVV
                                      </label>
                                    </label>
                                  </div>
                                  <button
                                    type="button"
                                    class="tooltipWrapper7"
                                    data-uia="tooltipWrapper"
                                  >
                                    <span
                                      dir="ltr"
                                      class="default-ltr-cache-s15e627 e1boxt2d07"
                                    >
                                      <svg
                                        width="26"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="Hawkins-Icon7 Hawkins-Icon-Standard7"
                                        data-name="Question"
                                        viewport="0 0 26 26"
                                        color="#999999"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </li>
                              <li
                                data-uia="field-firstName+wrapper"
                                class="nfFormSpace7"
                              >
                                <div
                                  data-uia="field-firstName+container"
                                  class="nfInput7 nfInputOversize7"
                                >
                                  <div class="nfInputPlacement7">
                                    <label
                                      class="input_id7"
                                      placeholder="firstName"
                                    >
                                      <input
                                        data-uia="field-firstName"
                                        name="firstName"
                                        class="nfTextField7"
                                        id="id_firstName"
                                        type="text"
                                        tabindex="0"
                                        autocomplete="cc-given-name"
                                        maxlength="100"
                                        minlength="1"
                                        dir=""
                                        placeholder=""
                                        value=""
                                      />
                                      <label
                                        for="id_firstName"
                                        class="placeLabel"
                                      >
                                        First name
                                      </label>
                                    </label>
                                  </div>
                                </div>
                              </li>
                              <li
                                data-uia="field-lastName+wrapper"
                                class="nfFormSpace7"
                              >
                                <div
                                  data-uia="field-lastName+container"
                                  class="nfInput7 nfInputOversize7"
                                >
                                  <div class="nfInputPlacement7">
                                    <label
                                      class="input_id7"
                                      placeholder="lastName"
                                    >
                                      <input
                                        data-uia="field-lastName"
                                        name="lastName"
                                        class="nfTextField7"
                                        id="id_lastName"
                                        type="text"
                                        tabindex="0"
                                        autocomplete="cc-family-name"
                                        dir=""
                                        placeholder=""
                                        value=""
                                      />
                                      <label
                                        for="id_lastName"
                                        class="placeLabel"
                                      >
                                        Last name
                                      </label>
                                    </label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <ul class="orderInfo7" data-uia="orderInfo">
                            <li
                              class="orderInfoItem7"
                              data-uia="selected-plan-item"
                            >
                              <div class="orderInfoItem__content-container7">
                                <div
                                  class="orderInfoItem__content7"
                                  data-uia="selected-plan-item+content"
                                >
                                  <div
                                    class="orderInfoItem__text7 orderInfoItem__title7"
                                    data-uia="selected-plan-item+title"
                                  >
                                    <span id="" data-uia="">
                                      ₹&nbsp;199/month
                                    </span>
                                  </div>
                                  <div
                                    class="orderInfoItem__text7 orderInfoItem__description7"
                                    data-uia="selected-plan-item+description"
                                  >
                                    Basic
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  class="orderInfoItem__button7"
                                  data-uia="changePlanAction"
                                  aria-label="Change Plan"
                                >
                                  Change
                                </button>
                              </div>
                            </li>
                          </ul>
                          <div>
                            <div
                              class="tou--container7"
                              data-uia="tou-container"
                            >
                              <div
                                class="user-consent--container7"
                                data-uia="termsOfUseMatlock+organic-rest"
                              >
                                <p data-uia="tou-in-mandate">
                                  Any payment above ₹ 2000 shall need additional
                                  authentication.
                                </p>
                                <span id="" data-uia="termsOfUse-Disclosure">
                                  By checking the checkbox below, you agree to
                                  our
                                  <a
                                    target="_blank"
                                    href="https://help.netflix.com/legal/termsofuse"
                                  >
                                    Terms of Use
                                  </a>
                                  ,
                                  <a
                                    target="_blank"
                                    href="https://help.netflix.com/legal/privacy"
                                  >
                                    Privacy Statement
                                  </a>
                                  , and that you are over 18. Netflix will
                                  automatically continue your membership and
                                  charge the membership fee (currently
                                  ₹&nbsp;199/month) to your payment method until
                                  you cancel. You may cancel at any time to
                                  avoid future charges.
                                </span>
                                <div class="ui-binary-input7">
                                  <input
                                    type="checkbox"
                                    class=""
                                    name="hasAcceptedTermsOfUse"
                                    id="cb_hasAcceptedTermsOfUse"
                                    tabindex="0"
                                    data-uia="field-hasAcceptedTermsOfUse"
                                    value="true"
                                  />
                                  <label
                                    for="cb_hasAcceptedTermsOfUse"
                                    data-uia="field-hasAcceptedTermsOfUse+label"
                                  >
                                    <span id="" data-uia="">
                                      I agree.
                                    </span>
                                  </label>
                                  <div class="helper7"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="submitBtnContainer7">
                        <button
                          type="submit"
                          autocomplete="off"
                          tabindex="0"
                          class="nf-btn7 nf-btn-primary7 nf-btn-solid7 nf-btn-oversize7"
                  
                          placeholder=""
                        >
                          Start Membership
                        </button>
                      </div>
                    </form>
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
                        <div class="nfSelectPlacement2 globe2">
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
};

export default Step6;
