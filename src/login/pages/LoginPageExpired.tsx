import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

import { Link, Stack,  Typography } from '@mui/joy';
import SheetLayout from "./shared/SheetLayout";
import LoginLayout from "./shared/loginLayout";

export default function LoginPageExpired(props: PageProps<Extract<KcContext, { pageId: "login-page-expired.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { url } = kcContext;

    const { msg } = i18n;

    return (
        <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("pageExpiredTitle")}>
            <LoginLayout>
            <SheetLayout>
              <div id="kc-error-message">
                  <Stack direction="column" spacing={1}>
                    <Typography level="h4">Page has expired</Typography>
                    <Typography level="title-sm" textColor="text.tertiary">
                      To restart the login process &nbsp;{' '}
                      <Link
                        id="loginRestartLink"
                        href={url.loginRestartFlowUrl}
                        sx={{
                          color: '#2B6FA6',
                          textDecoration: 'underline',
                          fontWeight: 400,
                          fontSize: '16px',
                        }}
                      >
                        {msg('doClickHere')}
                      </Link>
                    </Typography>
                    <Typography level="title-sm" textColor="text.tertiary">
                      To continue the login process &nbsp;
                      <Link
                        id="loginContinueLink"
                        href={url.loginAction}
                        sx={{
                          color: '#2B6FA6',
                          textDecoration: 'underline',
                          fontWeight: 400,
                          fontSize: '16px',
                        }}
                      >
                
                        {msg('doClickHere')}
                      </Link>
                    </Typography>
                  </Stack>
                </div>
                </SheetLayout>
                </LoginLayout>
        </Template>
    );
}
