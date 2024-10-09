const string = "Um teste de string para verificar quantas vezes a letra A aparece"

function verifier(string){
    let a_maiusculos = 0;
    let a_minusculos = 0;

    for (const letter of string) {
        if(letter === 'A'){
            a_maiusculos += 1;
        } else if (letter === 'a') {
            a_minusculos += 1;
        }
    };
    console.log(`A string possui ${a_maiusculos} letras 'A' e ${a_minusculos} letras 'a'`)
};

verifier(string);