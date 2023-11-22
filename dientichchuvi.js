let number =+ prompt("nhap ban kinh");
function Perimeter (r) {
    return 2*Math.PI*r;
}
alert(Perimeter(number));

let number1 = Perimeter(number);
function Acreage (C){
    return (C^2)/4*Math.PI;
}
alert(Acreage(number1));