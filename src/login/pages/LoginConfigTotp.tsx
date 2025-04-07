import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Link,
    List,
    ListItem,
    Stack,
    Grid,

  } from '@mui/joy';
import PageTitle from "./PageTitle";
import SheetLayout from "./shared/SheetLayout";
import LoginLayout from "./shared/loginLayout";
  
export default function LoginConfigTotp(props: PageProps<Extract<KcContext, { pageId: "login-config-totp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  
    const { url, isAppInitiatedAction, totp, mode, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={msg('loginTotpTitle')}
        >
            <>
            <LoginLayout>
            <SheetLayout>
            <Stack direction="column" spacing={{ xs: 1 }} className="account-form-header">
                    <PageTitle title="Set up multi-factor authentication" />
                    <>
                      <List marker={'decimal'} size="sm">
                        <ListItem nested sx={{ marginTop: 3 }}>
                          <ListItem>
                            Install one of the following applications on your mobile:
                          </ListItem>
                          <List
                            marker="disc"
                            sx={{
                              '--ListItem-minHeight': '20px',
                              marginBottom: 3,
                            }}
                          >
                            <ListItem>Google Authenticator</ListItem>
                            <ListItem>Microsoft Authenticator</ListItem>
                            <ListItem>FreeOTP</ListItem>
                          </List>
                        </ListItem>
                                         
                        {mode == "manual" ? (
                            <>
                            <ListItem>
                              Open the application, click a ‘+’ icon to scan the QR code.
                            </ListItem>

                            <Input
                              id="kc-totp-secret-key"
                              disabled
                              value={totp.totpSecretEncoded}
                            ></Input>

                            <p>
                              <Link href={totp.qrUrl} id="mode-barcode">
                                {msg('loginTotpScanBarcode')}
                              </Link>
                            </p>
                           <ListItem>{msg('loginTotpManualStep3')}</ListItem>
                            <List
                              size="sm"
                              marker="disc"
                              sx={{
                                '--ListItem-minHeight': '20px',
                              }}
                            >
                              <ListItem>
                                {msg('loginTotpType')}:{' '}
                                <b>{msg(`loginTotp.${totp.policy.type}`)}</b>
                              </ListItem> 
                               <ListItem>
                               {msg("loginTotpAlgorithm")}: {totp.policy.getAlgorithmKey()}
                                </ListItem>
                              <ListItem>
                                {msg('loginTotpDigits')}: <b>{totp.policy.digits}</b>
                              </ListItem>
                              {totp.policy.type === 'totp' ? (
                                <>
                                  <ListItem>
                                    {msg('loginTotpInterval')}: <b>{totp.policy.period}</b>
                                  </ListItem>
                                </>
                              ) : (
                                <ListItem>
                                  {msg('loginTotpCounter')}: <b>{totp.policy.initialCounter}</b>
                                </ListItem>
                              )}
                           </List>
                          </>
                        ) : (
                <>
                            <ListItem>
                              Open the application, click a ‘+’ icon to scan the QR code.
                            </ListItem>
                            <p>
                              <img
                                id="kc-totp-secret-qr-code"
                                src={`data:image/png;base64, ${totp.totpSecretQrCode}`}
                                alt="Figure: Barcode"
                              />
                            </p>
                            <Link href={totp.manualUrl} id="mode-manual" level="body-sm">
                              Unable to scan? Enter the key.
                            </Link>
                          </>
                        )}
                        <br />
                        <ListItem>
                          Enter the one-time password provided by the application and a device name
                          to help you manage your OTP (one-time password) devices.
                        </ListItem>
                      </List>
                    <form action={url.loginAction} id="kc-totp-settings-form" method="post">
                        <Stack
                          direction="column"
                          spacing={{ xs: 1 }}
                          className="account-form-header"
                        >
                          <div>
                            <FormControl
                              sx={{ width: { sm: '184px' } }}
                              error={messagesPerField.existsError('totp')}
                            >
                              <FormLabel>One-time password</FormLabel>
                              <Input type="text" id="totp" name="totp" autoComplete="off" />
                              <FormHelperText>
                                {messagesPerField.printIfExists(
                                  'totp',
                                  messagesPerField.get('totp')
                                )}
                              </FormHelperText>
                            </FormControl>
                            <input
                              type="hidden"
                              id="totpSecret"
                              name="totpSecret"
                              value={totp.totpSecret}
                            />
                            {mode && <input type="hidden" id="mode" value={mode} />}
                          </div>
                          <div>
                            <FormControl
                              sx={{ marginBottom: 3, width: { sm: '184px' } }}
                              error={messagesPerField.existsError('userLabel')}
                            >
                              <FormLabel sx={{ marginTop: '16px' }}>
                                {msg('loginTotpDeviceName')} (optional)
                              </FormLabel>
                              <Input
                                type="text"
                                id="userLabel"
                                name="userLabel"
                                autoComplete="off"
                              />
                              <FormHelperText>
                                {messagesPerField.printIfExists(
                                  'userLabel',
                                  messagesPerField.get('userLabel')
                                )}
                              </FormHelperText>
                            </FormControl>
                            <input
                              type="hidden"
                              id="totpSecret"
                              name="totpSecret"
                              value={totp.totpSecret}
                            />
                            {mode && <input type="hidden" id="mode" value={mode} />}
                          </div>
                          {isAppInitiatedAction ? (
                            <div id="kc-form-buttons" className="account-form-buttons">
                              <Stack direction={{ sm: 'row' }} spacing={2}>
                                <Button
                                  sx={{ width: { sm: '50%' }, marginBottom: { xs: 2 } }}
                                  type="submit"
                                  id="saveTOTPBtn"
                                  name="submitAction"
                                  value={msgStr('doSubmit')}
                                >
                                  Save changes
                                </Button>
                                <Button
                                  sx={{ width: { sm: '50%' } }}
                                  id="cancelTOTPBtn"
                                  type="submit"
                                  name="cancel-aia"
                                  value="true"
                                  variant="outlined"
                                >
                                  {msg('doCancel')}
                                </Button>
                              </Stack>
                            </div>
                          ) : (
                            <Button
                              fullWidth
                              type="submit"
                              id="saveTOTPBtn"
                              value={msgStr('doSubmit')}
                            >
                              {msgStr('doSubmit')}
                            </Button>
                          )}
                        </Stack>
                      </form>
                    </>    

                </Stack>
                </SheetLayout>
                {/**footer */}
                <Grid xs={12} md={8} textAlign={'center'} paddingTop={3}>
                  <Link href="https://hub.healthpathwayscommunity.org/terms" target="_blank">
                    Terms and conditions
                  </Link>
                </Grid>
            
                </LoginLayout>
            </>
        </Template>
    );
}
{/* new functionality - not including in the code for now

function LogoutOtherSessions(props: { kcClsx: KcClsx; i18n: I18n }) {
    const { kcClsx, i18n } = props;

    const { msg } = i18n;

    return (
        <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
            <div className={kcClsx("kcFormOptionsWrapperClass")}>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" id="logout-sessions" name="logout-sessions" value="on" defaultChecked={true} />
                        {msg("logoutOtherSessions")}
                    </label>
                </div>
            </div>
        </div>
    );
}
    */} 
