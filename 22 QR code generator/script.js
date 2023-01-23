let qrContentInput = document.getElementById("qr-content");
let qrGenerationForm = document.getElementById("qr-generation-form");
let qrCode;

function generateQrCode(qrContent) {
  return new QRCode("qr-code", {
    text: qrContent,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

// Event listener for form submit event
qrGenerationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let qrContent = qrContentInput.value;
  if (qrCode == null) {
    qrCode = generateQrCode(qrContent);
  } 
   else {
    qrCode.makeCode(qrContent);
  }
});
