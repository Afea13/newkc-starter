import { useState } from "react";
import type { PageProps } from "keycloakify/account/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import PageTitle from "./PageTitle";
import { Button, FormControl, FormLabel, Input, Stack } from "@mui/joy";

export default function Password(props: PageProps<Extract<KcContext, { pageId: "password.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template } = props;

    const { url, password, account, stateChecker } = kcContext;

    const { msgStr, msg } = i18n;

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [newPasswordConfirmError, setNewPasswordConfirmError] = useState("");
    const [hasNewPasswordBlurred, setHasNewPasswordBlurred] = useState(false);
    const [hasNewPasswordConfirmBlurred, setHasNewPasswordConfirmBlurred] = useState(false);

    const checkNewPassword = (newPassword: string) => {
        if (!password.passwordSet) {
            return;
        }

        if (newPassword === currentPassword) {
            setNewPasswordError(msgStr("newPasswordSameAsOld"));
        } else {
            setNewPasswordError("");
        }
    };

    const checkNewPasswordConfirm = (newPasswordConfirm: string) => {
        if (newPasswordConfirm === "") {
            return;
        }

        if (newPassword !== newPasswordConfirm) {
            setNewPasswordConfirmError(msgStr("passwordConfirmNotMatch"));
        } else {
            setNewPasswordConfirmError("");
        }
    };

    return (
        <Template
            {...{
                kcContext: {
                    ...kcContext,
                    message: (() => {
                        if (newPasswordError !== "") {
                            return {
                                type: "error",
                                summary: newPasswordError
                            };
                        }

                        if (newPasswordConfirmError !== "") {
                            return {
                                type: "error",
                                summary: newPasswordConfirmError
                            };
                        }

                        return kcContext.message;
                    })()
                },
                i18n,
                doUseDefaultCss
            }}
            active="password"
        >
            {/* <div className="row">
                <div className="col-md-10">
                    <h2>{msg("changePasswordHtmlTitle")}</h2>
                </div>
                <div className="col-md-2 subtitle">
                    <span className="subtitle">{msg("allFieldsRequired")}</span>
                </div>
            </div> */}
<>
            <form action={url.passwordUrl} className="form-horizontal" method="post">
            <PageTitle title="Update password" />
            <Stack direction="column" spacing={{ xs: 1 }} className="account-form-header">
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={account.username ?? ""}
                    autoComplete="username"
                    readOnly
                    style={{ display: "none" }}
                />

                {password.passwordSet && (
                    <FormControl sx={{ width: '100%' }}>
                    <FormLabel> {msg('password')}</FormLabel>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      autoFocus
                      autoComplete="off"
                      fullWidth={true}
                      value={currentPassword}
                      onChange={event => setCurrentPassword(event.target.value)}
                    />
                  </FormControl>
                    // <div className="form-group">
                    //     <div className="col-sm-2 col-md-2">
                    //         <label htmlFor="password" className="control-label">
                    //             {msg("password")}
                    //         </label>
                    //     </div>
                    //     <div className="col-sm-10 col-md-10">
                    //         <input
                    //             type="password"
                    //             className="form-control"
                    //             id="password"
                    //             name="password"
                    //             autoFocus
                    //             autoComplete="current-password"
                    //             value={currentPassword}
                    //             onChange={event => setCurrentPassword(event.target.value)}
                    //         />
                    //     </div>
                    // </div>
                )}

                <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />

                {/* <div className="form-group">
                    <div className="col-sm-2 col-md-2">
                        <label htmlFor="password-new" className="control-label">
                            {msg("passwordNew")}
                        </label>
                    </div>
                    <div className="col-sm-10 col-md-10">
                        <input
                            type="password"
                            className="form-control"
                            id="password-new"
                            name="password-new"
                            autoComplete="new-password"
                            value={newPassword}
                            onChange={event => {
                                const newPassword = event.target.value;

                                setNewPassword(newPassword);
                                if (hasNewPasswordBlurred) {
                                    checkNewPassword(newPassword);
                                }
                            }}
                            onBlur={() => {
                                setHasNewPasswordBlurred(true);
                                checkNewPassword(newPassword);
                            }}
                        />
                    </div>
                </div> */}
 <FormControl sx={{ width: '100%' }}>
              <FormLabel sx={{ marginTop: '16px' }}> New password</FormLabel>
              <Input
                type="password"
                id="password-new"
                name="password-new"
                autoComplete="new-password"
                fullWidth={true}
                value={newPassword}
                            onChange={event => {
                                const newPassword = event.target.value;

                                setNewPassword(newPassword);
                                if (hasNewPasswordBlurred) {
                                    checkNewPassword(newPassword);
                                }
                            }}
                            onBlur={() => {
                                setHasNewPasswordBlurred(true);
                                checkNewPassword(newPassword);
                            }}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <FormLabel sx={{ marginTop: '16px' }}> Confirm new password</FormLabel>
              <Input
                type="password"
                id="password-confirm"
                name="password-confirm"
                autoComplete="new-password"
                fullWidth={true}
                value={newPasswordConfirm}
                            onChange={event => {
                                const newPasswordConfirm = event.target.value;

                                setNewPasswordConfirm(newPasswordConfirm);
                                if (hasNewPasswordConfirmBlurred) {
                                    checkNewPasswordConfirm(newPasswordConfirm);
                                }
                            }}
                            onBlur={() => {
                                setHasNewPasswordConfirmBlurred(true);
                                checkNewPasswordConfirm(newPasswordConfirm);
                            }}
              />
            </FormControl>
                {/* <div className="form-group">
                    <div className="col-sm-2 col-md-2">
                        <label htmlFor="password-confirm" className="control-label two-lines">
                            {msg("passwordConfirm")}
                        </label>
                    </div>

                    <div className="col-sm-10 col-md-10">
                        <input
                            type="password"
                            className="form-control"
                            id="password-confirm"
                            name="password-confirm"
                            autoComplete="new-password"
                            value={newPasswordConfirm}
                            onChange={event => {
                                const newPasswordConfirm = event.target.value;

                                setNewPasswordConfirm(newPasswordConfirm);
                                if (hasNewPasswordConfirmBlurred) {
                                    checkNewPasswordConfirm(newPasswordConfirm);
                                }
                            }}
                            onBlur={() => {
                                setHasNewPasswordConfirmBlurred(true);
                                checkNewPasswordConfirm(newPasswordConfirm);
                            }}
                        />
                    </div>
                </div> */}

                {/* <div className="form-group">
                    <div id="kc-form-buttons" className="col-md-offset-2 col-md-10 submit">
                        <div>
                            <button
                                disabled={newPasswordError !== "" || newPasswordConfirmError !== ""}
                                type="submit"
                                className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonLargeClass")}
                                name="submitAction"
                                value="Save"
                            >
                                {msg("doSave")}
                            </button>
                        </div>
                    </div>
                </div> */}
                  <div id="kc-form-buttons" className="account-form-buttons">
              <Button
                sx={{ color: 'background.level1', marginTop: '16px' }}
                type="submit"
                name="submitAction"
                value="Save"
              >
                Save changes
              </Button>
            </div>
          </Stack>
            </form>
            </>
        </Template>
    );
}
