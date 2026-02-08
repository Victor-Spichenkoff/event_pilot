import axios, {AxiosRequestConfig, AxiosResponse, isAxiosError} from "axios";
import {toast} from "sonner";
import {getFirstErrorMessage} from "@/utils/formatters/getFirstErrorMessage";
import {Env} from "@/lib/env";

const baseUrl = Env.apiUrl

export const handleApiCallWithCallBack = async <TReturn>
(apiCall: () => Promise<AxiosResponse<TReturn>>): Promise<GenericApiResponse<TReturn>> => {

    try {
        const res = await apiCall()

        return {
            isError: false,
            response: res.data
        }
    } catch (e: any) {
        console.log(e.status)
        if (isAxiosError(e) && (e.status == 401)) {
            if (isAxiosError(e) && (e.status == 401 || e.code == "UNAUTHORIZED"))
                return {
                    isError: true,
                    errorMessage: `Please, log in to access it`
                }
        }

        // tratar o erro conforme o backend
        if (isAxiosError(e) && typeof e.response?.data.title == "string")
            return {
                isError: true,
                // errorMessage: `${e.response?.data.message}`
                errorMessage: `${getFirstErrorMessage(e.response?.data)}`
            }


        if (isAxiosError(e) && (e.code === 'ECONNABORTED' || e.message === 'Network Error' || !e.response))// made the request, but don't receive response
            return {
                isError: true,
                errorMessage: `Can't connect to server`
            }


        return {
            isError: true,
            errorMessage: "Unexpected error!"
        }
    }
}


// essa reaproveita e usa o com callBack (auto-updated)
export const handleApiCall = async <TReturn, TBody = any>
({
     endpoint,
     method = "get",
     body,
     fullUrl,
     config = {},
     token,
     noAxiosCache = false
 }: IHandleApiCall<TBody>): Promise<GenericApiResponse<TReturn>> => {

    if (token || noAxiosCache) {
        if (!config?.headers)
            config.headers = {}

        if (token)
            config.headers.Authorization = `Bearer ${token}`
        if (noAxiosCache)
            config.headers['Cache-Control'] = 'no-cache'
    }


    //simula uma request usando essas infos
    const query = async () => {
        console.log("BASE URL")
        console.log(baseUrl)
        if (method == "get" || (method == "delete" && !body)) {// he doesn't use body
            if (fullUrl)
                return await axios[method](fullUrl, config)
            else {
                return await axios[method](baseUrl + endpoint, config)
            }
        }
        // POST..., usam 3 args
        if (fullUrl)
            return await axios[method](fullUrl, body, config)
        else {
            return await axios[method](baseUrl + endpoint, body, config)
        }
    }

    return await handleApiCallWithCallBack(query)
}


// Retorna tudo normal, mas já dá um toast de erro
export const handleApiCallAndShowError = async <TReturn, TBody = any>
({endpoint, method = "get", body, fullUrl}: IHandleApiCall): Promise<GenericApiResponse<TReturn>> => {

    // pode escolher qual das fn vai usar
    const res = await handleApiCall<TReturn, TBody>({
        endpoint, method, body, fullUrl
    })

    if (res.isError) {
        toast.error(res.errorMessage)

        return res
    }

    return res
}




export type GenericApiResponse<T> = {
    isError: false,
    response: T

} | {
    isError: true,
    errorMessage: string
}

// parametro de config para a api
export type IHandleApiCall<TBody = any> = {
    fullUrl?: string
    endpoint: `/${string}`
    method?: "get" | "post" | "put" | "delete" | "patch"
    body?: TBody,// para poder ter auto complete nele se quiser
    config?: AxiosRequestConfig
    token?: string
    cacheId?: string | number,
    noAxiosCache?: boolean
}
