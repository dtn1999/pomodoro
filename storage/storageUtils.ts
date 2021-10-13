import { Config } from "../types/types"

const STORAGE_KEY = "@pomodoro";

export const defaultConfig:Config = {
    break: 5,
    pomodoro: 25,
    color: "#F26D6D",
  };

export const loadUserAppConfig = ()=>{
    const storedConfig = localStorage.getItem(STORAGE_KEY);
    if( !storedConfig ){
        console.log("here !! ")
        return defaultConfig;
    }
    return JSON.parse(storedConfig) as Config;
}

export const saveUserAppConfig = (userConfig:Config)=>{
    if(userConfig){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userConfig));
    }
}
