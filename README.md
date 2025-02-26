# 🛠️ Mr.Decoder

![GitHub stars](https://img.shields.io/github/stars/HackSpire/Mr.Decoder?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/HackSpire/Mr.Decoder?style=for-the-badge)
![License](https://img.shields.io/github/license/HackSpire/Mr.Decoder?style=for-the-badge)

Welcome to the Mr.Decoder repository! This project is a web-based encryption and decryption tool with multiple encryption methods, password-based encryption, QR code generation, and secure text storage.

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
Mr.Decoder is designed for developers, cybersecurity enthusiasts, and anyone looking for a simple yet powerful encryption utility.

## ✨ Features
✅ Multiple Encryption Options (AES, Base64, SHA, etc.)  
✅ Password-Based Encryption  
✅ QR Code Generation  
✅ Copy & Download Encrypted Text  
✅ Secure & User-Friendly Interface  

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
1️⃣ Enter your text in the input box.  
2️⃣ Choose an encryption algorithm from the dropdown.  
3️⃣ Click **Encrypt** to secure your text.  
4️⃣ Copy or download the encrypted text.  
5️⃣ To decrypt, paste the encrypted text and click **Decrypt**.  
6️⃣ Generate a QR code for sharing securely.  

## 🔒 Security
- The encryption logic runs locally in the browser, ensuring data privacy.  
- Avoid sharing sensitive encryption keys publicly.  
- Consider using strong passwords for password-based encryption.  

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
- **Libraries:** CryptoJS (Encryption Library), QRCode.js (QR Code Generator)

## 🚀 Future Enhancements
- Add RSA encryption
- Improve UI animations
- Support for more file types

## ❓ FAQ
**Q: Can I use this for storing passwords?**  
A: No, this is not a password manager, and storing sensitive passwords here is not recommended.  

**Q: How secure is the encryption?**  
A: It depends on the algorithm used. AES-256 is very secure if a strong key is used.

## 🎖 Credits
- [CryptoJS](https://cryptojs.gitbook.io/docs/) - Encryption library
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - QR Code generator

## ⚖️ License
This project is licensed under the **MIT License**. 📜 See [LICENSE](LICENSE) for details.

