import { useEffect } from "react";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {

        documentTitle,
 
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const {  msgStr } = i18n;

    const {  auth, url } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", kcContext.realm.displayName);
    }, []);


   

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }
  
    return (
        <div>
           
 
      
          
            <div >
           
             
                <div id="kc-content">
                    <div id="kc-content-wrapper">
                       
                        {children}
                        {auth !== undefined && auth.showTryAnotherWayLink && (
                            <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                <div className={kcClsx("kcFormGroupClass")}>
                                    <input type="hidden" name="tryAnotherWay" value="on" />
                                    {/*
                                        //leaving this chunk of code , if we ever need in future :-
                                         <a
                                        href="#"
                                        id="try-another-way"
                                        onClick={() => {
                                            document.forms["kc-select-try-another-way-form" as never].submit();
                                            return false;
                                        }}
                                    >
                                        {msg("doTryAnotherWay")}
                                    </a> */}
                                </div>
                            </form>
                        )}
                        
                    </div>
                </div>
              
            </div>
         
      
        </div>
    );
}
