function createCar(manufacturer, modelName, ...additionalInfo: { [key: string]: any }[]): object {
    const car: { manufacturer, modelName, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...additionalInfo.reduce((acc, item) => ({ ...acc, ...item }), {})
    };
    return car;
}
const carInfo = createCar('Toyota', 'Camry', { color: 'Blue' }, { optionalFeature: 'Sunroof' });
console.log(carInfo);
