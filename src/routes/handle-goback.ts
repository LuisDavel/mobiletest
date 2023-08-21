export function handleGoBack({ canGoBack, goBack }: any) {
    if(canGoBack()) return console.log(canGoBack())

    return goBack()
}