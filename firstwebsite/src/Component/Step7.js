import React from "react";
import Logo from "./Images/net.png";
import "../css/Step7.css";
import { FaTwitterSquare } from "react-icons/fa";

function Step7() {
  return (
    <div>
      <div id="appMountPoint">
        <div class="Header1">
          <div class="netflix-sans-font-loaded">
            <div data-uia="loc" lang="en-IN" dir="ltr">
              <div
                class="basicLayout notMobile modernInApp hasLargeTypography signupSimplicity-upiPaymentOptionMode simplicity"
                lang="en-IN"
                dir="ltr"
              >
                <div class="nfHeader6 noBorderHeader6 signupBasicHeader7 onboarding-header">
                  <div class="img-div1">
                    <img class="img1" src={Logo} />
                  </div>
                  <a
                    href="/signout"
                    class="authLinks signupBasicHeader onboarding-header"
                    data-uia="header-signout-link"
                  >
                    Sign Out
                  </a>
                </div>
                <div
                  class="simpleContainer"
                  data-uia="simpleContainer"
                  data-transitioned-child="true"
                >
                  <div
                    class="centerContainer overflowVisible"
                    tabindex="0"
                    style={{
                      display: "block",
                      transform: "none",
                      opacity: "1",
                      transitionduration: "250ms",
                    }}
                  >
                    <form method="POST" data-uia="payment-form">
                      <div class="paymentFormContainer">
                        <div>
                          <div class="stepHeader-container" data-uia="header">
                            <div class="stepHeader" role="status">
                              <span id="" class="stepIndicator" data-uia="">
                                STEP <b>3</b> OF <b>3</b>
                              </span>
                              <h1 class="stepTitle" data-uia="stepTitle">
                                Set up UPI AutoPay
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div class="fieldContainer">
                          <p data-uia="upi-form-description">
                            You can change this recurring payment any time in
                            your settings.
                          </p>
                          <div
                            data-uia="upi-app-select+container"
                            class="ui-select-wrapper payment-select"
                          >
                            <a
                              data-uia="upi-app-select+target"
                              href="#"
                              class="ui-select-wrapper-link"
                            >
                              <div
                                class="ui-select-current"
                                placeholder='{"current_selected_country":"unknown_id"}'
                              >
                                Select your UPI app
                              </div>
                            </a>
                            <ul
                              data-uia="upi-app-select+option-list"
                              class="ui-select-options ui-select-options-hidden"
                            >
                              <li
                                data-uia="option-BHIM"
                                class="ui-select-item"
                                placeholder='{"id":"BHIM","selected":false,"highlighted":false}'
                              >
                                <a
                                  id="BHIM"
                                  tabindex="-1"
                                  class="ui-select-item-link"
                                >
                                  <span
                                    class="logos logos-block"
                                    data-uia="cardLogos-comp"
                                    aria-label="We accept BHIM."
                                  >
                                    <img
                                      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png"
                                      alt="BHIM"
                                      class="logoIcon BHIM default-ltr-cache-kg1rox epojmy00"
                                      srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM@2x.png 2x"
                                      data-uia="logoIcon-BHIM"
                                    />
                                  </span>
                                  <span>BHIM</span>
                                </a>
                              </li>
                              <li
                                data-uia="option-PAYTM"
                                class="ui-select-item"
                                placeholder='{"id":"PAYTM","selected":false,"highlighted":false}'
                              >
                                <a
                                  id="PAYTM"
                                  tabindex="-1"
                                  class="ui-select-item-link"
                                >
                                  <span
                                    class="logos logos-block"
                                    data-uia="cardLogos-comp"
                                    aria-label="We accept Paytm."
                                  >
                                    <img
                                      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png"
                                      alt="Paytm"
                                      class="logoIcon PAYTM default-ltr-cache-kg1rox epojmy00"
                                      srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM@2x.png 2x"
                                      data-uia="logoIcon-PAYTM"
                                    />
                                  </span>
                                  <span>Paytm</span>
                                </a>
                              </li>
                              <li
                                data-uia="option-PHONEPE"
                                class="ui-select-item"
                                placeholder='{"id":"PHONEPE","selected":false,"highlighted":false}'
                              >
                                <a
                                  id="PHONEPE"
                                  tabindex="-1"
                                  class="ui-select-item-link"
                                >
                                  <span
                                    class="logos logos-block"
                                    data-uia="cardLogos-comp"
                                    aria-label="We accept PhonePe."
                                  >
                                    <img
                                      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png"
                                      alt="PhonePe"
                                      class="logoIcon PHONEPE default-ltr-cache-kg1rox epojmy00"
                                      srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE@2x.png 2x"
                                      data-uia="logoIcon-PHONEPE"
                                    />
                                  </span>
                                  <span>PhonePe</span>
                                </a>
                              </li>
                              <li
                                data-uia="option-AMAZONPAY"
                                class="ui-select-item"
                                placeholder='{"id":"AMAZONPAY","selected":false,"highlighted":false}'
                              >
                                <a
                                  id="AMAZONPAY"
                                  tabindex="-1"
                                  class="ui-select-item-link"
                                >
                                  <span
                                    class="logos logos-block"
                                    data-uia="cardLogos-comp"
                                    aria-label="We accept Amazon Pay."
                                  >
                                    <img
                                      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png"
                                      alt="Amazon Pay"
                                      class="logoIcon AMAZONPAY default-ltr-cache-kg1rox epojmy00"
                                      srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY@2x.png 2x"
                                      data-uia="logoIcon-AMAZONPAY"
                                    />
                                  </span>
                                  <span>Amazon Pay</span>
                                </a>
                              </li>
                              <li
                                data-uia="option-GPAY"
                                class="ui-select-item"
                                placeholder='{"id":"GPAY","selected":false,"highlighted":false}'
                              >
                                <a
                                  id="GPAY"
                                  tabindex="-1"
                                  class="ui-select-item-link"
                                >
                                  <span
                                    class="logos logos-block"
                                    data-uia="cardLogos-comp"
                                    aria-label="We accept Google Pay."
                                  >
                                    <img
                                      src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png"
                                      alt="Google Pay"
                                      class="logoIcon GPAY default-ltr-cache-kg1rox epojmy00"
                                      srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY@2x.png 2x"
                                      data-uia="logoIcon-GPAY"
                                    />
                                  </span>
                                  <span>Google Pay</span>
                                </a>
                              </li>
                              <li
                                data-uia="option-other"
                                class="ui-select-item"
                                placeholder='{"id":"other","selected":false,"highlighted":false}'
                              >
                                <a
                                  id="other"
                                  tabindex="-1"
                                  class="ui-select-item-link"
                                >
                                  <span
                                    class="logos logos-block"
                                    data-uia="cardLogos-comp"
                                    aria-label="We accept OTHER."
                                  >
                                    <img
                                      alt="OTHER"
                                      class="logoIcon OTHER"
                                      data-uia="logoIcon-OTHER"
                                      src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/other.png"
                                      srcset="https://assets.nflxext.com/ffe/siteui/acquisition/payment/other_2x.png 2x"
                                    />
                                  </span>
                                  <span>Other</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <ul class="simpleForm structural ui-grid">
                            <li
                              data-uia="field-upiId+wrapper"
                              class="nfFormSpace"
                            >
                              <div class="default-ltr-cache-bjn8wh e1tvoxrb2">
                                <div
                                  data-uia="field-upiId+container"
                                  class="nfInput nfInputOversize"
                                >
                                  <div class="nfInputPlacement">
                                    <label class="input_id" placeholder="upiId">
                                      <input
                                        data-uia="field-upiId"
                                        name="upiId"
                                        class="nfTextField"
                                        id="id_upiId"
                                        type="text"
                                        tabindex="0"
                                        autocomplete="off"
                                        disabled=""
                                        maxlength="120"
                                        minlength="3"
                                        dir=""
                                        placeholder=""
                                        value=""
                                      />
                                      <label for="id_upiId" class="placeLabel">
                                        UPI ID
                                      </label>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <a href="#">How do I find my UPI ID?</a>
                        </div>
                      </div>
                      <div class="submitBtnContainer">
                        <button
                          type="submit"
                          autocomplete="off"
                          tabindex="0"
                          class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                          data-uia="action-submit-payment"
                          placeholder=""
                        >
                          Next
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
}

export default Step7;
