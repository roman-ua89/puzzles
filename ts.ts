type Bike = { ride: () => void; }
type Car = {drive: () => void; }
type Plane = { fly: () => void; }

const isCar = (obj: unknown): obj is Car => {
    return (obj as Car).drive !== undefined;
}

const isBike = (obj: unknown): obj is Bike => {
    return (obj as Bike).ride !== undefined;
}

const actWith = (entity: unknown) => {
    if (isCar(entity)) {
        entity.drive();
    }
    if (isBike(entity)) {
        entity.ride();
    }
}

const car: Car = {
    drive: () => { console.log('Drive a car') }
}

const bike: Bike = {
    ride: () => { console.log('Ride a bike') }
}

actWith(car);
actWith(bike);
