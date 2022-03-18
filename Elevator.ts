class Elevator {
    NumberOfPassengers: number=0;

    GetNumberOfPassengers() : number {
        return (this.NumberOfPassengers);
    }

    AddPassengers(_numberOfPassengers:number){
        this.NumberOfPassengers = this.NumberOfPassengers + _numberOfPassengers;
    }
    RemovePassengers(_numberOfPassengers){
        if(this.NumberOfPassengers < _numberOfPassengers)
        console.log('cannot remove ' + _numberOfPassengers + ' because I have only ' + this.NumberOfPassengers + ' inside.')
        else{
        this.NumberOfPassengers = this.NumberOfPassengers - _numberOfPassengers;
        }
    }

}

var _elevator = new Elevator();

console.log('elevator contains:', _elevator.GetNumberOfPassengers());
_elevator.AddPassengers(2);
console.log('elevator contains:', _elevator.GetNumberOfPassengers());
_elevator.RemovePassengers(20);
console.log('elevator contains:', _elevator.GetNumberOfPassengers());