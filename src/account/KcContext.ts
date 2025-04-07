/* eslint-disable @typescript-eslint/ban-types */
import type { ExtendKcContext } from "keycloakify/account";
import type { KcEnvName, ThemeName } from "../kc.gen";
import type { AccountSchema } from "../HealthPathwaysTypeSchema"; // Import your Account type here

export type KcContextExtension = {
    themeName: ThemeName;
    properties: Record<KcEnvName, string> & {};
};

export type KcContextExtensionPerPage = {
    "account.ftl": {
      account: AccountSchema;
    };
    
  };
export type KcContext = ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>;
