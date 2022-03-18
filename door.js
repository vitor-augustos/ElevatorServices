var porta = /** @class */ (function () {
    function porta() {
    }
    porta.prototype.ConsultarStatus = function () {
        if (this.StatusPorta)
            return "Aberta";
        else
            return "Fechada";
    };
    porta.prototype.Abrir = function () {
        this.StatusPorta = true;
    };
    porta.prototype.Fechar = function () {
        this.StatusPorta = false;
    };
    return porta;
}());
var PortaDoElevador = new porta();
console.log('Status inicial da porta: ', PortaDoElevador.ConsultarStatus());
console.log('Abrindo a porta...');
PortaDoElevador.Abrir();
console.log('Status atual da porta: ', PortaDoElevador.ConsultarStatus());
//chama o método de Fechar
//exibe novamente o status
console.log('Fechando a porta...');
PortaDoElevador.Fechar();
console.log('Status atual da porta: ', PortaDoElevador.ConsultarStatus());
