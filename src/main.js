// 创建星星背景
const starsContainer = document.getElementById("stars");
const starCount = 100;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // 随机大小
  const size = Math.random() * 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // 随机位置
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;

  // 随机闪烁动画延迟
  star.style.animationDelay = `${Math.random() * 5}s`;

  starsContainer.appendChild(star);
}

// 刷新按钮行为
document.getElementById("refresh-btn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/";
});

// 检测是否通过IP访问
document.addEventListener("DOMContentLoaded", function () {
  const hostname = window.location.hostname;
  const isIPaddress = /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname) || hostname === "localhost";

  if (isIPaddress) {
    console.log("IP访问已检测到");
    // 这里可以添加其他逻辑
  }
});
