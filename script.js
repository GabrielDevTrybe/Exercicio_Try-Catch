
const verifyIsNumber = (value1, value2) => {
    if (value1 === ''|| value2 === '') {
      throw new Error('Preencha o campo');
    }
    if(isNaN(value1) || isNaN(value2)) {
        throw new Error('Precisa digitar um numero!');
    }
  };
  



function sum() {
    try {
        
const value1 = document.getElementById('value1').value;
const value2 = document.getElementById('value2').value;
verifyIsNumber(value1, value2)
const result = parseInt(value1) + parseInt(value2);
document.getElementById('result').innerHTML = `Resultado: ${result}`;
document.getElementById('value1').value = '';
document.getElementById('value2').value = '';
    }
    catch (erro) {
    document.getElementById('result').innerHTML =`Erro: ${erro.message}`;

    }
}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}
