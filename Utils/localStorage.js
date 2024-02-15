export const setUserInLocalStorageSignup = (firstname, lastname, email, password) => {
    const newUser = {
        firstname,
        lastname,
        email,
        password
    }
    localStorage.setItem("SignupUser", JSON.stringify(newUser))
}