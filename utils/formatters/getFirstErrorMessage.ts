type InputError = {
    field: string,
    errors: string[]
}

type ApiErrorResponse =
    {
        status: number,
        title: string,
        detail: string,
        instance: string,
        stackTrace: null | string,
        errors?: null
    } | {
        status: number,
        title: string,
        detail: null,
        instance: string,
        stackTrace: null | string,
        errors: InputError[]
}


export const getFirstErrorMessage = (apiErrorResponse: ApiErrorResponse) => {
    if(apiErrorResponse.detail || apiErrorResponse.errors == null)
        return apiErrorResponse.detail

    return apiErrorResponse.errors[0].errors[0]
}
