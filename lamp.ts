class luminaria {
    StatusLampada : boolean;

    ConsultarStatus() : string {
        if (this.StatusLampada)
            return "Acesa"
        else
            return "Apagada";
    }

    Acender(){
        this.StatusLampada = true;
    }
    Apagar(){
        this.StatusLampada = false;
    }

}

var luminariaDoElevador = new luminaria();

console.log('Status inicial da luminária: ', luminariaDoElevador.ConsultarStatus());

console.log('Acendendo a lâmpada...')
luminariaDoElevador.Acender();

console.log('Status atual da luminária: ', luminariaDoElevador.ConsultarStatus());

//chama o método de apagar
//exibe novamente o status

console.log('Apagando a lâmpada...')
luminariaDoElevador.Apagar();

console.log('Status atual da luminária: ', luminariaDoElevador.ConsultarStatus());
