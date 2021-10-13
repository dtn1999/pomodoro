import { Config } from "../types/types"

export const defaultConfig:Config = {
    break: 5,
    pomodoro: 25,
    color: "#F26D6D",
  };

export const loadUserAppConfig = ()=>{
    const storedConfig = localStorage.getItem("@pomodoro");
    if( !storedConfig ){
        return defaultConfig;
    }
    return JSON.parse(storedConfig) as Config;
}

export const saveUserAppConfig = (userConfig:Config)=>{
    console.log("save to localStorage" , userConfig)

    if(userConfig){
        console.log("save to localStorage" , userConfig)
        localStorage.setItem("@pomodoro", JSON.stringify(userConfig));
    }
}
