window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;

    document.querySelector(".bar-bg").style.background = 
        `linear-gradient(to right, rgb(162, 169, 222) ${scrollPercent}%, rgba(162, 169, 222, 0.3) ${scrollPercent}%)`;
});
const content = "안녕하세요:), \n 저는 개발자 꿈나무 서세호입니다.";
let i = 0;
let isDeleting = false;

function typing() {
    const text = document.querySelector(".txt-title");

    if (!isDeleting) {
        // 타이핑 효과
        if (i < content.length) {
            let txt = content[i++];
            text.innerHTML += txt === "\n" ? "<br/>" : txt;
        } else {
            isDeleting = true; // 다 썼으면 삭제 모드로 변경
            setTimeout(() => {
                text.textContent = ""; // 1.5초 후 초기화
                i = 0;
                isDeleting = false; // 다시 타이핑 시작
            }, 1000); // 1.5초 대기
        }
    }
}

setInterval(typing, 100);

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetBox = document.getElementById(targetId);

            // toggle "hidden" 클래스
            targetBox.classList.toggle('hidden');
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const emailBtn = document.getElementById("emailBtn");
    const phoneBtn = document.getElementById("phoneBtn");
    const emailText = document.getElementById("emailText");
    const phoneText = document.getElementById("phoneText");

    emailBtn.addEventListener("click", () => {
        emailText.classList.toggle("hidden");
    });

    phoneBtn.addEventListener("click", () => {
        phoneText.classList.toggle("hidden");
    });
});
