let industrialMachines = ['Torno CNC',  null, 'Braço Robótico'];

console.log(industrialMachines);

industrialMachines[1] = 'Prensa Hidráulica';

console.log(industrialMachines[1]);

const factoryInfo = `Até aqui, o invetário "industrialMachines" possui ${industrialMachines.length} ativos: 
                     ${industrialMachines[0]}, ${industrialMachines[1]}, ${industrialMachines[2]}`;


const digitalSensors = ['Sensor Laser', 'Sensor Indutivo'];
const analogSensors = ['Sensor Térmico', 'Sensor de Pressão'];

let allSensors = [...digitalSensors, ...analogSensors]; //Pesquisei uma maneira de fazer, pois não estava conseguindo
console.log(allSensors);

console.log(allSensors.join(', '));

allSensors.pop();
console.log(allSensors[allSensors.length = 1]);

allSensors.pop("Inversor");

const sensorInitials = `${allSensors[0][0]}${allSensors[1][0]}${allSensors[2][0]}${allSensors[3][0]}`;
console.log()