const{pbkdf2}=require('crypto');

const strat=Date.now();
const hash=()=>{ 
pbkdf2('myPass','verySecretString',10000,1000,'sha256',() =>{
console.log('Hash',Date.now()-strat);
});

}
hash();
hash();
hash();
hash();
hash();
hash();