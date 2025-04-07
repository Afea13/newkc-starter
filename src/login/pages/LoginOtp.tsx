import { Fragment } from "react";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import SheetLayout from "./shared/SheetLayout";
import LoginLayout from "./shared/loginLayout";
import { Button, FormControl, FormLabel, Input, Stack, Typography } from "@mui/joy";

export default function LoginOtp(props: PageProps<Extract<KcContext, { pageId: "login-otp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { otpLogin, url, messagesPerField } = kcContext;

    const { msg } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}            
            displayMessage={false}
            headerNode={msg("doLogIn")}
        >
            <LoginLayout>
            <SheetLayout>
            <form id="kc-otp-login-form"  action={url.loginAction} method="post">
            <Stack direction="column" spacing={1}>
                      <Typography level="h4">Multi-factor authentication</Typography>
                      <Typography level="body-sm" textColor="text.tertiary">
                        Enter a one-time password provided by your authenticator application to
                        proceed.
                      </Typography>
                      <Stack spacing={2}>
                {otpLogin.userOtpCredentials.length > 1 && (
                    <div >
                        <div >
                            {otpLogin.userOtpCredentials.map((otpCredential, index) => (
                                <Fragment key={index}>
                                    <input
                                        id={`kc-otp-credential-${index}`}                                        
                                        type="radio"
                                        name="selectedCredentialId"
                                        value={otpCredential.id}
                                        defaultChecked={otpCredential.id === otpLogin.selectedCredentialId}
                                    />
                                   <label
                                    htmlFor={`kc-otp-credential-${index}`}
                                    key={otpCredential.id}
                                  >
                                    <div>
                                      <span />
                                      <h2>{otpCredential.userLabel}</h2>
                                    </div>
                                  </label>
                               
                                </Fragment>
                            ))}
                        </div>
                    </div>
                )}
  <FormControl>
                          <FormLabel> One-time password</FormLabel>
                          <Input type="text" autoFocus id="otp" name="otp" autoComplete="off" />
                          <br/>
                          {messagesPerField.existsError("totp") && (
                            <span
                                id="input-error-otp-code"
                                className={kcClsx("kcInputErrorMessageClass")}
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: kcSanitize(messagesPerField.get("totp"))
                                }}
                            />
                        )}
            
                       
                        </FormControl>
                        </Stack>

                <div>
                        <div id="kc-form-buttons">
                          <Button
                            fullWidth
                            sx={{ color: 'background.level1', marginTop: '16px' }}
                            name="login"
                            id="kc-login"
                            type="submit"
                          >
                            Proceed
                          </Button>
                        </div>
                      </div>
                      </Stack>
            </form>
            </SheetLayout>
            </LoginLayout>
        </Template>
    );
}