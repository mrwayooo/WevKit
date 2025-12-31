const modal = document.getElementById("authModal");
const authBtn = document.getElementById("authBtn");
const closeBtn = document.querySelector(".close");
const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");

// --- 1. ควบคุม Modal ---
authBtn.onclick = () => { modal.style.display = "flex"; }
closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// --- 2. สลับหน้า Login/Signup ---
document.getElementById("toSignup").onclick = (e) => {
    e.preventDefault();
    loginBox.style.display = "none";
    signupBox.style.display = "block";
}
document.getElementById("toLogin").onclick = (e) => {
    e.preventDefault();
    signupBox.style.display = "none";
    loginBox.style.display = "block";
}

// --- 3. ระบบ Login & Sign Up (จำลอง) ---
document.getElementById("signupForm").onsubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", document.getElementById("regUser").value);
    localStorage.setItem("pass", document.getElementById("regPass").value);
    alert("สมัครสมาชิกสำเร็จ!");
    document.getElementById("toLogin").click();
}

document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    const u = document.getElementById("loginUser").value;
    const p = document.getElementById("loginPass").value;

    if((u === "admin" && p === "1234") || (u === localStorage.getItem("user") && p === localStorage.getItem("pass"))) {
        sessionStorage.setItem("isLogged", "true");
        sessionStorage.setItem("currentUser", u);
        location.reload();
    } else {
        alert("ข้อมูลไม่ถูกต้อง");
    }
}

// --- 4. ปุ่มทำงานจริง (Redirect) ---
function showPreview() {
    // ลิงก์ไปเว็บตัวอย่าง
    window.open("https://mrwayooo.github.io/Template1/", "_blank");
}
// ดึง Element ปุ่ม Buy จากหน้า index.html
const buyButton = document.querySelector('.Buy');

if (buyButton) {
    buyButton.addEventListener('click', function() {
        // เปลี่ยนหน้าไปยัง Checkout.html
        window.location.href = 'Checkout.html';
    });
}

// เช็คสถานะเมื่อโหลดหน้า
window.onload = () => {
    const user = sessionStorage.getItem("currentUser");
    if(user) {
        authBtn.innerText = "Logout (" + user + ")";
        authBtn.onclick = () => { sessionStorage.clear(); location.reload(); }
    }
}