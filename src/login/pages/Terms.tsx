import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import LoginLayout from "./shared/loginLayout";
import { Box, Button, Card, Typography } from "@mui/joy";
import  "./termsStyles.css";

export default function Terms(props: PageProps<Extract<KcContext, { pageId: "terms.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  

    const { msg } = i18n;

    const { url } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={msg("termsTitle")}
        >
             <LoginLayout>
           
          
            <Box id="kc-terms-text" className="terms-container">
      <Card className="terms-card">
        <Box className="terms-content">
      
    
  
            <Typography level="h3">Streamliners HealthPathways Privacy Policy</Typography>
            <br/>
                <Typography className="section-text">Last Updated: 11 June 2024</Typography>
                <br/>

    
    <Typography level="h2" className="section-heading">Introduction</Typography>
    <Typography className="section-text">
        HealthPathways is provided on a platform developed and managed by Streamliners NZ Ltd (Streamliners).
        Streamliners works in partnership with local health systems to produce the content made available on HealthPathways,
        for use by clinicians. For the purposes of these terms and conditions, any reference to 'us' or 'we' refers to Streamliners.
    </Typography>
    <br/>
    <Typography className="section-text">
    At Streamliners, we prioritise the privacy and security of our users\' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use an individual HealthPathways account login to access our HealthPathways content or the tools, systems, and resources used to create, maintain, and share content.
    </Typography>
    <br/>
    <Typography level="h2" className="section-heading">1. Information we collect</Typography>
    <Typography className="section-text">a. Identifiable personal information: As part of the sign up and approval process for individual logins we collect the following personally identifiable information: first name, last name, email address, phone number, and professional registration number, if applicable.</Typography>
<br/>
    <Typography className="section-text">b. Non-identifiable usage data: Information about your HealthPathways usage is associated with your HealthPathways account. Usage data is aggregated and shared within the HealthPathways Community as non-identifiable data.</Typography>
    <br/>
<Typography className="section-text">c. No patient data: Streamliners does not collect or hold any personally identifiable information about individual patients, including patient records.</Typography>
<br/><Typography level="h2" className="section-heading">2. How we use your information</Typography>
<Typography className="section-text">a. Optimising your user experience: Streamliners may analyse usage data to optimise the user experience, making HealthPathways more intuitive and efficient. User profile information may also be used to personalise your HealthPathways experience to ensure that information and resources that are most appropriate to your role and needs are easily accessible.
</Typography><br/>
<Typography className="section-text">b. Optimising HealthPathways engagement and utility: Your data is crucial for ensuring that HealthPathways remains a valuable resource for clinicians. Your local HealthPathways programme team uses aggregated non-identifiable usage data to measure the utility of HealthPathways content to build trust and engagement with your HealthPathways site.
</Typography><br/>
<Typography className="section-text">c. Promoting HealthPathways Community learning: Aggregated non-identifiable usage data is available to the broader HealthPathways Community to ensure that insights and learning can be obtained and shared.
</Typography><br/>
<Typography level="h2" className="section-heading">3. Disclosure and access of your information</Typography>
<Typography className="section-text">a. Access and security: Selected Streamliners personnel and approved HealthPathways programme team administrators can access the personal information you supply when you register. They use this to approve or decline access to specific HealthPathways sites or other resources published through the Streamliners platform and must use multi-factor authentication on their HealthPathways account to access personal information.
</Typography>
<br/><Typography className="section-text">b. Aggregated usage data: Aggregated usage data is collected and stored in Amazon Web Services (AWS) servers in Sydney, Australia. Personnel responsible for delivering your local HealthPathways programme can only access non-identifiable usage data. For more information on AWS data privacy policies, refer to the [AWS Data Privacy Policy](https://aws.amazon.com/privacy/).
</Typography>
<br/><Typography className="section-text">c. Comparative analysis: Comparative non-indentifiable data about HealthPathways usage and user demographics may be shared with members of the global HealthPathways Community.
</Typography>
<br/><Typography className="section-text">d. Non-disclosure: Streamliners will not sell or supply personally identifiable data or supply data for performing individual clinician practice audits to any other party unless it is needed to comply with applicable law or respond to, investigate or participate in valid legal process and proceedings, including from law enforcement or government agencies. You would be advised at the time a data request is processed.
</Typography>
<br/>
<Typography level="h2" className="section-heading">4. Defining data principles for personalised logins</Typography>
<Typography className="section-text">a. Data collection and storage: Streamliners only retains data necessary to identify individual roles and to provide appropriate access to resources.
</Typography>
<br/><Typography className="section-text">b. Data anonymisation: For user privacy, when there\'s a risk of personally identifying a practitioner, we will either withhold or aggregate the data to ensure anonymity.
</Typography>
<br/><Typography className="section-text">c. User rights: As a HealthPathways user, you have the right to be forgotten, and can ask for your personal information to be deleted within 30 days. Requests can be made through [privacy@streamliners.co.nz](mailto:privacy@streamliners.co.nz).
</Typography>
<br/><Typography className="section-text">d. Data sharing and sovereignty: As a HealthPathways user, you have sole authority over your personally identifiable usage data. While you can share it if you wish, Streamliners will only supply your data externally in accordance with clause 3d above.
</Typography>
<br/><Typography className="section-text">e. Data retention: Streamliners will securely retain your personally identifiable information for up to three years after you leave the service unless you ask to be forgotten (see clause 4c). When this period expires, all personally identifiable information will be securely deleted from our systems.
</Typography>
<br/>
<Typography level="h2" className="section-heading">5. Rights and responsibilities</Typography>
<Typography className="section-text">a. Free text fields: Your profile and some parts of the HealthPathways Hub have free text fields. You are responsible for not entering information that could identify any other person.
</Typography>
<br/><Typography className="section-text">b. Complaints: If you have concerns about your data or privacy, please contact our data privacy officer at [privacy@streamliners.co.nz](mailto:privacy@streamliners.co.nz). You also have the right to lodge a complaint with your local Privacy or Information Commissioner's offices in your country of residence.
</Typography>
<br/><Typography className="section-text">c. Updates: It is essential to keep your personal data with us accurate. If any details change, please update your HealthPathways profile.
</Typography>

<br/>
<Typography level="h2" className="section-heading">6. Contact us</Typography>
<Typography className="section-text">For questions or concerns regarding this Privacy Policy, contact:
</Typography>
<br/><blockquote><strong>Streamliners NZ Ltd  4 Acton Street, Christchurch Central 8011, New Zealand, or  PO Box 33326, Barrington, Christchurch 8244, New Zealand  Email:</strong></blockquote>

<br/><Typography className="section-text">By using HealthPathways, you acknowledge and agree to the terms outlined in this Privacy Policy. We thank you for entrusting Streamliners with your information and remain dedicated to safeguarding your privacy.</Typography>
<br/>
<Typography level="h2" className="section-heading">Cookies</Typography>
<br/><Typography className="section-text">HealthPathways uses <a href="http://www.allaboutcookies.org/">cookies</a> to keep you logged in and optionally to remember your login details.
</Typography>
<br/><Typography className="section-text">We also use Google Analytics which uses cookies to track activity on HealthPathways sites. We do not track individual user activity. Tracking page use helps us to focus on pages that are more relevant to your needs.</Typography>
<br/><Typography className="section-text">For more information on Google's privacy policies, refer to <a href="https://policies.google.com/privacy">Google privacy and terms</a>.</Typography>
<br/><Typography className="section-text">Google provides tools to allow you to <a href="https://tools.google.com/dlpage/gaoptout">opt out of Google Analytics.</a>
</Typography>
<br/><Typography className="section-text">You can <a href="http://www.allaboutcookies.org/manage-cookies/clear-cookies-installed.html">remove cookies</a> from your web browser (this will end your current login session).</Typography>
<br/>
<Typography level="h2" className="section-heading">Terms of Use (Terms)</Typography>

The following site domains ("the websites or sites") are operated by Streamliners NZ Limited ("We") for the HealthPathways Community:
<ul className="section-text">
    <li>*.alliedhealthways.org</li>
    <li>*.alliedhealthpathways.org
    </li>
    <li>*.communityhealthpathways.org
    </li>
    <li>*.hospitalhealthpathways.org
    </li>
    <li>*.healthpathwayscommunity.org
    </li>
</ul>

<Typography>To contact us, please email <a href="mailto:privacy@streamliners.co.nz">privacy@streamliners.co.nz</a>.
</Typography>


<br/>
<Typography level="h2" className="section-heading">By registering an individual HealthPathways account or using HealthPathways sites you accept these Terms</Typography>

<Typography className="section-text">By using your HealthPathways account to access any one of our domains, you confirm that you accept the Terms of this policy and that you agree to comply with them. \"You\" and \"Your\" means any individual or entity accessing or using the site. If we have separately agreed that you are an agreed content contributor to HealthPathways (\"Contributor\"), you may have additional rights to use our site.</Typography>
<br/><Typography className="section-text">If you do not agree to these Terms, you must not register a HealthPathways account to use HealthPathways sites nor any content contributed to HealthPathways sites by any organisation that is a member of the HealthPathways Community.</Typography>
<br/>
<Typography className="section-text">We recommend that you print a copy of these Terms for future reference.</Typography><br/>
<Typography className="section-text">These Terms apply for our benefit and for the benefit of each organisation that is a member of the HealthPathways Community, and are enforceable by us and by any organisation that is a member of the HealthPathways Community and that is affected by your use of the HealthPathways sites. The disclaimers of liability set out in these Terms also apply for the benefit of each organisation that is a member of the HealthPathways Community in respect of any site on one of our domains that has been contributed to by that organisation.
</Typography><br/>
<Typography className="section-text">In the event of any conflict between these updated terms and conditions and any other legacy or local terms and conditions that may exist, these updated terms and conditions shall prevail and supersede.
</Typography><br/>
<Typography level="h2" className="section-heading">There are other terms that may apply to you</Typography>
<Typography className="section-text">These Terms include the terms in the Acceptable Use Policy, which covers the permitted uses and prohibited uses of HealthPathways sites. When using HealthPathways sites, you must comply with this Acceptable Use Policy.
</Typography><br/>
<Typography level="h2" className="section-heading">We may make changes to these Terms</Typography>
<Typography className="section-text">We amend these Terms from time to time. Every time you wish to use a site on our domains, please check these Terms to ensure you understand the Terms that apply at that time. These Terms were most recently updated on 19 March 2024.</Typography><br/>
<Typography level="h2" className="section-heading">We make regular changes to HealthPathways sites</Typography>
<Typography className="section-text">We update and change our sites frequently to reflect changes to our users' needs.</Typography><br/>
<Typography level="h2" className="section-heading">Availability of HealthPathways sites</Typography>
<Typography className="section-text">We do not guarantee that HealthPathways sites, or any content on them, will always be available or be uninterrupted. Although we make every effort to keep the HealthPathways sites up and running smoothly, due to the nature of the internet and the technology involved, we take no responsibility for and will not be liable for the HealthPathways sites being temporarily unavailable or for any loss or damage suffered as a result of the use of or access to, or inability to use or access HealthPathways sites. We may suspend or withdraw or restrict the availability of all or any part of HealthPathways sites for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.
</Typography>
<br/>
<Typography level="h2" className="section-heading">You must keep account details safe</Typography>
<Typography className="section-text">If you choose, or you are provided with, a user identification code, password, or any other piece of information as part of our security procedures, you must treat such information as confidential.
</Typography>
<br/>
<Typography className="section-text">We have the right to change the username or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion the credentials have become known to a party who has failed to comply with any of the provisions of these Terms.
</Typography>
<br/>
<Typography className="section-text">If you know or suspect that your username or password have been shared inappropriately, you must promptly notify us at <a href="mailto:privacy@streamliners.co.nz">privacy@streamliners.co.nz</a>.
</Typography>
<br/>
<Typography level="h2" className="section-heading">How you may use material on HealthPathways sites</Typography>
<Typography className="section-text">We are the owner or the licensee of all intellectual property rights in HealthPathways sites, and in the material published on it. Those works are protected by copyright and other intellectual property laws and treaties around the world. All such rights are reserved. You acquire no ownership of copyright or other intellectual property rights or proprietary interest in HealthPathways sites, and in the material published on it.
</Typography>
<br/>
<Typography className="section-text">You may print off one copy, and may download extracts, of any page(s) from HealthPathways sites that have been made available for your own use and you may draw the attention of others within your organisation to content posted on HealthPathways sites. Contributors may copy and paste extracts from any page(s) from HealthPathways sites solely for the purpose of preparing revised content for consideration for inclusion in HealthPathways.
</Typography>
<br/>
<Typography className="section-text">Except as expressly stated in these Terms, no content in HealthPathways sites may be reproduced or transmitted in any form or by any means, electronic, mechanical, recording, or otherwise, without our prior written approval. For information on obtaining permission for reproduction or transmission of the content please contact <a href="mailto:copyright@healthpathwayscommunity.org">copyright@healthpathwayscommunity.org</a>.
</Typography>
<br/>
<Typography level="h2" className="section-heading">No text or data mining, or web scraping</Typography>
<Typography className="section-text">You must not conduct, facilitate, authorise, or permit any text or data mining or web scraping for any purpose in relation to HealthPathways sites, or information featured on them, or any services provided via, or in relation to, HealthPathways sites. This includes using (or permitting, authorising, or attempting the use of):
</Typography>

<ol className="section-text">
    <li>Any "robot", "bot", "spider", "scraper", "AI tool", or other automated device, program, tool, algorithm, code, process, or methodology to access, obtain, copy, monitor, or republish any
    portion of the site or any data, content, information, or services accessed via the same.</li>
    <li>Any automated analytical technique aimed at analysing text and data in digital form to generate information which includes but is not limited to patterns, trends, and correlations.
    </li>
    <li>Any manual scraping, harvesting, or otherwise extracting data from HealthPathways sites without our express permission.
    </li>

</ol>
<br/>
<Typography className="section-text">The provisions in this clause should be treated as an express reservation of our rights in this regard. This clause will not apply insofar as (but only to the extent that) we are unable to exclude or limit text or data mining or web scraping activity by contract under the laws which are applicable to us.
</Typography>
<Typography className="section-text">Our status (and that of any identified contributors) as the authors of content on HealthPathways sites must always be acknowledged.
</Typography>
<br/>
<Typography className="section-text">If you print, copy, or download any part of HealthPathways sites in breach of these terms of use, your right to use HealthPathways sites will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.
</Typography>
<br/>
<Typography level="h3" className="section-heading">Disclaimer</Typography><br/>
<Typography level="h2" className="section-heading">HealthPathways sites are only intended for use by health professionals</Typography>
<Typography className="section-text">HealthPathways sites and the material on it, including but not limited to, all content, articles, text, graphics, images, pages, and publications (material) is designed and offered for use by health professionals practising within their vocational scope, and is for general information purposes only. HealthPathways sites are not for access or use by consumers, patients, or people who are not health professionals.
</Typography>
<br/>
<Typography className="section-text">Please be aware that HealthPathways sites may contain health or medically-related materials, including information that some people may find offensive.
</Typography>
<br/>
<Typography level="h2" className="section-heading">The information on HealthPathways sites does not replace clinical decision-making</Typography>
<Typography className="section-text">The material is for use by health professionals as a guide only and does not replace clinical decision-making. The material is not designed to be, and is not a substitute for, formal clinical guidelines, educational texts, or specific medical or related advice or opinion, and should not be taken as such. We are not responsible to you, or anyone else, for any loss suffered in connection with the use of HealthPathways sites or the material on it.
</Typography>
<br/>
<Typography className="section-text">Drug information is included in HealthPathways as a guide only. Before prescribing, apply clinical judgement and check all information with a formulary for complete guidance on indications, contraindications, dosing, and drug interactions.
</Typography>
<br/>
<Typography className="section-text">Pages that have not yet been localised for this region's HealthPathways site are clearly marked as such. These pages may contain useful information, but please use your judgement as to the appropriateness of this information in your region.
</Typography>
<br/>
<Typography className="section-text">Although we make reasonable efforts to update the information on HealthPathways sites, we make no representations, warranties, or guarantees of any kind, express or implied about the completeness, accuracy, reliability, suitability, or availability with respect to HealthPathways sites or the information, products, services, or related graphics contained on HealthPathways sites for any purpose. Any reliance you place on such material is therefore strictly at your own risk.
</Typography>
<br/>
<Typography className="section-text">While the editorial process is designed to ensure accuracy, all information should be verified. If you notice any incorrect information, please use the feedback button provided.
</Typography>
<br/>
<Typography className="section-text">Information about health providers on HealthPathways sites does not constitute a recommendation or endorsement of their services. The use of any listed providers is undertaken at the user's own risk. The list of providers on HealthPathways sites may not be comprehensive. You may suggest a change to the provider information on HealthPathways sites through the feedback button.
</Typography>
<br/>
<Typography level="h2" className="section-heading">We are not responsible for websites we link to</Typography>
<Typography className="section-text">Where HealthPathways sites contains links to other external sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.
</Typography>
<br/>
<Typography className="section-text">We have no control over the contents of those sites or resources.
</Typography>
<br/>
<Typography level="h2" className="section-heading">Our use of third-party content</Typography>
<Typography className="section-text">Streamliners and the HealthPathways Community have made every effort to contact copyright holders of content that originated outside the HealthPathways Community. We would be grateful to receive any new information which comes to light regarding any item we have included and apologise for any inadvertent omissions. Please send any copyright queries to <a href="mailto:copyright@healthpathwayscommunity.org">copyright@healthpathwayscommunity.org</a>.If we or our clinical editors have unintentionally overlooked copyright, we will be pleased to negotiate the relevant fees and permissions, or if necessary, take down the relevant item from HealthPathways sites.
</Typography>
<br/>
<Typography level="h2" className="section-heading">Our responsibility for loss or damage suffered by you</Typography>
<Typography className="section-text">We exclude all implied conditions, warranties, representations, or other terms that may apply to HealthPathways sites or any content on it. We accept no liability for any false, inaccurate, inappropriate, or incomplete information presented on the HealthPathways sites. We do not accept any liability for any injury, loss, or damage incurred by use of or reliance on the information provided on HealthPathways sites.
</Typography>
<br/>
<Typography className="section-text">We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:
</Typography>

<ul>
  <li>Use of, or inability to use, HealthPathways sites</li>
  <li>Use of, or reliance on, any content displayed on HealthPathways sites</li>
</ul>
<br/>
<Typography className="section-text">In particular, we will not be liable for:</Typography>
    <ul>
    <li>loss of profits, sales, business, or revenue</li>
    <li>business interruption</li>
    <li>loss of anticipated savings</li>
    <li>loss of business opportunity, goodwill, or reputation</li>
    <li>any indirect or consequential loss or damage.</li>
    </ul>

<Typography  className="section-text">We do not guarantee that HealthPathways sites will be free from bugs or viruses and are not responsible for any viruses that impact HealthPathways sites or your computer.
</Typography>
<br/>
<Typography className="section-text">You are responsible for configuring your information technology, computer programs, and platform to access HealthPathways sites. You should use your own virus protection software.
</Typography><br/>
<Typography className="section-text">You must not misuse HealthPathways sites by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful. You must not attempt to gain unauthorised access to HealthPathways sites, the server on which HealthPathways sites is stored, or any server, computer, or database connected to HealthPathways sites. You must not attack HealthPathways sites and sites under our listed domains via a denial-of-service attack or a distributed denial-of-service attack. In the event of such a breach, your right to use HealthPathways sites will cease immediately.
</Typography>
<br/>
<Typography level="h2" className="section-heading">Rules about linking to HealthPathways sites</Typography>

<Typography className="section-text">You may link to any page on HealthPathways sites, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.
</Typography>
<Typography className="section-text">You must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part where none exists.
</Typography>
<br/>
<Typography className="section-text">HealthPathways sites must not be framed on any other website without permission.
</Typography>
<br/>
<Typography className="section-text">We reserve the right to withdraw linking permission without notice.
</Typography>
<Typography className="section-text">The website in which you are linking must comply in all respects with the content standards set out in our Acceptable Use Policy.
</Typography>
<br/>
<Typography className="section-text">If you wish to link to or make any use of content on HealthPathways sites other than that set out above, please contact <a href="mailto:copyright@healthpathwayscommunity.org">copyright@healthpathwayscommunity.org</a>.
</Typography>
<br/>
<Typography level="h2" className="section-heading">Which country's laws apply to any disputes?</Typography>
<Typography level="h1" className="section-text">For the Base HealthPathways site and any sites that relate to an
organisation in NZ or in any other country not listed below:</Typography><br/>
<Typography className="section-text">These Terms, their subject matter, and their formation (and any non-contractual disputes or claims) are governed by New Zealand law. We both agree to the non-exclusive jurisdiction of the courts of New Zealand.
</Typography>
<br/>
<Typography className="section-text">If there is any inconsistency between these Terms and any other arrangement with us, these Terms prevail unless otherwise agreed by us in writing.
</Typography>

<br/>
<Typography level="h1" className="section-text">For sites that relate to an organisation in Australia:</Typography><br/>
<Typography className="section-text">These Terms, their subject matter and their formation (and any non-contractual disputes or claims) are governed by the law of your State or Territory. We both agree to submit to the non-exclusive jurisdiction of the courts of your State or Territory and the courts of New Zealand.
</Typography><br/>
<Typography level="h1" className="section-text">For sites that relate to an organisation in the UK (England, Scotland, Wales, and Northern Ireland):</Typography><br/>
<Typography className="section-text">These Terms, their subject matter, and their formation (and any non-contractual disputes or claims) are governed by English law. We both agree to submit to the non-exclusive jurisdiction of the courts of England and Wales and of the courts of New Zealand, provided that for sites that relate to an organisation in Northern Ireland proceedings may also be brought in Northern Ireland and for sites that relate to an organisation in Scotland proceedings may also be brought in Scotland.
</Typography><br/>
<Typography level="h1" className="section-text">For sites that relate to an organisation in Canada:</Typography><br/>
<Typography className="section-text">These Terms, their subject matter, and their formation (and any non-contractual disputes or claims) are governed by the laws of Canada. We both agree to submit to the non-exclusive jurisdiction of the courts of Canada and the courts of New Zealand.
</Typography><br/>
<Typography level="h1" className="section-text">For sites that relate to an organisation in the Republic of Ireland:</Typography><br/>
<Typography className="section-text">These Terms, their subject matter, and their formation (and any non-contractual disputes or claims) are governed by the laws of the Republic of Ireland. We both agree to submit to the non-exclusive jurisdiction of the courts of the Republic of Ireland and the courts of New Zealand.
</Typography><br/>
<Typography level="h2" className="section-heading">Our trademarks are registered</Typography>
<Typography className="section-text">Streamliners is a New Zealand registered trademark of Streamliners NZ Ltd. HealthPathways and HealthPathways Community are the registered trademarks of Streamliners NZ Ltd in New Zealand, Australia, the United Kingdom, and the EU . You are not permitted to use them without our approval, unless they are part of material you are using as permitted under How you may use material on HealthPathways sites.
</Typography><br/>

<Typography level="h2" className="section-heading">Sharing of content with HealthPathways Community</Typography>

<Typography className="section-text">The international HealthPathways Community is a collective of all organisations implementing HealthPathways. The Community develops HealthPathways collaboratively and shares the contributions among members. Clinical editors, technical writers, and subject-matter experts can modify and use other contributors' work to prepare HealthPathways guidelines, including Base HealthPathways. Sharing helps to spread clinical guidance and new evidence into practice faster.
</Typography>
<br/>
<Typography level="h3" className="section-heading">Acceptable Use Policy</Typography>
<br/>
<Typography className="section-text">Please read this Acceptable Use Policy carefully before using HealthPathways sites.
</Typography><br/>
<Typography level="h2" className="section-heading">What's in this Acceptable Use Policy?</Typography>

<Typography className="section-text">This Acceptable Use Policy sets out the content standards that apply when you make contact with other users on HealthPathways sites, link to HealthPathways sites, or interact with HealthPathways sites in any other way.
</Typography><br/>
<Typography level="h2" className="section-heading">We may make changes to this Acceptable Use Policy</Typography>

<Typography className="section-text">We amend the Acceptable Use Policy from time to time. Every time you wish to use a website on our domains, please check to ensure that you understand the Acceptable Use Policy that applies at that time.
</Typography><br/>
<Typography level="h2" className="section-heading">Prohibited uses</Typography>

<Typography className="section-text">You may use HealthPathways sites only for lawful purposes. You may not use HealthPathways sites:
</Typography>
<ul>
  <li>In any way that breaches any applicable local, national, or international law or regulation</li>
  <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect</li>
  <li>For the purpose of harming or attempting to harm minors in any way</li>
  <li>To send, knowingly receive, upload, download, use, or re-use any material which does not comply with our content standards</li>
  <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam)</li>
  <li>To knowingly transmit any data, send, or upload any material that contains viruses, trojans, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware</li>
</ul>

<Typography className="section-text">You also agree:</Typography>
<ul>
  <li>Not to reproduce, duplicate, copy, or re-sell any part of HealthPathways sites in contravention of the provisions of these Terms and Conditions.</li>
  <li>Not to access without authority, interfere with, damage, or disrupt:
    <ul>
      <li>Any part of HealthPathways sites</li>
      <li>Any equipment or network on which HealthPathways sites are stored</li>
      <li>Any software used in the provision of HealthPathways sites</li>
      <li>Any equipment or network or software owned or used by any third party</li>
    </ul>
  </li>
</ul>


<Typography level="h2" className="section-heading">Interactive services</Typography>

<Typography className="section-text">We may from time to time provide interactive services on HealthPathways sites, including, without limitation:</Typography>
<ul>
  <li>Calculators</li>
  <li>Chat rooms</li>
  <li>Bulletin boards and forums</li>
  <li>Other interactive services</li>
</ul>
<Typography className="section-text">Where we do provide any interactive service, we will provide clear information to you about the kind of service offered, if it is moderated, and what form of moderation is used (including whether it is human or technical).
</Typography>
<br/>
<Typography className="section-text">We will do our best to assess any possible risks for users from third parties when they use any interactive service provided on HealthPathways sites, and we will decide in each case whether it is appropriate to use moderation of the relevant service (including what kind of moderation to use) in the light of those risks. However, we are under no obligation to oversee, monitor, or moderate any interactive service we provide on HealthPathways sites, and we expressly exclude our liability for any loss or damage arising from the use of any interactive service by a user in contravention of our content standards, whether the service is moderated or not.
</Typography>
<br/>
<Typography className="section-text">Where we do moderate an interactive service, we will normally provide you with a means of contacting the moderator, should a concern or difficulty arise.
</Typography>
<br/>
<Typography level="h2" className="section-heading">Content standards (Standards)</Typography>
<br/>

<Typography className="section-text">These Standards apply to any and all material which you contribute to HealthPathways sites (Contribution), and to any interactive services associated with it.
</Typography>
<br/>
<Typography className="section-text">The Standards must be complied with in spirit as well as to the letter. The Standards apply to each part of any Contribution as well as to its whole.
</Typography>

<Typography className="section-text">We will determine, in its discretion, whether a Contribution breaches these Standards.
</Typography>
<br/>
<Typography className="section-text">A Contribution must:
</Typography>
<ul>
  <li>Be accurate (where it states facts)</li>
  <li>Be genuinely held (where it states opinions)</li>
  <li>Comply with the law applicable in New Zealand, Australia, the United Kingdom, Canada, the Republic of Ireland, and in any country from which it is posted</li>
</ul>

<Typography className="section-text">A Contribution must not:
</Typography>
<ul>
  <li>Be defamatory of any person</li>
  <li>Be obscene, offensive, hateful, or inflammatory</li>
  <li>Promote sexually explicit material</li>
  <li>Promote violence</li>
  <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age</li>
  <li>Infringe any copyright, database right, or trademark of any other person</li>
  <li>Be likely to deceive any person</li>
  <li>Breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence</li>
  <li>Promote any illegal activity</li>
  <li>Be in contempt of court</li>
  <li>Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience, or needless anxiety</li>
  <li>Be likely to harass, upset, embarrass, alarm, or annoy any other person</li>
  <li>Impersonate any person, or misrepresent your identity or affiliation with any person</li>
  <li>Give the impression that the Contribution emanates from Streamliners NZ Ltd, if this is not the case</li>
  <li>Advocate, promote, incite any party to commit, or assist any unlawful or criminal act such as (by way of example only) copyright infringement or computer misuse</li>
  <li>Contain a statement which you know or believe, or have reasonable grounds for believing, that members of the public to whom the statement is, or is to be, published are likely to understand as a direct or indirect encouragement or other inducement to the commission, preparation, or instigation of acts of terrorism</li>
  <li>Contain any advertising or promote any services or web links to other sites</li>
</ul>

<br/>

<Typography level="h2" className="section-heading">Breach of this Acceptable Use Policy</Typography>


<Typography className="section-text">When we consider that a breach of this Acceptable Use Policy has occurred, we may take such action as we deem appropriate.
</Typography>
<br/>
<Typography className="section-text">Failure to comply with this Acceptable Use Policy constitutes a material breach of these Terms and Conditions upon which you are permitted to use HealthPathways sites, and may result in our taking all or any of the following actions:
</Typography>

<ul>
  <li>Immediate, temporary, or permanent withdrawal of your right to use HealthPathways sites</li>
  <li>Issue of a warning to you</li>
  <li>Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach</li>
  <li>Further legal action against you</li>
  <li>Disclosure of such information to law enforcement authorities as we reasonably feel is necessary or as required by law</li>
</ul>

<Typography className="section-text">We exclude our liability for all action we may take in response to breaches of this Acceptable Use Policy. The actions we may take are not limited to those described above, and we may take any other action we reasonably deem appropriate.
</Typography>
<br/>
</Box>
</Card>
</Box>
            <form className="form-actions" action={url.loginAction} method="POST">
            <Box sx={{ 
    display: 'flex', 
    gap: '16px', 
    justifyContent: 'center', 
  }} >
            <Button
                          fullWidth
                          sx={{ color: 'background.level1', marginTop: '16px' }}
                          name="accept"
                    id="kc-accept"
                    type="submit"
                    value="accept"
                          
                        >Accept</Button> 
                        <Button
                          fullWidth
                          sx={{ color: 'background.level1', marginTop: '16px' }}
                          name="cancel"
                          id="kc-decline"
                          type="submit"
                          value="decline"
                          
                        >Decline</Button>   
                </Box>
            </form>
            <div className="clearfix" />
       
            </LoginLayout>
        </Template>
    );
}
