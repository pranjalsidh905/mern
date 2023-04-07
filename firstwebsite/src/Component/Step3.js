import React from "react";
import "../css/Step3.css";
import Logo from "./Images/net.png";
function Step3() {
  return (
    <div id="appMountPoint1">
      <div class="Header1">
        <div class="netflix-sans-font-loaded">
          <div data-uia="loc" lang="en-IN" dir="ltr">
            <div
              class="basicLayout2 notMobile modernInApp hasLargeTypography2 signupSimplicity-planSelectionWithContext simplicity2"
              lang="en-IN"
              dir="ltr"
            >
              <div class="nfHeader2 noBorderHeader signupBasicHeader2 onboarding-header">
              <div class="img-div1">
                <img class="img1" src={Logo} />
              </div>
                <a
                  href="/signout"
                  class="authLinks2 signupBasicHeader2 onboarding-header"
                  data-uia="header-signout-link"
                >
                  Sign Out
                </a>
              </div>
              <div
                class="simpleContainer2"
                data-uia="simpleContainer2"
                data-transitioned-child="true"
              >
                <div
                  class="centerContainer2 contextStep2 firstLoad2"
                  tabindex="0"
                 
                >
                  <div
                    class="planContainer2"
                    data-uia="plan-context-page-container"
                  >
                    <div class="stepLogoContainer2">
                      <span class="stepLogo2 planStepLogo2"></span>
                    </div>
                    <div class="stepHeader-container" data-uia="header">
                      <div class="stepHeader2" role="status">
                        <span id="" class="stepIndicator2" data-uia="">
                          STEP <b>2</b> OF <b>3</b>
                        </span>
                        <h1 class="stepTitle2" data-uia="stepTitle">
                          Choose your plan.
                        </h1>
                      </div>
                    </div>
                    <div class="contextBody2 contextRow2">
                      <ul class="checkmark-group2" data-uia="checkmark-group">
                        <li
                          class="checkmark-group--row2"
                          data-uia="checkmark-group+row-0"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="checkmark-group--icon2"
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
                            class="checkmark-group--text2"
                            data-uia="checkmark-group+row-0+content"
                          >
                            No commitments, cancel anytime.
                          </span>
                        </li>
                        <li
                          class="checkmark-group--row2"
                          data-uia="checkmark-group+row-1"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="checkmark-group--icon2"
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
                            class="checkmark-group--text2"
                            data-uia="checkmark-group+row-1+content"
                          >
                            Everything on Netflix for one low price.
                          </span>
                        </li>
                        <li
                          class="checkmark-group--row2"
                          data-uia="checkmark-group+row-2"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="checkmark-group--icon2"
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
                            class="checkmark-group--text2"
                            data-uia="checkmark-group+row-2+content"
                          >
                            No ads and no extra fees. Ever.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="submitBtnContainer2">
                    <button
                      type="button"
                      autocomplete="off"
                      tabindex="0"
                      class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                      data-uia="continue-button"
                      placeholder="button_see_plans"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="site-footer-wrapper2 centered"
             
              >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="a11yAnnouncer2"
                aria-live="assertive"
                tabindex="-1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
