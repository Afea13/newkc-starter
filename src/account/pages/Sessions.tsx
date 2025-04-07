import type { PageProps } from "keycloakify/account/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button, Stack, Table } from "@mui/joy";
import PageTitle from "./PageTitle";

export default function Sessions(props: PageProps<Extract<KcContext, { pageId: "sessions.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { url, stateChecker, sessions } = kcContext;

    const { msg } = i18n;
    const formatDateString = (dateString: string): string => {
        const date = new Date(dateString);
    
        // Padding function to ensure all parts are two digits
        const pad = (number: number) => number.toString().padStart(2, '0');
    
        // Extract parts of the date
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1); // getMonth() is zero-based
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());
    
        // Format the date as YYYY-MM-DD HH:MM:SS
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };
    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} active="sessions">
            <Stack direction="column" spacing={{ xs: 2 }} className="account-form-header">
            <PageTitle title="Sessions" />
            <div className="session-table-responsive ">
            <Table aria-label="table sizes" size={'md'}  >
              <thead className="session-table-header">
                <tr>
                  <th style={{ width: '40%' }}>{msg('ip')}</th>
                  <th>{msg('started')}</th>
                  <th>Last access</th>
                  <th>{msg('expires')}</th>
                </tr>
              </thead>
           

                <tbody role="rowgroup">
                    {sessions.sessions.map((session, index: number) => (
                        <tr key={index}>
                            <td>{session.ipAddress}</td>
                            <td>{formatDateString(session?.started)}</td>
                            <td>{formatDateString(session?.lastAccess)}</td>
                            <td>{formatDateString(session?.expires)}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                </div>

            <form action={url.sessionsUrl} method="post">
                <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
                <div className="account-form-buttons">
              <Button
                id="logout-all-sessions"
                sx={{ color: 'background.level1', marginTop: '16px' }}
                type="submit"
              >
               Sign out of all sessions
              </Button>
            </div>
       
            </form>
            </Stack>
        </Template>
    );
}
