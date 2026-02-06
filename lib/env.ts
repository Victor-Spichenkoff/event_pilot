export const Env = {
    isDev: process.env.NODE_ENV=="development",
    isProd: process.env.NODE_ENV=="production",
    isDevOrTest: process.env.NODE_ENV=="development" || process.env.NODE_ENV=="test",
    apiUrl: process.env.API_URL
}


const variablesNames = [
    "NODE_ENV",
    "API_URL",
]


export const checkRequiredEnvVariables = () => {
    variablesNames.forEach((variableName) => {
        if(!process.env[variableName])
            throw new Error(`Variable: ${variableName} is required`)
    })
}
