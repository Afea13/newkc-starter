import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import SheetLayout from "./shared/SheetLayout";
import LoginLayout from "./shared/loginLayout";
import { Button, Stack, Typography } from "@mui/joy";

export default function LogoutConfirm(props: PageProps<Extract<KcContext, { pageId: "logout-confirm.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { url, client, logoutConfirm } = kcContext;

    const { msg, msgStr } = i18n;

    return (
        <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("logoutConfirmTitle")}>
               <LoginLayout>
               <div id="kc-logout-confirm" className="content-area"> <SheetLayout>
          
            <Stack>
                  <Typography level="h3">Sign out</Typography>
                  <Typography level="body-md">Are you sure you want to sign out?</Typography>
                 
                <form className="form-actions" action={url.logoutConfirmAction} method="POST">
                    <input type="hidden" name="session_code" value={logoutConfirm.code} />
                    <div className={kcClsx("kcFormGroupClass")}>
                        <div id="kc-form-options">
                            <div className={kcClsx("kcFormOptionsWrapperClass")}></div>
                        </div>
                        <div id="kc-form-buttons" className={kcClsx("kcFormGroupClass")}>
                        <Button
                          sx={{ marginTop: 3 }}
                          fullWidth
                          name="confirmLogout"
                          id="kc-logout"
                          type="submit"
                          value={msgStr('doLogout')}
                        >
                          Sign out
                        </Button>
                        </div>
                    </div>
                </form>
                <div id="kc-info-message">
                    {!logoutConfirm.skipLink && client.baseUrl && (
                        <Button
                        sx={{ marginTop: 2 }}
                        variant="outlined"
                        id="backToApplication"
                        component="a"
                        fullWidth
                        href={client.baseUrl}
                      >
                        Cancel
                      </Button>
                    )}
                </div>
                </Stack>
       
            
            </SheetLayout>
            </div>
            </LoginLayout>
        </Template>
    );
}