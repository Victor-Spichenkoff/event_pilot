export const publicRoutes = [
    "/auto-login",
]

export const protectedRoutes = [
    "/home",
    "/me",
    "/adm",
    "/leaderboard",
    "/match",
    "/history",
]

export const authRoutes = [
    "/login",
    "/signup",
    "/auto-login"
]

export const getLoginPathnameWithPreviousUrl = (previous?: string) => {
    if(!previous)
        return  "/login?loginError=true"

    return `/login?loginError=true&previous=${previous}`
}

export const HOME_URL = "/"

export const imageSuffix = [".jpg", ".png"]

export const isImagePath = (path: string) => {
    for(let suffix of imageSuffix)
        if(path.endsWith(suffix))
            return true
    return false
}
