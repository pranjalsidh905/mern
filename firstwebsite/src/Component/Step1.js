import React from "react";
import pranjal from "./Images/net.png";
import "../css/Step1.css";

function Step1() {
return (
<div id="appMountPoint ">
    <div class="Header">


        <div class="nfHeader noBorderHeader signupBasicHeader onboarding-header">
            <a href="/" class="svg-nfLogo signupBasicHeader onboarding-header" data-uia="netflix-header-svg-logo">

                <div class="img-div">
                    <img class="img" src={pranjal} />


                </div>

            </a>
            <a href="/login" class="authLinks signupBasicHeader onboarding-header" data-uia="header-login-link">Sign
                out</a>
        </div>


        <div>

        </div>
    </div>

    <div class="simpleContainer" data-uia="simpleContainer" data-transitioned-child="true">
        <div class="centerContainer contextStep firstLoad">
            <div class="regContainer" data-uia="context-registration">
                <div class="stepLogoContainer" data-uia="stepLogoContainer"><span class="stepLogo regStepLogo"></span>
                </div>
                <div class="stepHeader-container" data-uia="header">
                    <div class="stepHeader" role="status"><span id="" class="stepIndicator" data-uia="">STEP <b>1</b> OF
                            <b>3</b></span>
                        <h1 class="stepTitle" data-uia="stepTitle">Finish setting up your account</h1>
                    </div>
                </div>
                <div id="" class="contextBody contextRow" data-uia="regContextBody">Netflix is personalised for you.
                    Create a password to watch on any device at any time.</div>
            </div>
            <div class="submitBtnContainer"><button type="button" autocomplete="off" tabindex="0"
                    class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize" data-uia="cta-continue-registration"
                    placeholder="registration_button_continue">Next</button></div>
        </div>
    </div>


    <div class="site-footer-wrapper centered">
        <div class="footer-divider"></div>
        <div class="site-footer">
            <p class="footer-top">Questions? Call <a class="footer-top-a"
                    href="tel:000-800-919-1694">000-800-919-1694</a></p>
            <ul class="footer-links structural">
                <li class="footer-link-item" placeholder="footer_responsive_link_faq_item"><a class="footer-link"
                        data-uia="footer-link" href="https://help.netflix.com/support/412"
                        placeholder="footer_responsive_link_faq"><span id=""
                            data-uia="data-uia-footer-label">FAQ</span></a></li>
                <li class="footer-link-item" placeholder="footer_responsive_link_help_item"><a class="footer-link"
                        data-uia="footer-link" href="https://help.netflix.com"
                        placeholder="footer_responsive_link_help"><span id="" data-uia="data-uia-footer-label">Help
                            Center</span></a></li>
                <li class="footer-link-item" placeholder="footer_responsive_link_netflix_shop_item"><a
                        class="footer-link" data-uia="footer-link" href="https://netflix.shop/"
                        placeholder="footer_responsive_link_netflix_shop"><span id=""
                            data-uia="data-uia-footer-label">Netflix Shop</span></a></li>
                <li class="footer-link-item" placeholder="footer_responsive_link_terms_item"><a class="footer-link"
                        data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse"
                        placeholder="footer_responsive_link_terms"><span id="" data-uia="data-uia-footer-label">Terms of
                            Use</span></a></li>
                <li class="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item"><a
                        class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy"
                        placeholder="footer_responsive_link_privacy_separate_link"><span id=""
                            data-uia="data-uia-footer-label">Privacy</span></a></li>
                <li class="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item"><a
                        class="footer-link" data-uia="footer-link" href="#"
                        placeholder="footer_responsive_link_cookies_separate_link"><span id=""
                            data-uia="data-uia-footer-label">Cookie Preferences</span></a></li>
                <li class="footer-link-item" placeholder="footer_responsive_link_corporate_information_item"><a
                        class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo"
                        placeholder="footer_responsive_link_corporate_information"><span id=""
                            data-uia="data-uia-footer-label">Corporate Information</span></a></li>
            </ul>
            <div class="lang-selection-container" id="lang-switcher">
                <div class="nfSelectWrapper inFooter selectArrow prefix" data-uia="language-picker+container"><label
                        class="nfLabel" for="lang-switcher-select">Select Language</label>
                    <div class="nfSelectPlacement globe"><select data-uia="language-picker" class="nfSelect"
                            id="lang-switcher-select" name="__langSelect" tabindex="0">
                            <option selected="" label="English" lang="en" value="/signup/registration?locale=en-IN">
                                English</option>
                            <option label="हिन्दी" lang="hi" value="/signup/registration?locale=hi-IN">हिन्दी</option>
                        </select></div>
                </div>
            </div>
        </div>
    </div>


</div>
);
}

export default Step1;