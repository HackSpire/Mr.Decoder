// Encryption function
function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptionType = document.getElementById("encryptionType").value;
    let password = document.getElementById("password").value;
    let result = "";

    if (!inputText) {
        alert("Please enter text to encrypt.");
        return;
    }

    switch (encryptionType) {
        case "aes":
            if (!password) {
                alert("Please enter a password for AES encryption.");
                return;
            }
            result = CryptoJS.AES.encrypt(inputText, password).toString();
            break;

        case "sha256":
            result = CryptoJS.SHA256(inputText).toString();
            break;

        case "sha512":
            result = CryptoJS.SHA512(inputText).toString();
            break;

        case "base64":
            result = btoa(inputText);
            break;

        case "rot13":
            result = rot13(inputText);
            break;

        default:
            alert("Invalid encryption type.");
            return;
    }

    document.getElementById("resultText").value = result;
    generateQRCode(result);
}

// Decryption function
function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptionType = document.getElementById("encryptionType").value;
    let password = document.getElementById("password").value;
    let result = "";

    if (!inputText) {
        alert("Please enter text to decrypt.");
        return;
    }

    switch (encryptionType) {
        case "aes":
            if (!password) {
                alert("Please enter a password for AES decryption.");
                return;
            }
            try {
                let bytes = CryptoJS.AES.decrypt(inputText, password);
                result = bytes.toString(CryptoJS.enc.Utf8);
                if (!result) throw new Error();
            } catch {
                alert("Invalid AES decryption or wrong password.");
                return;
            }
            break;

        case "base64":
            try {
                result = atob(inputText);
            } catch {
                alert("Invalid Base64 decryption.");
                return;
            }
            break;

        case "rot13":
            result = rot13(inputText);
            break;

        default:
            alert("This encryption type cannot be decrypted.");
            return;
    }

    document.getElementById("resultText").value = result;
}

// ROT13 encryption/decryption function
function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function (char) {
        let base = char <= "Z" ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
}

// Copy result to clipboard
function copyToClipboard() {
    let resultText = document.getElementById("resultText");
    resultText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// Download encrypted text as a file
function downloadEncryptedText() {
    let resultText = document.getElementById("resultText").value;
    if (!resultText) {
        alert("No encrypted text to download.");
        return;
    }

    let blob = new Blob([resultText], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "encrypted_text.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function togglePasswordField() {
    let encryptionType = document.getElementById("encryptionType").value;
    let passwordContainer = document.getElementById("passwordContainer");
    
    if (encryptionType === "aes") {
        passwordContainer.classList.remove("hidden");
    } else {
        passwordContainer.classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", togglePasswordField);

// Generate QR Code for encrypted text with website URL
function generateQRCode(encryptedText) {
    if (!encryptedText) {
        alert("Please encrypt some text first!");
        return;
    }

    let websiteURL = "https://hackspire.github.io/Mr.Decoder/"; 
    let qrText = `${websiteURL}?text=${encodeURIComponent(encryptedText)}`;

    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {
        text: qrText,
        width: 128,
        height: 128
    });
    
    alert("QR Code generated! Scan to open.");
}

// Auto-fill encrypted text from URL on page load
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const encryptedText = urlParams.get("text");
    
    if (encryptedText) {
        document.getElementById("inputText").value = encryptedText;
    }
};