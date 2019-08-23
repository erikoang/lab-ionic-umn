async function presentAlert() {
  const alertController = document.querySelector("ion-alert-controller");

  const alert = await alertController.create({
    header: "Terjadi Kesalahan",
    message: "Mohon masukkan nama dan jumlah pengeluaran",
    buttons: ["Tutup"]
  });
  return await alert.present();
}
