class porta {
    StatusPorta : boolean;

    ConsultarStatus() : string {
        if (this.StatusPorta)
            return "Aberta"
        else
            return "Fechada";
    }

    Abrir(){
        this.StatusPorta = true;
    }
    Fechar(){
        this.StatusPorta = false;
    }

}

var PortaDoElevador = new porta();

console.log('Status inicial da porta: ', PortaDoElevador.ConsultarStatus());

console.log('Abrindo a porta...')
PortaDoElevador.Abrir();

console.log('Status atual da porta: ', PortaDoElevador.ConsultarStatus());

//chama o método de Fechar
//exibe novamente o status

console.log('Fechando a porta...')
PortaDoElevador.Fechar();

console.log('Status atual da porta: ', PortaDoElevador.ConsultarStatus());