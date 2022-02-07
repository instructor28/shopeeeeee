
//Việc 1 lấy được các element cần thiết
//việc 2 bắt sự kiện nhấn hay gọi là click
//việc 3 thêm class hoặc style vào

/* Lấy elements */

var MoldalWarp = document.querySelector('.modal');
var LoginModal = document.querySelector('.modal__container--login');
var RegisterModal = document.querySelector('.modal__container--registration');
var overlayLog = document.querySelector('.modal__container--login .modal__overlay');
var overlayRegister = document.querySelector('.modal__container--registration .modal__overlay');
var BackoutLogin = document.querySelector('.modal__container--login .btn-normal');
var BackoutRegs = document.querySelector('.modal__container--registration .btn-normal');

var LoginBtn = document.querySelector('.js-login');
var RegisBtn = document.querySelector('.js-register');

//ngăn cảng sự nổi bọt

function stopBB(event) {
    event.stopPropagation();
}

/* Việc 2 bắt sự kiện nhấn của nút */

function showLoginModal() {
    //đầu tiên cho thằng modal hiện lên trước
    MoldalWarp.style.display = 'flex';
    //sau đó thằng modal login hiện lên
    LoginModal.style.display = 'flex';
}

function closeLoginModal() {
    //đầu tiên cho thằng modal hiện lên trước
    MoldalWarp.style.display = 'none';
    //sau đó thằng modal login hiện lên
    LoginModal.style.display = 'none';
}

overlayLog.addEventListener('click', closeLoginModal);
BackoutLogin.addEventListener('click', closeLoginModal);
LoginBtn.addEventListener('click', showLoginModal);

//Register :))
function showRegisterModal(event) {
    //đầu tiên cho thằng modal hiện lên trước
    MoldalWarp.style.display = 'flex';
    //sau đó thằng modal Register hiện lên
    RegisterModal.style.display = 'flex';
    event.stopPropagation();
}

function closeRegisterModal(event) {
    //đầu tiên cho thằng modal hiện lên trước
    MoldalWarp.style.display = 'none';
    //sau đó thằng modal Register hiện lên
    RegisterModal.style.display = 'none';
    event.stopPropagation();
}

overlayRegister.addEventListener('click', closeRegisterModal);
BackoutRegs.addEventListener('click', closeRegisterModal);
RegisBtn.addEventListener('click', showRegisterModal);

//Nút chuyển
var switchToLog = document.querySelector('.auth-form__switch-login-btn');
var switchToRegis = document.querySelector('.auth-form__switch-regis-btn');

switchToLog.addEventListener('click', closeRegisterModal);
switchToLog.addEventListener('click', showLoginModal);
switchToRegis.addEventListener('click', closeLoginModal);
switchToRegis.addEventListener('click', showRegisterModal);


