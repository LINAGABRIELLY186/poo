class ControleDeAudio {
    private volume: number;

    constructor() {
        this.volume = 2; // Inicializando o volume com o valor 2
    }

    aumentarVolume(): void {
        if (this.volume < 10) {
            this.volume++;
        }
    }

    diminuirVolume(): void {
        if (this.volume > 0) {
            this.volume--;
        }
    }

    getVolume(): number {
        return this.volume;
    }
}

// Exemplo de uso da classe ControleDeAudio
const controle = new ControleDeAudio();
console.log(controle.getVolume()); // Saída: 2
controle.aumentarVolume();
console.log(controle.getVolume()); // Saída: 3
controle.diminuirVolume();
console.log(controle.getVolume()); // Saída: 2
