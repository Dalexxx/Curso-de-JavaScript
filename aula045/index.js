try {
    // É executado quando não há erros
} catch (e) {
    // É executado quando há erros
} finally {
    // Sempre
}

// try {
//     console.log('try')
// } catch (e) {
//     console.log('catch')
// } finally {
//     console.log('finally')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
      throw new TypeError('Esperando instância de Date.');
    }
  
    if (!data) {
      data = new Date();
    }
  
    return data.toLocaleTimeString('pt-BR');
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data);
    console.log(hora)
} catch(e) {
    console.log(e)
} finally {
    console.log('tenha um dia bom dia bom')
}

