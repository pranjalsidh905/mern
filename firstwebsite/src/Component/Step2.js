import React from "react";
import Sharma from "./Images/net.png";
import "../css/Step2.css";

const Step2 = () => {
  return (
    <div id="appMountPoint1">
      <div>
        <div class="Header1">
          <div
            class="basicLayout1 notMobile1 modernInApp1 hasLargeTypography1 signupSimplicity-registration1 simplicity1"
            lang="en-IN"
            dir="ltr"
          >
            <div class="nfHeader1 noBorderHeader1 signupBasicHeader1 onboarding-header1">
              <div class="img-div1">
                <img class="img1" src={Sharma} />
              </div>
              <a
                href="/login"
                class="authLinks1 signupBasicHeader1 onboarding-header1"
                data-uia="header-login-link"
              >
                Sign In
              </a>
            </div>

            <div
              class="simpleContainer1"
              data-uia="simpleContainer"
              data-transitioned-child="true"
            >
              <div class="centerContainer1" tabindex="0">
                <form method="POST">
                  <div class="regFormContainer1" data-uia="form-registration">
                    <div class="">
                      <div class="stepHeader1-container1" data-uia="header">
                        <div class="stepHeader1" role="status">
                          <span id="" class="stepIndicator1" data-uia="">
                            STEP <b>1</b> OF <b>3</b>
                          </span>
                          <h1 class="stepTitle1" data-uia="stepTitle1">
                            Create a password to start your membership
                          </h1>
                        </div>
                      </div>
                      <div>
                        <div class="contextRow1" data-uia="contextRow1Done">
                          Just a few more steps and you're done!
                        </div>
                        <div class="contextRow1" data-uia="contextRow1PaperWork">
                          We hate paperwork, too.
                        </div>
                        <ul class="simpleForm1 structural1 ui-grid1">
                          <li
                            data-uia="field-email+wrapper"
                            class="nfFormSpace1"
                          >
                            <div
                              data-uia="field-email+container"
                              class="nfInput1 nfInputOversiz1e1"
                            >
                              <div class="nfInput1Placement">
                                <label class="input_id1" placeholder="email">
                                  <input
                                    data-uia="field-email"
                                    name="email"
                                    class="nfTextField1 hasText1"
                                    id="id_email"
                                    type="email"
                                    tabindex="0"
                                    autocomplete="off"
                                    maxlength="50"
                                    minlength="5"
                                    dir="ltr"
                                    placeholder="
                                  "
                                    value=""
                                  />
                                  <label for="id_email" class="placeLabel1">
                                    Email
                                  </label>
                                </label>
                              </div>
                            </div>
                          </li>
                          <li
                            data-uia="field-password+wrapper"
                            class="nfFormSpace1"
                          >
                            <div
                              data-uia="field-password+container"
                              class="nfInput1 nfInputOversize1"
                            >
                              <div class="nfInputPlacement1">
                                <label class="input_id1" placeholder="password">
                                  <input
                                    data-uia="field-password"
                                    name="password"
                                    class="nfTextField1"
                                    id="id_password"
                                    type="password"
                                    tabindex="0"
                                    autocomplete="new-password"
                                    maxlength="62"
                                    minlength="6"
                                    dir=""
                                    placeholder=""
                                    value=""
                                  />
                                  <label for="id_password" class="placeLabel1">
                                    Add a password
                                  </label>
                                </label>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="submitBtnContainer">
                      <button
                        type="submit"
                        autocomplete="off"
                        tabindex="0"
                        class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                        data-uia="cta-registration"
                        placeholder="regForm_button_next"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
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
                <ul class="footer-links structural1">
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
                          value="/signup/regform?locale=en-IN"
                        >
                          English
                        </option>
                        <option
                          label="हिन्दी"
                          lang="hi"
                          value="/signup/regform?locale=hi-IN"
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
  );
};

export default Step2;
