import { Suspense , lazy} from "react";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import type { ClassKey } from "keycloakify/account";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/account/DefaultPage";
import Template from "./Template";

import theme from '../theme';
// import { GlobalStyles } from '@mui/material'; // Import GlobalStyles
import './KcApp.css';

const Account = lazy(() => import("./pages/Account"));
const Password = lazy(() => import("./pages/Password"));
const Sessions = lazy(() => import("./pages/Sessions"));
const Totp = lazy(() => import("./pages/Totp"));
const Applications = lazy(() => import("./pages/Applications"));
const Log = lazy(() => import("./pages/Log"));
const FederatedIdentity = lazy(() => import("./pages/FederatedIdentity"));

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
                    case "account.ftl": return (
                                                <Account
                                                    {...{ kcContext, i18n, classes }}
                                                    Template={Template}
                                                    doUseDefaultCss={false}
                                                />
                                            );
                                            case "password.ftl": return (
                                                                        <Password
                                                                           {...{ kcContext, i18n, classes }}
                                                                            Template={Template}
                                                                            doUseDefaultCss={false}
                                                                        />
                                                                    );
                                                                    case "sessions.ftl": return (
                                                                                                <Sessions
                                                                                                    {...{ kcContext, i18n, classes }}
                                                                                                    Template={Template}
                                                                                                    doUseDefaultCss={false}
                                                                                                />
                                                                                            );
                                                                                            case "totp.ftl": return (
                                                                                                                        <Totp
                                                                                                                            {...{ kcContext, i18n, classes }}
                                                                                                                            Template={Template}
                                                                                                                            doUseDefaultCss={false}
                                                                                                                        />
                                                                                                                    );
                                                                                                                    case "applications.ftl": return (
                                                                                                                                                <Applications
                                                                                                                                                    {...{ kcContext, i18n, classes }}
                                                                                                                                                    Template={Template}
                                                                                                                                                    doUseDefaultCss={false}
                                                                                                                                                />
                                                                                                                                            );
                                                                                                                                            case "log.ftl": return (
                                                                                                                                                                        <Log
                                                                                                                                                                            {...{ kcContext, i18n, classes }}
                                                                                                                                                                            Template={Template}
                                                                                                                                                                            doUseDefaultCss={false}
                                                                                                                                                                        />
                                                                                                                                                                    );
                                                                                                                                                                    case "federatedIdentity.ftl": return (
                                                                                                                                                                                                <FederatedIdentity
                                                                                                                                                                                                    {...{ kcContext, i18n, classes }}
                                                                                                                                                                                                    Template={Template}
                                                                                                                                                                                                    doUseDefaultCss={false}
                                                                                                                                                                                               />
                                                                                                                                                                                            );
                    default:
                        return <DefaultPage kcContext={kcContext} i18n={i18n} classes={classes} Template={Template} doUseDefaultCss={true} />;
                }
            })()}
        </Suspense>
        </CssVarsProvider>
        </StyledEngineProvider>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
