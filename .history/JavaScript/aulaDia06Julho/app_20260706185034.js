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
// console.log(allSensors[allSensors.length = 1]);

allSensors.push("Inversor");

const sensorInitials = `${allSensors[0][0]}${allSensors[1][0]}${allSensors[2][0]}${allSensors[3][0]}`;
console.log(sensorInitials);

console.log(sensorInitials.toLowerCase());

const maintenanceTag = `${allSensors[0].slice(0, 2)}${allSensors[1].slice(4, 6)}${allSensors[3].slice(6, 7)}t`;
console.log(`O ${maintenanceTag} identifica que o dispositivo está em manutenção preventiva.`);

let amparageValues = [2,4,6];

console.log(amparageValues[1] **3);

amparageValues[1] = amparageValues[1] + 4;



