var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://feed1.saeziae.net",
  width: 128,
  height: 128,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.M,
});
