const saveUsertoLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}
const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user")
}
const getUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user
}

const localStorageService = {
    saveUsertoLocalStorage,
    removeUserFromLocalStorage,
    getUserFromLocalStorage
}
export default localStorageService