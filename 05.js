// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

// NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU.

// Resposta: Liga o interruptor 1 e aguarda 5 mim, após isso desliga o interruptor 1 e liga o interruptor 2. A sala que estiver com a lampada quente e desligada pertence ao interruptor 1, e a sala que estiver com a lampada ligada pertence ao interruptor 2.

class Lamp {
    constructor(lamp) {
        this.nome = lamp;
        this.warmth = 'cold';
        this.state = 'off';
    };

    interruptorOn() {
        this.state = 'on';
    };

    interruptorOff() {
        this.warmth = 'hot';
        this.state = 'off';
    }
}

const lampA = new Lamp('lampA');
const lampB = new Lamp('lampB');
const lampC = new Lamp('lampC');

function checarLampadas() {
    console.log(`LampA: ${lampA.state}, calor: ${lampA.warmth}`);
    console.log(`LampB: ${lampB.state}, calor: ${lampB.warmth}`);
    console.log(`LampC: ${lampC.state}, calor: ${lampC.warmth}`);
}

lampA.interruptorOn();

console.log('aguarda 5 min com interruptor 1 ligado');

lampA.interruptorOff();
lampB.interruptorOn();

checarLampadas();