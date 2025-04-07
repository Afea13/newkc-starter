import { useEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { getKcClsx } from "keycloakify/account/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/account/Template.useInitialize";
import type { TemplateProps } from "keycloakify/account/TemplateProps";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import { MdArrowForwardIos } from 'react-icons/md';
import classNames from 'classnames';
import Banner from "./pages/Banner";
import { useMediaQuery } from '@mui/material';
import theme from '../theme';

import AlertMessage from "../login/pages/shared/AlertMessage";
import {
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemContent,
    Stack,
    Box,
    Typography,
  } from '@mui/joy';

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, active, classes, children } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg } = i18n;

    const { url, features, message } = kcContext;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        document.title =  'HealthPathways Account';
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: clsx("admin-console", "user", kcClsx("kcBodyClass"))
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <>      <div className="main-stack-container">
              <Banner url={url.getLogoutUrl()} />
              <br />
              <Box paddingY={3}>
          <AlertMessage message={message} />
        </Box>
        <Grid
          id="kc-form-wrapper"
          container
          sx={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: { xs: 2, sm: 3 },
            paddingX: 2,
          }}
          xs={12}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 8 }}
            sx={{ maxWidth: '1000px', flexGrow: 1 }}
            className={classNames('account-edit-container', {
              'account-edit-container-mobile': isMobile,
            })}
          >
            <Grid xs={12} md={3}>
              <List size="lg" sx={{ marginBottom: 5, paddingTop: 0 }} className="leftmenu">
                <ListItem className="account-left-menu">
                  <ListItemButton disabled={false} selected={active === 'account'}>
                    <ListItemContent>
                      <a href={url.accountUrl}>
                        <Typography  level={active === 'account' ? 'account-selected' : 'body-md'}>
                          {msg('account')} details
                        </Typography>
                      </a>
                    </ListItemContent>
                    {active === 'account' && <MdArrowForwardIos />}
                  </ListItemButton>
                  {features.passwordUpdateSupported && (
                    <ListItemButton disabled={false} selected={active === 'password'}>
                      <ListItemContent>
                        <a href={url.passwordUrl}>
                          <Typography level={active === 'password' ? 'account-selected' : 'body-md'}>
                            {msg('password')}
                          </Typography>
                        </a>
                      </ListItemContent>
                      {active === 'password' && <MdArrowForwardIos />}
                    </ListItemButton>
                  )}
                  <ListItemButton disabled={false} selected={active === 'totp'}>
                    <ListItemContent>
                      <a href={url.totpUrl}>
                        <Typography level={active === 'totp' ? 'account-selected' : 'body-md'}>
                          {msg('authenticator')}
                        </Typography>
                      </a>
                    </ListItemContent>
                    {active === 'totp' && <MdArrowForwardIos />}
                  </ListItemButton>

                  <ListItemButton disabled={false} selected={active === 'sessions'}>
                    <ListItemContent>
                      <a href={url.sessionsUrl}>
                        <Typography level={active === 'sessions' ? 'account-selected' : 'body-md'}>
                          {msg('sessions')}
                        </Typography>
                      </a>
                    </ListItemContent>
                    {active === 'sessions' && <MdArrowForwardIos />}
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Grid xs={12} md={9} className="account-edit-form">
              {children}
            </Grid>
          </Stack>
        </Grid>
           
            </div>
        </>
    );
}
