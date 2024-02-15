export const setUserInLocalStorageSignup = (firstname, lastname, email, password) => {
    const newUser = {
        firstname,
        lastname,
        email,
        password
    }
    localStorage.setItem("SignupUser", JSON.stringify(newUser))
}

export const removeUserFromLocalStorageSignup = () => {
    localStorage.removeItem("SignupUser")
}

export const setUserInLocalStorageLogin = (LoginUser)=>{
    localStorage.setItem("LoginUser", JSON.stringify(LoginUser))
}

export const removeUserFromLocalStorageLogin = () => {
    localStorage.removeItem("LoginUser")
}