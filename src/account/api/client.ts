import {getOidc} from "../oidc";
import type {Attribute} from "keycloakify/login/KcContext/KcContext";
const authenticatedFetch: typeof fetch = async(path, options) => {
    const oidc = await getOidc();
    return fetch(`${oidc.params.issuerUri}${path}`,{
        ...options,
        headers:{
            ...options?.headers,
            Authorization: `Bearer ${oidc.getTokens().accessToken}`,
            "Content-Type":"application/json"
        }
    });
};

export type UserProfile = {
    id:string;
    username:string;
    lastName:string;
    email:string;
    attributes:Record<string, string[]>;
    userProfileMetadata: {
        attributes: Attribute[];
        groups:{
            name:string;
            displayHeader:string;
            displayDescription:string;

        }
    }
};

export async function getUserProfile(): Promise<UserProfile>{
   return authenticatedFetch("/account/?userProfileMetadata=true").then(response=>response.json());
}

