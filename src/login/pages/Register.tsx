import { useEffect, useState } from "react";
import type { LazyOrNot } from "keycloakify/tools/LazyOrNot";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { UserProfileFormFieldsProps } from "keycloakify/login/UserProfileFormFieldsProps";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import './Register.css';
import LoginLayout from "./shared/loginLayout";
import SheetLayout from "./shared/SheetLayout";
import {  Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Stack,
    Grid,
    Button,
    Typography,
    Link,
    Checkbox,
     Select,
    Option, } from "@mui/joy";

type RegisterProps = PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n> & {
    UserProfileFormFields: LazyOrNot<(props: UserProfileFormFieldsProps) => JSX.Element>;
    doMakeUserConfirmPassword: boolean;
};

export default function Register(props: RegisterProps) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const {
      //messageHeader,
      url,
      messagesPerField,
      // recaptchaRequired,
      // recaptchaVisible,
      // recaptchaSiteKey,
      // recaptchaAction,
      termsAcceptanceRequired,

      realm,
      passwordRequired
  } = kcContext;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { register } = kcContext as any;
    const { msg, msgStr } = i18n;

    //const [isFormSubmittable, setIsFormSubmittable] = useState(true);
    const [areTermsAccepted, setAreTermsAccepted] = useState(false);

    // Create state variables for error messages
   const [firstNameError, setFirstNameError] = useState('');
   const [lastNameError, setLastNameError] = useState('');
   const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
   const [passwordError, setPaswordError] = useState('');
   const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  //const [termsAcceptedError, setTermsAcceptedError] = useState('');
  const [professionalRoleError, setProfessionalRoleError] = useState('');
  const [professionalRoleOtherError, setProfessionalRoleOtherError] = useState('');
  const [organisationError, setOrganisationError] = useState('');
  const [postCode, setPostCode] = useState('');
  const [registrationNumberError, setRegistrationNumberError] = useState('');
  const [registeringBodyError, setRegisteringBodyError] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const professionalRoles= [
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
  ]


  // const [isDisabled, setIsDisabled] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const isDisabled = false;
    const isLoading = false;

  // Update the error message when the form data is received
  useEffect(() => {
    setFirstNameError(messagesPerField.get('firstName'));
    setLastNameError(messagesPerField.get('lastName'));
    setUsernameError(messagesPerField.get('username'));
     setEmailError(messagesPerField.get('email'));
     setPaswordError(messagesPerField.get('password'));
     setPasswordConfirmError(messagesPerField.get('password-confirm'));
     //setTermsAcceptedError(messagesPerField.get('termsAccepted'));
    setPhoneError(messagesPerField.get('phone'));
    setProfessionalRoleError(messagesPerField.get('professionalRole'));
    setOrganisationError(messagesPerField.get('organisation'));
    setPostCode(messagesPerField.get('postCode'));
    setRegistrationNumberError(messagesPerField.get('registrationNumber'));
    setRegisteringBodyError(messagesPerField.get('registeringBody'));
  }, [messagesPerField]);


const maxWidth=596;

