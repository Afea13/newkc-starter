import "./kcApp.css"
import { Suspense, lazy } from "react";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from '../theme'; 
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";

const UserProfileFormFields = lazy(
    () => import("./UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;
const Login = lazy(() => import("./pages/Login"));
const Error = lazy(() => import("./pages/Error"));
const Info = lazy(() => import("./pages/Info"));
const LoginConfigTotp = lazy(() => import("./pages/LoginConfigTotp"));
const LoginOtp = lazy(() => import("./pages/LoginOtp"));
const IdpReviewUserProfile = lazy(() => import("./pages/IdpReviewUserProfile"));
const LoginPageExpired = lazy(() => import("./pages/LoginPageExpired"));
const LoginResetPassword = lazy(() => import("./pages/LoginResetPassword"));
const LoginUpdatePassword = lazy(() => import("./pages/LoginUpdatePassword"));
const LogoutConfirm = lazy(() => import("./pages/LogoutConfirm"));
const Register = lazy(() => import("./pages/Register"));
const LoginUpdateProfile = lazy(() => import("./pages/LoginUpdateProfile"));
const Terms = lazy(() => import("./pages/Terms"));

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <StyledEngineProvider injectFirst>
            <CssVarsProvider theme={theme}>
                <CssBaseline />
                <Suspense>
                    {(() => {
                        switch (kcContext.pageId) {
                            case "login.ftl":
                                return (
                                    <Login
                                        {...{ kcContext, i18n, classes }}
                                        Template={Template}
                                        doUseDefaultCss={false}
                                    />
                                );
                                case "error.ftl": return (
                                                            <Error
                                                                {...{ kcContext, i18n, classes }}
                                                                Template={Template}
                                                                doUseDefaultCss={false}
                                                            />
                                                        );
                                                        case "idp-review-user-profile.ftl": return (
                                                                                    <IdpReviewUserProfile
                                                                                        {...{ kcContext, i18n, classes }}
                                                                                        Template={Template}
                                                                                        doUseDefaultCss={false}
                                                                                        UserProfileFormFields={UserProfileFormFields}
                                                                                        doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                                                                                    />
                                                                                );
                                                                                case "info.ftl": return (
                                                                                                            <Info
                                                                                                                {...{ kcContext, i18n, classes }}
                                                                                                                Template={Template}
                                                                                                                doUseDefaultCss={false}
                                                                                                            />
                                                                                                        );
                                                                                                        case "login-config-totp.ftl": return (
                                                                                                                                    <LoginConfigTotp
                                                                                                                                        {...{ kcContext, i18n, classes }}
                                                                                                                                        Template={Template}
                                                                                                                                        doUseDefaultCss={false}
                                                                                                                                    />
                                                                                                                                );
                                                                                                        
                                                                                                                                case "login-otp.ftl": return (
                                                                                                                                                            <LoginOtp
                                                                                                                                                                {...{ kcContext, i18n, classes }}
                                                                                                                                                                Template={Template}
                                                                                                                                                                doUseDefaultCss={false}
                                                                                                                                                            />
                                                                                                                                                        );
                                                                                                                                                        case "login-page-expired.ftl": return (
                                                                                                                                                                                    <LoginPageExpired
                                                                                                                                                                                        {...{ kcContext, i18n, classes }}
                                                                                                                                                                                        Template={Template}
                                                                                                                                                                                        doUseDefaultCss={false}
                                                                                                                                                                                    />
                                                                                                                                                                                );
        
                                                                                                                                                                                case "login-reset-password.ftl": return (
                                                                                                                                                                                    <LoginResetPassword
                                                                                                                                                                                        {...{ kcContext, i18n, classes }}
                                                                                                                                                                                        Template={Template}
                                                                                                                                                                                        doUseDefaultCss={false}
                                                                                                                                                                                    />
                                                                                                                                                                                );                                                                                                                                                
                               
                                                                                                                                                                                case "login-update-password.ftl": return (
                                                                                                                                                                                                            <LoginUpdatePassword
                                                                                                                                                                                                                {...{ kcContext, i18n, classes }}
                                                                                                                                                                                                                Template={Template}
                                                                                                                                                                                                                doUseDefaultCss={true}
                                                                                                                                                                                                            />
                                                                                                                                                                                                        );
                                                                                                                                                                                                        case "logout-confirm.ftl": return (
                                                                                                                                                                                                                                    <LogoutConfirm
                                                                                                                                                                                                                                        {...{ kcContext, i18n, classes }}
                                                                                                                                                                                                                                        Template={Template}
                                                                                                                                                                                                                                        doUseDefaultCss={false}
                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                case "register.ftl": return (
                                                                                                                                                                                                                                                            <Register
                                                                                                                                                                                                                                                                {...{ kcContext, i18n, classes }}
                                                                                                                                                                                                                                                                Template={Template}
                                                                                                                                                                                                                                                                doUseDefaultCss={false}
                                                                                                                                                                                                                                                                UserProfileFormFields={UserProfileFormFields}
                                                                                                                                                                                                                                                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                        case "login-update-profile.ftl": return (
                                                                                                                                                                                                                                                                                    <LoginUpdateProfile
                                                                                                                                                                                                                                                                                        {...{ kcContext, i18n, classes }}
                                                                                                                                                                                                                                                                                        Template={Template}
                                                                                                                                                                                                                                                                                        doUseDefaultCss={false}
                                                                                                                                                                                                                                                                                        UserProfileFormFields={UserProfileFormFields}
                                                                                                                                                                                                                                                                                        doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                );
                               
                               
                                                                                                                                                                                
                                                                                                                                                                                                                                                                                case "terms.ftl": return (
                                                                                                                                                                                                                                                                                                            <Terms
                                                                                                                                                                                                                                                                                                                {...{ kcContext, i18n, classes }}
                                                                                                                                                                                                                                                                                                                Template={Template}
                                                                                                                                                                                                                                                                                                                doUseDefaultCss={false}
                                                                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                default:
                                return (
                                    <DefaultPage
                                        kcContext={kcContext}
                                        i18n={i18n}
                                        classes={classes}
                                        Template={Template}
                                        doUseDefaultCss={true}
                                        UserProfileFormFields={UserProfileFormFields}
                                        doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                                    />
                                );
                        }
                    })()}
                </Suspense>
            </CssVarsProvider>
        </StyledEngineProvider>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
