/** função retorna um objeto no formato { nomeCompleto, email }  */
const generateData = (person) => {
  const email = person.split(' ').join('_').toLowerCase();
  return { fullname: person, email: `${email}@trybe.com` }
};

const newEmployees = () => {
  const employees = {
    id1: generateData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateData('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees());

/**
 * 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
 * Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros 
 * o número apostado e uma função que checa se o número apostado é igual ao 
 * número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
 */

/** Gera numeros aleatórios */
const randomNumber = () => {
  /**Ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores_inclusive */
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

/** Gera Um Array de Cinco Números Aleatórios*/
const betting = [randomNumber()];
const teste = betting.every((element) => element === randomNumber());

console.log(betting);
console.log(teste);