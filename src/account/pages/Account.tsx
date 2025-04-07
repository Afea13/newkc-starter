import type { PageProps } from "keycloakify/account/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
 
import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
  Box,
  Select,
  Option,
  Typography,
} from '@mui/joy';
  import PageTitle from './PageTitle';
import { useEffect, useState } from "react";

export default function Account(props: PageProps<Extract<KcContext, { pageId: "account.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
    const { url, realm, messagesPerField, stateChecker, account } = kcContext;

    const { msg } = i18n;
    const options = [
      'General practitioner',
      'Practice manager',
      'Academic',
      'Administrator/manager',
      'Allied health professional (please specify)',
      'Dental practitioner',
      'Health student',
      'Medical specialist (please specify)',
      'Midwife',
      'Nurse',
      'Nurse practitioner',
      'Paramedic',
      'Pharmacist',
      'Resident/non-consultant hospital doctor',
      'Other (please specify)',
    ];
    const [isOtherRole, setIsOtherRole] = useState(false);
    const [professionalRoleOther, setProfessionalRoleOther] = useState(
      account.attributes.professionalRoleOther || ''
    );
  
    const handleChange = (_: React.SyntheticEvent | null, newValue: string | null) => {
      if (newValue?.includes('please specify')) {
        setIsOtherRole(true);
      } else {
        setIsOtherRole(false);
        setProfessionalRoleOther('');
      }
    };
  
    useEffect(() => {
      if (account.attributes.professionalRole?.includes('please specify')) {
        setIsOtherRole(true);
      }
    }, [account.attributes.professionalRole]);

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} active="account">
          
         
          <form action={url.accountUrl} className="form-horizontal" method="post">
                <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
                <Stack direction="column" spacing={{ xs: 1 }} className="account-form-header">
                <PageTitle title="Edit account details" />
                <br/>
                    
            {/* Professional information===================================*/}

            <Typography level="h1">Personal information</Typography>
            <FormControl sx={{ width: '100%' }} error={messagesPerField.existsError('email')}>
              <FormLabel sx={{ marginTop: '8px' }}> {msg('email')}</FormLabel>
              <Input
                type="text"
                id="email"
                name="email"
                autoFocus
                defaultValue={account.email ?? ''}
                fullWidth={true}
              />
              <FormHelperText>
                {messagesPerField.printIfExists('email', 'Email address is not valid')}
              </FormHelperText>
            </FormControl>

            <FormControl sx={{ width: '100%' }} error={messagesPerField.existsError('firstName')}>
              <FormLabel sx={{ marginTop: '16px' }}> {msg('firstName')}</FormLabel>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={account.firstName ?? ''}
                fullWidth={true}
              />
              <FormHelperText>
                {messagesPerField.printIfExists('firstName', 'Invalid first name')}
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ width: '100%' }} error={messagesPerField.existsError('lastName')}>
              <FormLabel sx={{ marginTop: '16px' }}> {msg('lastName')}</FormLabel>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                defaultValue={account.lastName ?? ''}
                fullWidth={true}
              />
              <FormHelperText>
                {messagesPerField.printIfExists('lastName', 'Invalid last name')}
              </FormHelperText>
            </FormControl>
            {!realm.registrationEmailAsUsername && (
              <FormControl sx={{ width: '100%' }}>
                <FormLabel sx={{ marginTop: '16px' }}>{msg('username')}</FormLabel>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  disabled={!realm.editUsernameAllowed}
                  defaultValue={account.username ?? ''}
                  fullWidth={true}
                />
              </FormControl>
            )}
            <FormControl sx={{ width: '100%' }}  error={messagesPerField.existsError('phone')}>
              <FormLabel sx={{ marginTop: '16px' }}>Phone number</FormLabel>
              <Input
                type="text"
                id="phone"
                name="phone"
                defaultValue={account?.attributes?.phone ?? ''}
                fullWidth={true}
              />
               <FormHelperText>
                {messagesPerField.printIfExists('phone', 'phone required')}
              </FormHelperText>
            </FormControl>
            <Typography level="h2" paddingTop={4}>
              Professional information
            </Typography>
            <FormControl sx={{ width: '100%' }}>
              <FormLabel sx={{ marginTop: '8px' }}> Organisation</FormLabel>
              <Input
                type="text"
                id="organisation"
                name="organisation"
                defaultValue={account?.attributes?.organisation ?? ''}
                fullWidth={true}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <FormLabel sx={{ marginTop: '16px' }}> Postcode</FormLabel>
              <Input
                type="text"
                id="postCode"
                name="postCode"
                defaultValue={account?.attributes?.postCode ?? ''}
                fullWidth={true}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <FormLabel sx={{ marginTop: '16px' }}> Professional role</FormLabel>
              <Select
                id="professionalRole"
                name="professionalRole"
                defaultValue={account.attributes.professionalRole ?? ''}
                onChange={handleChange}
              >
                {options.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </FormControl>
            {isOtherRole ? (
              <FormControl sx={{ width: '100%' }}>
                <FormLabel sx={{ marginTop: '16px' }}>Please specify</FormLabel>
                <Input
                  type="text"
                  id="professionalRoleOther"
                  name="professionalRoleOther"
                  value={professionalRoleOther}
                  onChange={(e) => setProfessionalRoleOther(e.target.value)}
                  fullWidth={true}
                />
              </FormControl>
            ) : (
              <>
                {' '}
                <input
                  type="hidden"
                  id="professionalRoleOtherHidden"
                  name="professionalRoleOther"
                  value={professionalRoleOther}
                />
              </>
            )}
            <FormControl sx={{ width: '100%' }}>
              <FormLabel sx={{ marginTop: '16px' }}>Professional registration number</FormLabel>
              <Input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                defaultValue={account?.attributes?.registrationNumber ?? ''}
                fullWidth={true}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <FormLabel sx={{ marginTop: '16px' }}>Professional registering body</FormLabel>
              <Input
                type="text"
                id="registeringBody"
                name="registeringBody"
                defaultValue={account?.attributes?.registeringBody ?? ''}
                fullWidth={true}
              />
            </FormControl>

  <div >

</div> 

              
              
               
                <Stack
              id="kc-form-buttons"
              flexDirection={'row'}
              className="account-form-buttons"
              sx={{ justifyContent: { xs: 'space-between', sm: 'flex-start' } }}
            >
              <Button
                type="submit"
                name="submitAction"
                value="Save"
                sx={{ marginRight: { xs: 1, sm: 3 }, minWidth: { xs: '45%', sm: 'unset' } }}
              >
                Save changes
              </Button>
              <Button
                type="submit"
                name="submitAction"
                value="Cancel"
                variant="outlined"
                sx={{ minWidth: { xs: '45%', sm: 'unset' } }}
              >
                {msg('doCancel')}
              </Button>
            </Stack>
            <Divider />
            <Box width={'100%'} sx={{ textAlign: { xs: 'center', sm: 'left' } }} className="terms-and-conditions" >
              <Link href="https://hub.healthpathwayscommunity.org/terms" target="_blank">
                Terms and conditions
              </Link>
            </Box>
            </Stack>
            </form>
        
        </Template>
    );
}
