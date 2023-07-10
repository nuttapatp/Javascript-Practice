//item10

function Calcashback(productprice, banknotepaid) {

const banknotetype    = [1000, 500 , 100 , 50 , 20 , 10 , 5 ,2 ,1]       
let cashback = banknotepaid-productprice ; 

const cashbankresult =  {}
    
 for (let banknote of banknotetype)   {
    
    const count = Math.floor (cashback/banknote) // find nearest intergal number
    cashbankresult[banknote] = count ; 
    cashback -= count * banknote ; 
    

 }
    
return cashbankresult    
}

let productprice = 35 ;
let banknotepaid = 100  ;

let cashbankresult = Calcashback(productprice,banknotepaid);

console.log(cashbankresult)

