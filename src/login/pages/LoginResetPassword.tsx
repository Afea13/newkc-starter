
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Typography,
  Link,
  Alert,
} from '@mui/joy';
import { Info } from '@mui/icons-material';
import theme from "../../theme"
import LoginLayout from "./shared/loginLayout";
import SheetLayout from "./shared/SheetLayout";

export default function LoginResetPassword(props: PageProps<Extract<KcContext, { pageId: "login-reset-password.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;


    const { url, realm, auth } = kcContext;

    const { msg } = i18n;

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayMessage={false}
            headerNode={msg("emailForgotTitle")}
            infoNode={msg("emailInstruction")}
        >
              <LoginLayout>
              <SheetLayout>
              <div className="login-update-password-center-box">
    
                <Stack direction="column" spacing={1.5}>
                  <div id="kc-form-options">
                    <Link
                      href={url.loginUrl}
                      sx={{
                        color: '#2B6FA6',
                        textDecoration: 'underline',
                        fontWeight: 400,
                        fontSize: '16px',
                      }}
                    >
                      Back to sign-in
                    </Link>
                  </div>

                  <Typography level="h3">Forgot your password?</Typography>

                  <Typography level="body-md">
                    Enter your username or email and we will send you instructions to reset your
                    password.
                  </Typography>
                  <Alert startDecorator={<Info sx={{ color: theme.palette.primary.solidBg }} />}>
                    <Typography level="body-md">
                      Please note, you can only reset your password if you have an individual
                      account.
                    </Typography>
                  </Alert>
            <form id="kc-reset-password-form"  action={url.loginAction} method="post">
            <FormControl>
                      <FormLabel htmlFor="username" className="forget-password-username-text">
                        {!realm.loginWithEmailAllowed
                          ? msg('username')
                          : !realm.registrationEmailAsUsername
                            ? msg('usernameOrEmail')
                            : msg('email')}
                      </FormLabel>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        defaultValue={
                          auth !== undefined && auth.showUsername
                            ? auth.attemptedUsername
                            : undefined
                        }
                        size="md"
                      />
                    </FormControl>

                    <div id="kc-form-buttons">
                      <Button fullWidth sx={{ marginTop: 3 }} type="submit" size="lg">
                        Reset password
                      </Button>
                    </div>
            </form>
            
                </Stack>
            </div>
            
            </SheetLayout>
            </LoginLayout>
        </Template>
    );
}