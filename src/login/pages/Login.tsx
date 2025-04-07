import { useState} from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx} from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import AlertMessage from './shared/AlertMessage';
import SocialIcon from '../assets/img/O365.svg';
import LoginLayout from './shared/loginLayout';
import theme from "../../theme"
import type { I18n } from "../i18n";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Typography,
    Link,
    Sheet,
    Box,
    Grid,
    IconButton,
  } from '@mui/joy';

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
 

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField, message } = kcContext;

    const { msg } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode="" 
            // displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            // infoNode={
            //     <div id="kc-registration-container">
            //         <div id="kc-registration">
            //             <span>
            //                 {msg("noAccount")}{" "}
            //                 <a tabIndex={8} href={url.registrationUrl}>
            //                     {msg("doRegister")}
            //                 </a>
            //             </span>
            //         </div>
            //     </div>
            // }
            socialProvidersNode={
                <>
                    {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
                        <div id="kc-social-providers" className={kcClsx("kcFormSocialAccountSectionClass")}>
                            <hr />
                            <h2>{msg("identity-provider-login-label")}</h2>
                            <ul className={kcClsx("kcFormSocialAccountListClass", social.providers.length > 3 && "kcFormSocialAccountListGridClass")}>
                                {social.providers.map((...[p, , providers]) => (
                                    <li key={p.alias}>
                                        <a
                                            id={`social-${p.alias}`}
                                            className={kcClsx(
                                                "kcFormSocialAccountListButtonClass",
                                                providers.length > 3 && "kcFormSocialAccountGridItem"
                                            )}
                                            type="button"
                                            href={p.loginUrl}
                                        >
                                            {p.iconClasses && <i className={clsx(kcClsx("kcCommonLogoIdP"), p.iconClasses)} aria-hidden="true"></i>}
                                            <span
                                                className={clsx(kcClsx("kcFormSocialAccountNameClass"), p.iconClasses && "kc-social-icon-text")}
                                                dangerouslySetInnerHTML={{ __html: kcSanitize(p.displayName) }}
                                            ></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            }
        >
              <LoginLayout>
            <div id="kc-form">
            <Stack id="kc-form-wrapper">
            <Sheet
              variant="plain"
              sx={{
                width: { xs: '100%', sm: 472 },
                boxShadow: theme.shadow.md,
                paddingY: 4,
                paddingX: { xs: 4, sm: 6 },
                borderRadius: '6px',
                marginBottom: 3,
              }}
            >
                <Stack spacing={2}>
                    {realm.password && (
                        <form
                            id="kc-form-login"
                            onSubmit={() => {
                                setIsLoginButtonDisabled(true);
                                return true;
                            }}
                            action={url.loginAction}
                            method="post"
                        >
                             <Typography level="h3" paddingBottom={0.5}>
                      Sign in
                    </Typography>
                    {realm.password && realm.registrationAllowed && !registrationDisabled && (
                      <Typography>
                        Don't have an account?&nbsp;<Link href={url.registrationUrl}>Register</Link>
                      </Typography>
                    )}
 {message && (
                      <Box paddingY={3}>
                        <AlertMessage message={message} />
                      </Box>
                    )}
                     <Stack spacing={2} sx={{ paddingTop: message ? 0 : 3 }}>
                      {!usernameHidden &&
                        (() => {
                          const label = !realm.loginWithEmailAllowed
                            ? 'username'
                            : realm.registrationEmailAsUsername
                              ? 'email'
                              : 'usernameOrEmail';

                          const autoCompleteHelper: typeof label =
                            label === 'usernameOrEmail' ? 'username' : label;

                          return (
                            <FormControl>
                              <FormLabel htmlFor={autoCompleteHelper}>{msg(label)}</FormLabel>
                              <Input
                                tabIndex={1}
                                id={autoCompleteHelper}
                                name={autoCompleteHelper}
                                type="text"
                                defaultValue={login.username ?? ''}
                              />
                            </FormControl>
                          );
                        })()}
  <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" />
                      </FormControl>
            
                                  
                                {/* // <div className={kcClsx("kcFormGroupClass")}>
                                //     <label htmlFor="username" className={kcClsx("kcLabelClass")}>
                                //         {!realm.loginWithEmailAllowed
                                //             ? msg("username")
                                //             : !realm.registrationEmailAsUsername
                                //               ? msg("usernameOrEmail")
                                //               : msg("email")}
                                //     </label>
                                    
                                //     <input
                                //         tabIndex={2}
                                //         id="username"
                                //         className={kcClsx("kcInputClass")}
                                //         name="username"
                                //         defaultValue={login.username ?? ""}
                                //         type="text"
                                //         autoFocus
                                //         autoComplete="username"
                                //         aria-invalid={messagesPerField.existsError("username", "password")}
                                //     />
                                //     {messagesPerField.existsError("username", "password") && (
                                //         <span
                                //             id="input-error"
                                //             className={kcClsx("kcInputErrorMessageClass")}
                                //             aria-live="polite"
                                //             dangerouslySetInnerHTML={{
                                //                 __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                //             }}
                                //         />
                                //     )}
                                // </div>
                            // )} 

                            <div className={kcClsx("kcFormGroupClass")}>
                                <label htmlFor="password" className={kcClsx("kcLabelClass")}>
                                    {msg("password")}
                                </label>
                                <PasswordWrapper kcClsx={kcClsx} i18n={i18n} passwordInputId="password">
                                    <input
                                        tabIndex={3}
                                        id="password"
                                        className={kcClsx("kcInputClass")}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                    />
                                </PasswordWrapper>
                                {usernameHidden && messagesPerField.existsError("username", "password") && (
                                    <span
                                        id="input-error"
                                        className={kcClsx("kcInputErrorMessageClass")}
                                        aria-live="polite"
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                        }}
                                    />
                                )}
                            </div>*/}
                            </Stack>
                            {realm.resetPasswordAllowed && (
                      <Link
                        href={url.loginResetCredentialsUrl}
                        sx={{
                          marginTop: '8px',
                        }}
                      >
                        Forgot password?
                      </Link>
                    )}
                    <br />
                            {/* <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                                <div id="kc-form-options">
                                    {realm.rememberMe && !usernameHidden && (
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    tabIndex={5}
                                                    id="rememberMe"
                                                    name="rememberMe"
                                                    type="checkbox"
                                                    defaultChecked={!!login.rememberMe}
                                                />{" "}
                                                {msg("rememberMe")}
                                            </label>
                                        </div>
                                    )}
                                </div>
                                <div className={kcClsx("kcFormOptionsWrapperClass")}>
                                    {realm.resetPasswordAllowed && (
                                        <span>
                                            <a tabIndex={6} href={url.loginResetCredentialsUrl}>
                                                {msg("doForgotPassword")}
                                            </a>
                                        </span>
                                    )}
                                </div>
                            </div> */}
<div id="kc-form-buttons">
                      <input
                        type="hidden"
                        id="id-hidden-input"
                        name="credentialId"
                        {...(auth?.selectedCredential !== undefined
                          ? {
                              value: auth.selectedCredential,
                            }
                          : {})}
                      />

                      <Button
                        fullWidth
                        sx={{
                          marginTop: 3,
                        }}
                        type="submit"
                        id="kc-login"
                        name="login"
                        disabled={isLoginButtonDisabled}
                      >
                        Sign in
                      </Button>
                    </div>
                            {/* <div id="kc-form-buttons" className={kcClsx("kcFormGroupClass")}>
                                <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                                <input
                                    tabIndex={7}
                                    disabled={isLoginButtonDisabled}
                                    className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                                    name="login"
                                    id="kc-login"
                                    type="submit"
                                    value={msgStr("doLogIn")}
                                />
                            </div> */}
                        </form>
                    )}
                     <Stack direction="column" spacing={1} justifyContent="center" alignItems="center">
                  {/* To Do: social icon is mapped to Streamliners icon. Need to update if more Social Providers are added. */}
                  {realm.password && social?.providers !== undefined && (
                    <div id="kc-social-providers" style={{ width: '100%' }}>
                      {social?.providers
                        ?.filter((p) => p.displayName !== 'Streamliners')
                        .map((p) => (
                          <Button
                            fullWidth
                            variant="outlined"
                            type="submit"
                            id="kc-login"
                            startDecorator={<img src={SocialIcon} alt={p.displayName} />}
                            disabled={isLoginButtonDisabled}
                            onClick={() => (window.location.href = p.loginUrl)}
                            key={p.providerId}
                          >
                            {p.displayName}
                          </Button>
                        ))}
                    </div>
                  )}
                </Stack>
                          </Stack>
                          </Sheet>
                           {/**footer */}
            <Grid xs={12} md={8} textAlign={'center'}>
              <Link href="https://hub.healthpathwayscommunity.org/terms" target="_blank">
                Terms and conditions
              </Link>
            </Grid>
            {social?.providers
              ?.filter((p) => p.displayName == 'Streamliners')
              .map((p) => (
                <Stack alignItems={'center'} paddingTop={2} key={p.providerId} >
                  <IconButton onClick={() => (window.location.href = p.loginUrl)}>
                    <img src={SocialIcon} alt={p.displayName} />
                  </IconButton>
                </Stack>
              ))}
                          </Stack>
            </div>
            </LoginLayout>
        </Template>
    );
}