const handleChange = (_: React.SyntheticEvent | null, newValue: string | null) => {
    setProfessionalRoleError('');
    setSelectedRole(`${newValue}`);
  };
  
    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={msg("registerTitle")}
            displayMessage={messagesPerField.exists("global")}
            displayRequiredFields={false}
        >
             <LoginLayout>
             <Grid xs={12} sx={{ maxWidth: maxWidth+'px' }}>
             <SheetLayout maxWidth={maxWidth}>
             <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
             <Grid xs={12}>
             <form id="kc-register-form" className={kcClsx("kcFormClass")} action={url.registrationAction} method="post">
             <Stack spacing={2}>
                        <Typography level="h3">Register</Typography>
                        <Typography level="body-md">
                          Already have an account?&nbsp;
                          <Link href={url.loginUrl}>Sign in</Link>.
                        </Typography>

                        <Typography level="body-md" textColor={'text.primary'}>
                          HealthPathways access is limited to registered clinicians and other
                          approved users. All fields are required and may be used to verify you meet
                          the access criteria.
                        </Typography>
           
                
              
                  <Typography level="title-lg">Personal details</Typography>
                  

                  <FormControl error={!!firstNameError}>
                          <FormLabel htmlFor="firstName" className="formLabel required">
                            First name
                          </FormLabel>
                          <Input
                            type="text"
                            name="firstName"
                            id="firstName"
                            defaultValue={register?.formData?.firstName ?? ''}
                            onChange={() => setFirstNameError('')} // Clear error on change
                          />
                          {/* We have to hard code the error message for first name and last name as the field error is
                              using the error-user-attribute-required value in the new version */}

                         <FormHelperText>
                            {!!firstNameError && `Enter your first names.`}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={!!lastNameError}>
                          <FormLabel htmlFor="lastName" className="formLabel required">
                            Last name
                          </FormLabel>
                          <Input
                            type="text"
                            name="lastName"
                            id="lastName"
                            defaultValue={register?.formData?.lastName ?? ''}
                            onChange={() => setLastNameError('')} // Clear error on change
                          />
                          <FormHelperText>
                            {!!lastNameError && `Enter your last name.`}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={!!emailError}>
                          <FormLabel htmlFor="email" className="formLabel required">
                            Email
                          </FormLabel>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue={register?.formData?.email ?? ''}
                            onChange={() => setEmailError('')} // Clear error on change
                            autoComplete="email"
                          />
                          <FormHelperText>
                            {emailError&&'Enter email address.' || 'Enter your own email address.'}
                          </FormHelperText>
                        </FormControl>
                        <FormControl error={!!phoneError}>
                          <FormLabel htmlFor="phone" className="formLabel required">
                            Phone number
                          </FormLabel>
                          <Input
                            type="text"
                            name="phone"
                            id="phone"
                            defaultValue={register.formData.phone ?? ''}
                            onChange={() => setPhoneError('')} // Clear error on change
                          />
                          <FormHelperText>
                            {phoneError
                              ? `Enter your phone number to contact you and confirm your details if required.`
                              : `Phone number to contact you and confirm your details if required.`}
                          </FormHelperText>
                        </FormControl>
                         {/* Professional information===================================*/}
                          <Typography level="title-lg">Professional details</Typography>

                         <FormControl error={!!organisationError}>
                          <FormLabel htmlFor="organisation" className="formLabel required">
                            Primary practice or organisation
                          </FormLabel>
                          <Input
                            type="text"
                            name="organisation"
                            id="organisation"
                            defaultValue={register?.formData?.organisation ?? ''}
                            onChange={() => setOrganisationError('')} // Clear error on change
                          />

                          <FormHelperText>
                            {organisationError
                              && `Enter the name of the practice or organisation where you will spend the most time using a HealthPathways site. If you're a locum, enter 'Locum'. If not applicable, enter ‘N/A’.`
                              || `Name the practice or organisation where you will spend the most time using a HealthPathways site. If you're a locum, enter 'Locum'. If not applicable, enter ‘N/A’.`}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={!!postCode}>
                          <FormLabel htmlFor="postCode" className="formLabel required">
                            Postcode
                          </FormLabel>
                          <Input
                            type="text"
                            name="postCode"
                            id="postCode"
                            defaultValue={register?.formData?.postCode ?? ''}
                            onChange={() => setPostCode('')} // Clear error on change
                          />

                          <FormHelperText>
                            {postCode
                              && `Postcode of the practice or organisation entered above. If not applicable, enter ‘N/A’.`
                              || `Enter the postcode of the practice or organisation entered above. If not applicable, enter ‘N/A’.`}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={!!professionalRoleError}>
                          <FormLabel sx={{ marginTop: '16px' }} className="formLabel required">
                            {' '}
                            Professional role
                          </FormLabel>
                          <Select
                            id="professionalRole"
                            name="professionalRole"
                            defaultValue={register?.formData?.professionalRole ?? ''}
                            onChange={handleChange}
                          >
                            <Option value="" disabled>
                              Select...
                            </Option>
                            {professionalRoles.map((option, index) => (
                              <Option key={index} value={option}>
                                {option}
                              </Option>
                            ))}
                          </Select>
                          <FormHelperText>
                            {professionalRoleError &&
                              'Select your professional role within the primary practice or organisation.'}
                          </FormHelperText>
                        </FormControl>

                        {/* Update professional role field if role specification is required */}
                        {selectedRole.includes('please specify') || professionalRoleOtherError ? (
                          <FormControl
                            error={
                              selectedRole.includes('please specify') &&
                              !!professionalRoleOtherError
                            }
                          >
                            <FormLabel className="formLabel required">Please specify</FormLabel>
                            <Input
                              type="text"
                              name="professionalRoleOther"
                              id="professionalRoleOther"
                              defaultValue={register?.formData?.professionalRoleOther ?? ''}
                              onChange={() => setProfessionalRoleOtherError('')} // Clear error on change
                            />
                          </FormControl>
                        ) : (
                          <></>
                        )}

                        <FormControl error={!!registrationNumberError}>
                          <FormLabel htmlFor="registrationNumber" className="formLabel required">
                            Professional registration number
                          </FormLabel>
                          <Input
                            type="text"
                            name="registrationNumber"
                            id="registrationNumber"
                            defaultValue={register?.formData?.registrationNumber ?? ''}
                            onChange={() => setRegistrationNumberError('')} // Clear error on change
                          />

                          <FormHelperText>
                            {registrationNumberError
                              && `Enter your professional registration number. This may be used to verify you meet the access criteria. If not applicable, enter ‘N/A’.`
                              || `This may be used to verify you meet the access criteria. If not applicable, enter ‘N/A’.`}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={!!registeringBodyError}>
                          <FormLabel htmlFor="registeringBody" className="formLabel required">
                            Professional registering body
                          </FormLabel>
                          <Input
                            type="text"
                            name="registeringBody"
                            id="registeringBody"
                            defaultValue={register?.formData?.registeringBody ?? ''}
                            onChange={() => setRegisteringBodyError('')} // Clear error on change
                          />
                          <FormHelperText>
                            {registeringBodyError
                              && `Enter your professional registering body. This may be used to verify you meet the access criteria. If not applicable, enter ‘N/A’ If not applicable, enter ‘N/A’.`
                              || `This may be used to verify you meet the access criteria. If not applicable, enter ‘N/A’`}
                          </FormHelperText>
                        </FormControl> 

                        {/* Account Details ===================================== */}
                        <Typography level="title-lg">Account details</Typography>
                        {!realm.registrationEmailAsUsername && (
                          <FormControl error={!!usernameError}>
                            <FormLabel htmlFor="username" className="formLabel required">
                              Username
                            </FormLabel>

                            <Input
                              type="text"
                              id="username"
                              name="username"
                              defaultValue={register?.formData?.username ?? ''}
                              onChange={() => setUsernameError('')} // Clear error on change
                              autoComplete="username"
                            />

                            <FormHelperText>
                              {usernameError || 'Can be the same as your email.'}
                            </FormHelperText>
                          </FormControl>
                        )}

                        {passwordRequired && (
                          <>
                            <FormControl error={!!passwordError}>
                              <FormLabel htmlFor="password" className="formLabel required">
                                Password
                              </FormLabel>
                              <Input
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="new-password"
                                onChange={() => setPaswordError('')} // Clear error on change
                              />
                              <FormHelperText>
                                {passwordError && 'Enter password.' || 'Must be at least 8 characters.'}
                              </FormHelperText>
                            </FormControl>
                            <FormControl error={!!passwordConfirmError}>
                              <FormLabel htmlFor="password-confirm" className="formLabel required">
                                Confirm password
                              </FormLabel>
                              <Input
                                type="password"
                                id="password-confirm"
                                name="password-confirm"
                                onChange={() => setPasswordConfirmError('')} // Clear error on change
                              />
                              <FormHelperText>{passwordConfirmError}</FormHelperText>
                            </FormControl>
                          </>
                        )}
                      </Stack>
                      {termsAcceptanceRequired && (
                    <TermsAcceptance
                        i18n={i18n}
                        kcClsx={kcClsx}
                        messagesPerField={messagesPerField}
                        areTermsAccepted={areTermsAccepted}
                        onAreTermsAcceptedValueChange={setAreTermsAccepted}
                    />
                )}	
             {/* <div style={{ marginTop: '16px' }}>
                        <FormControl error={!!termsAcceptedError}>
                          <Stack direction={'row'} spacing={1}>
                            <Checkbox
                              variant="outlined"
                              size="md"
                              id="termsAccepted"
                              name="termsAccepted"
                              onChange={() => setTermsAcceptedError('')} // Clear error on change
                            />
                            <Typography level="body-md">
                              I accept the&nbsp;
                              <Link
                                href="https://hub.healthpathwayscommunity.org/terms"
                                target="_blank"
                              >
                                terms and conditions
                              </Link>
                              .
                            </Typography>
                          </Stack>
                          <FormHelperText>{termsAcceptedError}</FormHelperText>
                        </FormControl>
                      </div>  */}
             <div id="kc-form-buttons">
                        <Button
                          fullWidth
                          sx={{ color: 'background.level1', marginTop: '16px' }}
                          type="submit"
                          value={msgStr('doRegister')}
                          loading={isLoading}
                          disabled={isDisabled}
                        >
                          Register
                        </Button>
                      </div> 
                      <br />


                      
                
                
           
                
                     
       </form></Grid></Stack>
            </SheetLayout>
            </Grid>
            </LoginLayout>
        </Template>
    );
}

