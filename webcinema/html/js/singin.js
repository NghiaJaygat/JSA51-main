// chuyen trang
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// 1. kiem tra form truoc khi nhap du lieu
function validateFormSignin (email, password){
    if(!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return false;
    }
    return true;
}

function validateFormSignup (username, password, email,){
    // kiem tra ko rong cac truong hop
    if(!username || !password || !email) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return false;
    }
    // kiem tra cu phap username
    if (username.length < 6) {
        alert("Tên đăng nhập phải trên 6 kí tự!");
        return false;
    }
    const hashLetter = /[a-zA-Z]/.test(username);
    const hashNumber = /[0-9]/.test(username);
    if (!(hashLetter && hashNumber)) {
        alert("Tên đăng nhập phải chứa cả chữ và số!");
        return false;
    }
    //kiem tra cu phap email
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    //pasword > 6 chu so
if (password.length < 6) {
    alert("Mật khẩu phải trên 6 kí tự!");
    return false;
}
   return true;
} 


//2. tao user moi => luu user local storage
function signUp(){
    // lay du lieu tu form HTML

    // kiem tra du lieu (format)

    // kiem tra trung lap username/ email

    // luu vao local stora email:{usuername, password}
}