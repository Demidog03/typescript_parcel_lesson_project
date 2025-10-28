import AuthService from "./service/AuthService";
import MongoDBAuthRepository from "./repositories/MongoDBAuthRepository";
import ToastService from "./service/ToastService";

const loginEmailInput = document.getElementById('loginEmailInput') as HTMLInputElement;
const loginPasswordInput = document.getElementById('loginPasswordInput') as HTMLInputElement;
const loginSubmitBtn = document.getElementById('loginSubmitBtn') as HTMLButtonElement;

const registerNameInput = document.getElementById('registerNameInput') as HTMLInputElement;
const registerEmailInput = document.getElementById('registerEmailInput') as HTMLInputElement;
const registerPasswordInput = document.getElementById('registerPasswordInput') as HTMLInputElement;
const registerSubmitBtn = document.getElementById('registerSubmitBtn') as HTMLButtonElement;

const toastService = new ToastService()
const authRepository = new MongoDBAuthRepository()
const authService = new AuthService(authRepository, toastService)

if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()

        const email = loginEmailInput.value
        const password = loginPasswordInput.value

        void authService.login({ email, password })
    })
}

if (registerSubmitBtn) {
    registerSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()

        const name = registerNameInput.value
        const email = registerEmailInput.value
        const password = registerPasswordInput.value

        void authService.register({ name, email, password })
    })
}
