var Elevator = /** @class */ (function () {
    function Elevator() {
        this.NumberOfPassengers = 0;
    }
    Elevator.prototype.GetNumberOfPassengers = function () {
        return (this.NumberOfPassengers);
    };
    Elevator.prototype.AddPassengers = function (_numberOfPassengers) {
        this.NumberOfPassengers = this.NumberOfPassengers + _numberOfPassengers;
    };
    Elevator.prototype.RemovePassengers = function (_numberOfPassengers) {
        if (this.NumberOfPassengers < _numberOfPassengers)
            console.log('cannot remove ' + _numberOfPassengers + ' because I have only ' + this.NumberOfPassengers + ' inside.');
        else {
            this.NumberOfPassengers = this.NumberOfPassengers - _numberOfPassengers;
        }
    };
    return Elevator;
}());
var _elevator = new Elevator();
console.log('elevator contains:', _elevator.GetNumberOfPassengers());
_elevator.AddPassengers(2);
console.log('elevator contains:', _elevator.GetNumberOfPassengers());
_elevator.RemovePassengers(20);
console.log('elevator contains:', _elevator.GetNumberOfPassengers());
