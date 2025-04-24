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
function validateFormSignin(email, password) {
    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return false;
    }
    return true;
}

function validateFormSignup(username, password, email,) {
    // kiem tra ko rong cac truong hop
    if (!username || !password || !email) {
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
    if ((hashLetter && hashNumber)) {
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
function signUp() {
    // lay du lieu tu form HTML
    const email = document.querySelector("#sigup_email").value.trim();
    const usuername = document.getElementById("#sigup_username").value.trim();
    const password = document.querySelector("#sigup_password").value.trim();
    // kiem tra du lieu (format)
    if (validateFormSignup(usuername, password, email)) {

        // kiem tra trung lap username/ email
        const duplicateEmail = localStorage.getItem(email);
        if (!duplicateEmail) {
            // luu vao local stora email:{usuername, password}
            localStorage.setItem(email, JSON.stringify({ usuername, password }));
            // LUU Y: JSON.stringify() chuyen doi object thanh chuoi JSON

            // chuyen trang
            alert("Đăng ký thành công!");
            location.href = "./html/home.html";
        } else
            alert("Email đã tồn tại!");
        return;
    }
}
//3. lay du user=> so sanh=> chuyen trang
function signIn() {
    // lay du lieu tu form HTML
    const email = document.querySelector("#signin_email").value.trim();
    const password = document.querySelector("#signin_password").value.trim();

    //kiem tra du lieu (format)
    if (validateFormSignin(email, password)) {

    }
    //tim kiem du lieu phu hop => chuyen trang home
    const userInfoJSON = localStorage.getItem(email);
    const userInfo = JSON.parse(userInfo);
    // ko co du lieu trong trong database
    if (!userInfo) {
        alert("Email không tồn tại!");
        return;
    }
    if (userInfo.password != password) {
        alert("Mật khẩu không đúng!");
        return;// neu sai du lieu => k lam gi them
    }
    // dung het => chuyen trang     
    alert("Đăng nhập thành công!");
    location.href = "./html/home.html";
}
// bat su kien cho button signin
document.getElementById("signin_btn").addEventListener("click", function (event) {
    event.preventDefault(); // ngăn chặn hành vi mặc định của nút submit
    signIn();
})

// bat su kien cho button signup
document.getElementById("signup_btn").addEventListener("click", function (event) {
    event.preventDefault(); // ngăn chặn hành vi mặc định của nút submit
    signup();
})