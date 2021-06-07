const stri = 'Acordando!!';
const stri2 = 'Bora tomar café!!';
const stri3 = 'Partiu dormir!!';
const acordando = () => stri;
const cafe = () => stri2;
const dormir = () => stri3;

function doingThings (func) {
    return func();
}
console.log(doingThings(dormir));