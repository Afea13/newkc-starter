import type { PageProps } from "keycloakify/login/pages/PageProps";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button, Stack,  Typography } from '@mui/joy';
import LoginLayout from "./shared/loginLayout";
import SheetLayout from "./shared/SheetLayout";


export default function Info(props: PageProps<Extract<KcContext, { pageId: "info.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

     const { advancedMsgStr } = i18n;

    const { messageHeader, message, requiredActions, skipLink, pageRedirectUri, actionUri, client } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={
                <span
                    dangerouslySetInnerHTML={{
                        __html: kcSanitize(messageHeader ?? message.summary)
                    }}
                />
            }
        >
          
          <LoginLayout>
           <SheetLayout>
            <div id="kc-info-message">
            <Stack direction="column" spacing={1}>
                    <Typography level="title-sm" textColor="text.tertiary">
                     Information:  {message.summary}
                    </Typography>
                    {requiredActions !== undefined && (
                      <b>
                        {requiredActions
                          .map((requiredAction) =>
                            advancedMsgStr(`requiredAction.${requiredAction}` as const)
                          )
                          .join(',')}
                      </b>
                    )}
                    <br />
                    <div id="kc-form-buttons">
                      {!skipLink && pageRedirectUri !== undefined ? (
                        <Button
                          id="backToApplication"
                          component="a"
                          fullWidth
                          href={pageRedirectUri}
                        >
                          Proceed
                        </Button>
                      ) : actionUri !== undefined ? (
                        <Button id="backToApplication" component="a" fullWidth href={actionUri}>
                          Proceed
                        </Button>
                      ) : (
                        client.baseUrl !== undefined && (
                          <Button
                            id="backToApplication"
                            component="a"
                            fullWidth
                            href={client.baseUrl}
                          >
                            Proceed
                          </Button>
                        )
                      )}
                    </div>
                  </Stack>
            </div>
            </SheetLayout>
            </LoginLayout>
        </Template>
    );
}
