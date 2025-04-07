import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import SheetLayout from "./shared/SheetLayout";
import LoginLayout from "./shared/loginLayout";
import { Button, Stack, Typography } from "@mui/joy";

export default function Error(props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { message, client } = kcContext;

    const { msg } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={msg("errorTitle")}
        >
              <LoginLayout>
           <SheetLayout>
            <div id="kc-error-message">
            <Stack direction="column" spacing={1}>
                    <Typography level="title-sm" textColor="text.tertiary">
                      Error occured : {message.summary}
                    </Typography>
                    <br />
                    <div>
                     {client !== undefined && client.baseUrl !== undefined && ( <div id="kc-form-buttons">
                        <Button
                          id="backToApplication"
                          component="a"
                          fullWidth
                          href={client.baseUrl}
                        >
                          Proceed
                        </Button>
                      </div>)}
                    </div>
                  </Stack>
                
            </div>
            </SheetLayout>

            </LoginLayout>
        </Template>
    );
}
