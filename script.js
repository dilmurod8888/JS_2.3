var son_1 = +prompt("1 - son kiriting: ");
var son_2 = +prompt("2 - son kiriting: ");
var son_3 = +prompt("3 - son kiriting: ");

if (son_1 < son_2 && son_2 < son_3 || son_1 > son_2 && son_2 > son_3){
    alert("O'rtacha qiymat = "+son_2)
}
else if(son_2 > son_1 && son_1 > son_3 || son_2 < son_1 && son_1 < son_3){
    alert("O'rtacha qiymat = "+son_1)
}
else if(son_1 > son_3 && son_3 > son_2 || son_2 < son_3 && son_3< son_1){
    alert("O'rtacha qiymat = "+son_3)
}else{
    alert("Bu joy faqat sonlar uchun ajratilgan !!!")
}