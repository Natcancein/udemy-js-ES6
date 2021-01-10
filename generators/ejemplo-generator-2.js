const engineeringTeam=
{
    size:3,
    department: 'Engineering',
    lead:'Jill',
    manager: 'Alex',
    engineer: 'Dave'
}

//Creando el generador

function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names =[];

for (let name of TeamIterator(engineeringTeam)){
    names.push(name);
}

console.log(names);

// DELEGATION GENERATORS

// agregando otro equipo
const testingTeam={
    lead:'Amanda',
    tester: 'Bill'
}

const engineeringTeam=
{
     //agregando el equipo que esta fuera
    //testingTeam:testingTeam;
    //Basta con poner solo un nombre porque se repiten el key y la property
    testingTeam,
    size:3,
    department: 'Engineering',
    lead:'Jill',
    manager: 'Alex',
    engineer: 'Dave'
 
}


function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);  
/* agregando yield* a la constante que guarda
el generador testingTeamIterator que tiene como parametro el integrante
 del testing team se hace la delegacion del generador y ahora se 
 unen ambos equipos*/
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}

const names =[];

for (let name of TeamIterator(engineeringTeam)){
    names.push(name);
}

console.log(names);
