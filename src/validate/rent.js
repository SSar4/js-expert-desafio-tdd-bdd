const validatePropertiesRent = (customer, carCategory, numberOfDays, res) => {  
      if (!customer || !carCategory || !numberOfDays) {
         res.writeHead(400, {  'Content-Type': 'application/json' });

         res.write(JSON.stringify({ result: 'alguma prop esta faltando' }));
          res.end();
          return
      }
   return true
};
  
  
module.exports = validatePropertiesRent