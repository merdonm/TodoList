const apiRequest = async ( URL = null , Options = null ,errMsg = null)=>{
try {
    const response = await fetch(URL,Options)
    if(!response.ok) throw Error ("Please reload the app")

} catch (error) {
    errMsg = error.Message
}
finally{
    return errMsg
}
}
export default apiRequest