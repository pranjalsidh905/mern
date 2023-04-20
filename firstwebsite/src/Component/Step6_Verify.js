import React from "react";
import Logo from "./Images/net.png";
import "../css/Step6_Verify.css";
function Step6_Verify() {
  return (
    <div>
      <div id="appMountPoint">
        <div class="Header1">
          <div class="netflix-sans-font-loaded">
            <div data-uia="loc" lang="en-IN" dir="ltr">
              <div
                class="basicLayout8 notMobile modernInApp hasLargeTypography8 signupSimplicity-verifyCardContext simplicity8"
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
                  class="simpleContainer8"
                  data-uia="simpleContainer"
                  data-transitioned-child="true"
                >
                  <div
                    class="centerContainer8 contextStep8"
                    tabindex="0"
                    style={{
                      display: "block",
                      transform: "none",
                      opacity: "1",
                      transitionduration: "250ms",
                    }}
                  >
                    <div
                      class="verifyCardContainer8"
                      data-uia="verifyCardContainer"
                    >
                      <div class="stepLogoContainer8">
                        <span class="stepLogo8 paymentStepLogo8"></span>
                      </div>
                      <div class="stepHeader-container8" data-uia="header">
                        <div class="stepHeader8" role="status">
                          <h1 class="stepTitle8" data-uia="stepTitle">
                            Verify your card
                          </h1>
                        </div>
                      </div>
                      <span id="" class="contextBody8 contextRow8" data-uia="">
                        Your card requires a separate verification from your
                        bank which will ensure a secure transaction.
                      </span>
                    </div>
                    <div class="submitBtnContainer8">
                      <button
                        type="button"
                        autocomplete="off"
                        tabindex="0"
                        class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize default-ltr-cache-0"
                        data-uia="verifyCardBtn"
                        placeholder=""
                      >
                        <span class="text8">Verify the Card</span>
                      </button>
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

export default Step6_Verify;