function TermsAcceptance(props: {
    i18n: I18n;
    kcClsx: KcClsx;
    messagesPerField: Pick<KcContext["messagesPerField"], "existsError" | "get">;
    areTermsAccepted: boolean;
    onAreTermsAcceptedValueChange: (areTermsAccepted: boolean) => void;
}) {
    const {   messagesPerField, areTermsAccepted, onAreTermsAcceptedValueChange } = props;

   

    return (
        <>
        <div style={{ marginTop: '16px' }}>
                        <FormControl error={messagesPerField.existsError("termsAccepted")}>
                          <Stack direction={'row'} spacing={1}>
                            <Checkbox
                              variant="outlined"
                              size="md"
                              id="termsAccepted"
                              name="termsAccepted"
                              checked={areTermsAccepted}
                              onChange={e => onAreTermsAcceptedValueChange(e.target.checked)}
                              aria-invalid={messagesPerField.existsError("termsAccepted")}
                            />
                            <Typography level="body-md">
                              I accept the&nbsp;
                              <Link
                                href="https://hub.healthpathwayscommunity.org/terms"
                                target="_blank"
                              >
                                terms and conditions
                              </Link>
                              .
                            </Typography>
                          </Stack>
                          <FormHelperText>{messagesPerField.get("termsAccepted")}</FormHelperText>
                        </FormControl>
                      </div> 
                      
      
            {/* <div className="form-group">
                <div className={kcClsx("kcLabelWrapperClass")}>
                    <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        className={kcClsx("kcCheckboxInputClass")}
                        checked={areTermsAccepted}
                        onChange={e => onAreTermsAcceptedValueChange(e.target.checked)}
                        aria-invalid={messagesPerField.existsError("termsAccepted")}
                    />
                    <label htmlFor="termsAccepted" className={kcClsx("kcLabelClass")}>
                        {msg("acceptTerms")}
                    </label>
                </div>
                {messagesPerField.existsError("termsAccepted") && (
                    <div className={kcClsx("kcLabelWrapperClass")}>
                        <span
                            id="input-error-terms-accepted"
                            className={kcClsx("kcInputErrorMessageClass")}
                            aria-live="polite"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(messagesPerField.get("termsAccepted"))
                            }}
                        />
                    </div>
                )}
            </div> */}
        </>
    );
}
