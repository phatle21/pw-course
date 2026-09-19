# 🎭 Playwright Automation Testing Project

Dự án Automation Test sử dụng **Playwright** và **JavaScript**, áp dụng mô hình **Page Object Model (POM)** và tích hợp **CI/CD với GitHub Actions**.

![Playwright Tests](https://github.com/<GITHUB_USERNAME>/<REPO_NAME>/actions/workflows/playwright.yml/badge.svg)

---

## 📌 Tính năng chính (Features)
- [x] Áp dụng mô hình **Page Object Model (POM)** dễ bảo trì.
- [x] Test các kịch bản Đăng ký / Đăng nhập trên trang thực hành.
- [x] Tích hợp **GitHub Actions CI/CD** tự động kích hoạt test khi push code.
- [x] Tự động lưu và phát hành báo cáo **HTML Report** sau mỗi lượt chạy.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)
- **Programming Language:** JavaScript (ES6+)
- **Test Framework:** Playwright Test
- **CI/CD Tool:** GitHub Actions
- **Browser:** Google Chrome

---

## 🚀 Hướng dẫn cài đặt & Chạy dưới Local

### 1. Yêu cầu trước khi cài đặt (Prerequisites)
- Đã cài đặt **Node.js** (phiên bản v18 trở lên).
- Đã cài đặt **Git**.

### 2. Cài đặt dự án
```bash
# Clone dự án về máy local
git clone [https://github.com/](https://github.com/)<GITHUB_USERNAME>/<REPO_NAME>.git

# Di chuyển vào thư mục dự án
cd <REPO_NAME>

# Cài đặt các thư viện phụ thuộc
npm install

# Cài đặt trình duyệt Playwright
npx playwright install