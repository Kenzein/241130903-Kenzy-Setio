// Ide
function updateHarga(barang) {
    const jumlah = parseInt(barang.querySelector(".total").value);
    const harga = parseInt(barang.querySelector(".harga").textContent);
    const total = jumlah * harga;
    barang.querySelector(".total-harga").textContent = `$${total}`;
  }
  
  // Const left bar
  const divInfo = document.querySelector(".keterangan");
  
  document.querySelectorAll(".barang").forEach(function (barang) {
    // Tambah
    barang.querySelector(".tambah").addEventListener("click", () => {
      const jumlahItem = barang.querySelector(".tombol input");
      jumlahItem.value = parseInt(jumlahItem.value) + 1;
      updateHarga(barang);
    });
    // Kurang
    barang.querySelector(".kurang").addEventListener("click", function () {
      const jumlahItem = barang.querySelector(".tombol input");
      if (jumlahItem.value > 0) {
        jumlahItem.value = parseInt(jumlahItem.value) - 1;
        updateHarga(barang)
      }
    });
  });
  
  // Const right bar
  const inputNama = document.querySelectorAll("form input")[0];
  const inputEmail = document.querySelectorAll("form input")[1];
  const inputKode = document.querySelectorAll("form input")[2];
  const detail = document.querySelector(".keterangan");
  // Apply button
  document.querySelector(".apply").addEventListener("click", function (e) {
    e.preventDefault();
    detail.innerHTML = "";

    //  form input
    if (inputNama.value.trim() === "" || inputEmail.value.trim() === "") {
      alert("Nama dan Email harus diisi");
      return;
    }
  
    document.querySelectorAll(".barang").forEach(function (barang) {
      const infoItem = document.createElement("div");
      infoItem.className = "flex";
      // bagian list harga
      const paragraph1 = document.createElement("p");
      // mengambil harga barang
      const hargabrg = barang.querySelector(".total").value;
      paragraph1.textContent = hargabrg;
      // bagian list barang
      const paragraph2 = document.createElement("p");
      // mengambil nama barang
      const namabrg = barang.querySelector(".nama").textContent;
      paragraph2.textContent = namabrg;
  
      infoItem.appendChild(paragraph1);
      infoItem.appendChild(paragraph2);
  
      detail.appendChild(infoItem);
    });
    //
    let Total = 0;
    document.querySelectorAll(".barang").forEach(function (barang) {
      const jumlahBarang = barang.querySelector(".total").value;
      const hargaBarang = barang.querySelector(".harga").textContent;
      Total += parseInt(jumlahBarang * hargaBarang);
    });
    // kode diskon
    if (inputKode.value === "DISKON70") {
      Total *= 0.7;
    }
    //   subtotal
    detail.innerHTML += `<p>Total : $${Total}</p>`;
  });
  
  // Reset button
  $(".reset").click( () => {
    $(".total").val("0");
    $("form input").val("");
    $(".keterangan").html("");
  });