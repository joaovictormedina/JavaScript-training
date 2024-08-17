const conversionFactor = 0.01;

function calculateIMC(person) {
    let height = person.height;
    let weight = person.weight;
    
    
    
    height *= conversionFactor;
    
    let imc = weight / (height * height);
    
    const result = 'O resultado do IMC é de '+ imc;
    
    const isHealthy = true;
   
    return { 
        name: person.name,
        imc,
        result,
        isHealthy,
    }
   
}
const person= {
    name: 'Joao',
    weight: 80,
    height: 165,
}

console.log(calculateIMC(person))
