// try{
// console.log(sasuke);
// } catch(err) {
//     console.log('Sasuke não existe, otaku');
//     console.log(err);
// }

function soma(x, y) {
    if (
      typeof x !== 'number' || 
      typeof y !== 'number'
    ) {
      throw new Error('x e y precisam ser números.');
    }
  
    return x + y;
}
try{
    console.log(soma(5,5));
    console.log(soma('f',5));
} catch (error) {
    console.log('Deu errado amiguinho')
}