var luminaria = /** @class */ (function () {
    function luminaria() {
    }
    luminaria.prototype.ConsultarStatus = function () {
        if (this.StatusLampada)
            return "Acesa";
        else
            return "Apagada";
    };
    luminaria.prototype.Acender = function () {
        this.StatusLampada = true;
    };
    luminaria.prototype.Apagar = function () {
        this.StatusLampada = false;
    };
    return luminaria;
}());
var luminariaDoElevador = new luminaria();
console.log('Status inicial da luminária: ', luminariaDoElevador.ConsultarStatus());
console.log('Acendendo a lâmpada...');
luminariaDoElevador.Acender();
console.log('Status atual da luminária: ', luminariaDoElevador.ConsultarStatus());
//chama o método de apagar
//exibe novamente o status
console.log('Apagando a lâmpada...');
luminariaDoElevador.Apagar();
console.log('Status atual da luminária: ', luminariaDoElevador.ConsultarStatus());
