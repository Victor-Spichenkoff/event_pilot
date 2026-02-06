import {localStorageVariables} from "@/storage/localStorage/localStorageVariables";

export const storeLastUsedTime = (newTime: number) => {
    localStorage.setItem(localStorageVariables.lastStart, newTime.toString())
}

export const getStoreLastUsedTime = () => {
    const timeStorage = localStorage.getItem(localStorageVariables.lastStart)

    if(!timeStorage)
        return null

    return Number(timeStorage)
}

export const clearStorageLastUsedTime = () => storeLastUsedTime(0)
