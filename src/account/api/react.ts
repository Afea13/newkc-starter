import {useEffect,useState} from "react";
import {getUserProfile, type UserProfile} from "./client";
export function useUserProfile(){
    const [userProfile,setUserProfile]=useState<UserProfile | undefined>(undefined);
    useEffect(()=>{
        getUserProfile().then(setUserProfile)
    },[]);
    return {userProfile};
}
