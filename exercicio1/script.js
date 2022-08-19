const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
/*
for(let temporada = 0; temporada < array.length; temporada++) {
    let jogador =`Jogador ${temporada + 1}: `
    
    for(let j = 0; j < array[temporada].length; j++){
        jogador += `${array[temporada][j]} ` 
    }
    console.log(jogador)
}*/

let temporada = 0;
for (let i = 0; i < array.length; i++) {
  console.log(`Temporada ${(temporada += 1)}: ${array[i]} `);
}
// const megaSena = [
//     [2, 4, 6, 8, 10],
//     [3, 6, 9, 12, 15],
//     [4, 8, 12, 16, 20],
//     [5, 10, 15, 20, 25]
//     ];
    
//     for(let i = 0; i < megaSena.length; i++){
//         let sorteio = `Sorteio ${i +1}: `
//         for(let j = 0; j < megaSena[i].length; j++){
//           sorteio += `${megaSena[i][j]} `
//         }
//         console.log(sorteio)
//       }