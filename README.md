# 🛠️ Mr.Decoder

![GitHub stars](https://img.shields.io/github/stars/HackSpire/Mr.Decoder?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/HackSpire/Mr.Decoder?style=for-the-badge)
![License](https://img.shields.io/github/license/HackSpire/Mr.Decoder?style=for-the-badge)

Welcome to the Mr.Decoder repository! This project is a web-based encryption and decryption tool with multiple encryption methods, password-based encryption, QR code generation, secure text storage, and now **file encryption/decryption** support.

## 📌 Table of Contents
- [Introduction](#-introduction)
- [Features](#-features)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Security](#-security)
- [Contributing](#-contributing)
- [Tech Stack](#-tech-stack)
- [Future Enhancements](#-future-enhancements)
- [FAQ](#-faq)
- [Credits](#-credits)
- [License](#-license)

## 📜 Introduction
Mr.Decoder is designed for developers, cybersecurity enthusiasts, and anyone looking for a simple yet powerful encryption utility—for both **text and files**.

## ✨ Features

### 🔡 Text Encryption & Decryption
✅ Multiple Encryption Options (AES, Base64, SHA-256, SHA-512, ROT13)  
✅ Password-Based Encryption  
✅ QR Code Generation  
✅ Copy & Download Encrypted Text  

### 📁 File Encryption & Decryption
✅ AES (with password/key)  
✅ Base64  
✅ XOR (simple obfuscation)  
✅ Download processed files (encrypted or decrypted)  
✅ Secure & User-Friendly Interface  
✅ Fully client-side, no server-side operations  

## 🚀 Installation & Setup

### Option 1: Use Online
You can access Mr.Decoder directly via GitHub Pages:  
🔗 [Mr.Decoder Live Demo](https://hackspire.github.io/Mr.Decoder/)

### Option 2: Run Locally
To run the project on your local machine:

```sh
git clone https://github.com/HackSpire/Mr.Decoder.git
cd Mr.Decoder
start index.html # Windows
open index.html # macOS
xdg-open index.html # Linux
```

## 📖 Usage

### 🔡 Text Encryption
1️⃣ Enter your text in the input box.  
2️⃣ Choose an encryption algorithm from the dropdown.  
3️⃣ Click **Encrypt** to secure your text.  
4️⃣ Copy or download the encrypted text.  
5️⃣ To decrypt, paste the encrypted text and click **Decrypt**.  
6️⃣ Generate a QR code for sharing securely.  

### 📁 File Encryption
1️⃣ Upload a file from your device.  
2️⃣ Select an encryption algorithm (AES, Base64, XOR).  
3️⃣ Provide a key if required.  
4️⃣ Click **Encrypt** or **Decrypt**.  
5️⃣ Download the processed file.

## 🔒 Security
- All operations are performed locally in your browser—nothing is uploaded.  
- AES-256 is used for strong encryption when selected.  
- Avoid sharing sensitive keys or data publicly.  
- Always use strong passwords for better security.

## 🤝 Contributing
We welcome contributions! Follow these steps to contribute:

```sh
git fork https://github.com/HackSpire/Mr.Decoder.git
git checkout -b feature-xyz
git commit -m "Added new encryption feature"
git push origin feature-xyz
```
Then, create a **Pull Request**.

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript
- **Libraries:** 
  - CryptoJS (Text & File Encryption/Decryption)
  - QRCode.js (QR Code Generation)

## 🚀 Future Enhancements
- Add RSA encryption  
- Improve UI animations  
- Drag & drop file support  
- Local history for encrypted items (optional & private)  
- Support for more file types (e.g., images, PDFs)

## ❓ FAQ

**Q: Can I use this for storing passwords?**  
A: No, this is not a password manager. It is intended for temporary encryption/decryption usage.

**Q: How secure is the encryption?**  
A: It depends on the algorithm and key strength. AES with a strong key offers very high security.

**Q: Are my files/data uploaded anywhere?**  
A: No. All operations are 100% local to your browser.

## 🎖 Credits
- [CryptoJS](https://cryptojs.gitbook.io/docs/) - Encryption library  
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - QR Code generator

## ⚖️ License
This project is licensed under the **MIT License**. 📜 See [LICENSE](LICENSE) for details.
