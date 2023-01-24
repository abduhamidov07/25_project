let qrContentInput = document.getElementById("qr-content");
let qrCode;

// Generate QR code 
function generateQrCode(qrContent) {
  return new QRCode("qr-code", {
    text: qrContent,
    width: 260,
    height: 260,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

// Event listener for form submit event
qrContentInput.addEventListener("input", function (event) {
  event.preventDefault();
  let qrContent = qrContentInput.value;
  if (qrCode == null) {
    qrCode = generateQrCode(qrContent);
  } else {
    qrCode.makeCode(qrContent);
  }
});
