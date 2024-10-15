let herói = "Goku";
let xp = 1.001
let nivel="";

while (nivel === "") {
    if (xp <= 1.000) {
      nivel = "Ferro";
    } else if (xp >= 1.001 && xp <= 2.000) {
      nivel = "Bronze";
    } else if (xp >= 2.001 && xp <= 5.000) {
      nivel = "Prata";
    } else if (xp >= 5.001 && xp <= 7.000) {
      nivel = "Ouro";
    } else if (xp >= 7.001 && xp <= 8.000) {
      nivel = "Platina";
    } else if (xp >= 8.001 && xp <= 9.000) {
      nivel = "Ascendente";
    } else if (xp >= 9.001 && xp <= 10.000) {
      nivel = "Imortal";
    } else if (xp >= 10.001) {
      nivel = "Radiante";
    }
}
console.log(`O herói de nome ${herói} está no nível de ${nivel}`);
