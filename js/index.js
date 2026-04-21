const roles = [
    "Full Stack Developer",
    "UI/UX Desinger",
    "MERN Stack Developer"
];

let index = 0;

function changeRole() {
    document.getElementById("role").textContent = roles[index];
    index = (index + 1) % roles.length;
}

changeRole();
setInterval(changeRole, 2000);