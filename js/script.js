function hitungLuas() {
    let alas = parseFloat(document.getElementById('alas').value)
    let tinggi = parseFloat(document.getElementById('tinggi').value)

    let luas = 0.5 * alas * tinggi

    let hasil = `L = 1/2 * a * T <br> L = 1/2 * ${alas} * ${tinggi} <br> L = ${luas}`

    document.getElementById('luas').innerHTML = hasil
}

function hitungKeliling(){
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)

    let keliling = a + b + c

    let hasil = `K = S1 + S2 + S3 <br> K = ${a} + ${b} + ${c} <br> K = ${keliling}`

    document.getElementById('keliling').innerHTML = hasil
}


function scrollDown1(){
    let scroll = document.getElementById('content1');

    if (scroll) {
        scroll.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollDown2(){
    let scroll = document.getElementById('content2');

    if (scroll) {
        scroll.scrollIntoView({ behavior: 'smooth' });
    }
}
