export function resolveMediaPath() {
    // console.log("Current Env: ", process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development')
        return '/public/assets/'
    else if (process.env.NODE_ENV === 'production')
        return '/media/root/'
}

export function resolveAppName() {
    let splitURL = document.URL.split('/');
    // console.log("App Name in splits: ", splitURL)
    let appName = splitURL[4];
    if (["", undefined].includes(appName))
        appName = "JNJ_Development"
    // console.log("Current App Name: ", appName)
    return appName
}