export const CheckValidData=(email , password)=>{
    const isemailvalid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isemailvalid) return "this email is not valid";
    if(!ispasswordvalid) return "This password is not valid" ;
    


    return "Email and Password Valid" ;
}