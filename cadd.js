function el() {


    let ss = document.getElementById('cod').value;

    const corr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    let le = ss.replace(corr, '');

    document.getElementById('res').textContent = le;
}