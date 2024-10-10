// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// b) 2, 4, 8, 16, 32, 64, ____
// c) 0, 1, 4, 9, 16, 25, 36, ____
// d) 4, 16, 36, 64, ____
// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____

// respostas
// a) 9
// b) 128
// c) 49
// d) 100
// e) 13
// f) 200

function proximoElemento(sequencia, logica) {
    switch (logica) {
      case 'a': 
        return sequencia[sequencia.length - 1] + 2;
      case 'b': 
        return sequencia[sequencia.length - 1] * 2;
      case 'c': 
        let n = Math.sqrt(sequencia[sequencia.length - 1]) + 1;
        return n * n;
      case 'd': 
        let m = Math.sqrt(sequencia[sequencia.length - 1]) + 2;
        return m * m;
      case 'e': 
        return sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
      case 'f': 
        return 200;
      default:
        return null;
    }
}

let sequencias = {
'a': [1, 3, 5, 7],
'b': [2, 4, 8, 16, 32, 64],
'c': [0, 1, 4, 9, 16, 25, 36],
'd': [4, 16, 36, 64],
'e': [1, 1, 2, 3, 5, 8],
'f': [2, 10, 12, 16, 17, 18, 19]
};

for (let key in sequencias) {
let proximo = proximoElemento(sequencias[key], key);
console.log(`Próximo elemento da sequência ${key}: ${proximo}`);
}