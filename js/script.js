


// ------------Affine Encryption---------------



const btnchA = document.querySelector('#changeA');
btnchA.addEventListener('click', function () {
    const Text = document.querySelector('#plainTextA');
    // console.log(plainText.value);
    const key1 = Number(document.querySelector('#keyA1').value);
    const key2 = Number(document.querySelector('#keyA2').value);
    // console.log(key1);
    // console.log(key2);
    const cText = document.querySelector('#cipherTextA');
    let plainText = Text.value;
    plainText = plainText.toLowerCase();
    let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const cipher = plainText.split('');
    let cipherIndex = [];
    for (const alph2 of cipher) {
        // console.log(alph1,i);
        for (const [i, alph1] of alph.entries()) {
            if (alph2 == alph1) {
                // console.log(alph1, i);
                let letter = alph1;
                let indexLetter = i;
                const n = ((indexLetter * key1) + key2);
                if (n < 26) {
                    let c = n;
                    // console.log(c);
                    cipherIndex.push(c);
                } else {
                    c = n % 26;
                    // console.log(c);
                    cipherIndex.push(c);
                };
            };
        };
    };


    // console.log(cipherIndex);
    const cipherText = [];
    for (const n of cipherIndex) {
        for (const [i, alph1] of alph.entries()) {
            if (n == i) {
                // console.log(alph1, i);
                cipherText.push(alph1);
            }
        }
    };
    // console.log(cipherText);
    const Result = cipherText.join('');
    // console.log(Result);
    cText.innerHTML = Result;
    //end of function
});


// ------------Affine Decryption---------------


const btnchAD = document.querySelector('#changeAD');
btnchAD.addEventListener('click', function () {
    const Text = document.querySelector('#plainTextAD');
    // console.log(plainText.value);
    const key1 = Number(document.querySelector('#keyAD1').value);
    const key2 = Number(document.querySelector('#keyAD2').value);
    // console.log(key1);
    // console.log(key2);
    const cText = document.querySelector('#cipherTextAD');
    let plainText = Text.value;
    plainText = plainText.toLowerCase();
    let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const cipher = plainText.split('');
    let cipherIndex = [];
    for (const alph2 of cipher) {
        // console.log(alph1,i);
        for (const [i, alph1] of alph.entries()) {
            if (alph2 == alph1) {
                // console.log(alph1, i);
                let letter = alph1;
                let indexLetter = i;
                // ------key-Inverse------
                let Key1Inv;
                for (let x = 1; x < 1000; x++) {
                    if ((x * key1) % 26 == 1) {
                        Key1Inv = x;
                        // console.log(`InverseKey:${x}`);
                        break;

                    }
                    // else {
                    // console.log(`No-InverseKey}`);

                    // };
                }
                // ------key-Inverse------
                const n = ((indexLetter - key2) * Key1Inv);
                if (n > 0) {

                    if (n < 26) {
                        let c = n;
                        // console.log(c);
                        cipherIndex.push(c);
                    } else {
                        c = n % 26;
                        // console.log(c);
                        cipherIndex.push(c);
                    };
                } else {
                    const f = (Math.floor(n / 26)) * 26;
                    const m = n - f;
                    if (m < 26) {
                        let c = m;
                        // console.log(c);
                        cipherIndex.push(c);
                    } else {
                        c = m % 26;
                        // console.log(c);
                        cipherIndex.push(c);
                    };

                }

            };
        };
    };


    // console.log(cipherIndex);
    const cipherText = [];
    for (const n of cipherIndex) {
        for (const [i, alph1] of alph.entries()) {
            if (n == i) {
                // console.log(alph1, i);
                cipherText.push(alph1);
            }
        }
    };
    // console.log(cipherText);
    const Result = cipherText.join('');
    // console.log(Result);
    cText.innerHTML = Result;
    //end of function
});