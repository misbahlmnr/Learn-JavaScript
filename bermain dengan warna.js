<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bermain Dengan Warna</title>
    <style>
      body {
        text-align: center;
      }
      .hijau-muda {
        background-color: lightgreen;
      }
      .kotak {
        width: 25px;
        height: 25px;
        margin: 10px auto;
      }
      .merah {
        background-color: red;
      }
      .hijau {
        background-color: green;
      }
      .biru {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Bermain Dengan Warna</h1>
    <button type="button" id="btn1">Click</button>

    <br /><br />
    <div class="kotak merah"></div>
    <input type="range" name="sMerah" id="sMerah" min="0" max="255" />

    <div class="kotak hijau"></div>
    <input type="range" name="sHijau" id="sHijau" min="0" max="255" />

    <div class="kotak biru"></div>
    <input type="range" name="sBiru" id="sBiru" min="0" max="255" />
    <script>
      // Klik tombol ganti warna
      // const btn = document.querySelector("button");
      // btn.addEventListener("click", () => {
      //   // document.body.style.backgroundColor = "lightgreen";
      //   // document.body.setAttribute("class", "hijau-muda");
      //   document.body.classList.toggle("hijau-muda");
      // });

      // membuat tombol ganti ganti warna
      // const btnnew = document.createElement("button"),
      //   textBtnNew = document.createTextNode("color acak");

      // btnnew.appendChild(textBtnNew);
      // btnnew.setAttribute("type", "button");
      // btn.after(btnnew);
      // btnnew.addEventListener("click", () => {
      //   const r = Math.round(Math.random() * 255 * 1);
      //   const g = Math.round(Math.random() * 255 * 1);
      //   const b = Math.round(Math.random() * 255 * 1);
      //   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      // });

      // membuat range yang bisa ganti warna
      const sMerah = document.querySelector("input[name=sMerah]");
      const sHijau = document.querySelector("input[name=sHijau]");
      const sBiru = document.querySelector("input[name=sBiru]");

      sMerah.addEventListener("input", () => {
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      });
      sHijau.addEventListener("input", () => {
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      });
      sBiru.addEventListener("input", () => {
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      });
    </script>
  </body>
</html>
