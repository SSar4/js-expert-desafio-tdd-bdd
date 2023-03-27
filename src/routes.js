const CarService = require("./service/carService");
const validatePropertiesRent = require('./validate/rent')
const path = require('path');

const RENT_ROUTE = async (req, res) => {
    const carService = new CarService({ cars: path.join(__dirname, '..', 'database', 'cars.json') });
    for await (const data of req) {
        try {
            const { customer, carCategory, numberOfDays } = JSON.parse(data);
            if (!validatePropertiesRent(customer, carCategory, numberOfDays, res)) {
                // se a validação falhou, não continua o processamento
                return
            }
            const result = await carService.rent(
                customer,
                carCategory,
                numberOfDays
            );

            res.writeHead(200, {  'Content-Type': 'application/json' });

            res.write(JSON.stringify({ result }));
            res.end();
        } catch (error) {
            console.log("error", error);
            res.writeHead(500, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ error: "Deu Ruim!" }));
            res.end();
        }
    }
};

const DEFAULT_ROUTE = async (_req, res) => {
    return res.end(JSON.stringify({ success: "Hello World!" }));
};

exports.modules = {
    DEFAULT_ROUTE,
    RENT_ROUTE
}