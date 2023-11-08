

console.log("tinhtong.js")
// code here


function tinhTong() {
    let so1 = document.getElementById("sothu1").value
    let so2 = document.getElementById("sothu2").value

    let tong = +so1 + (+so2)
    document.getElementById("ketqua").innerHTML = tong
}
