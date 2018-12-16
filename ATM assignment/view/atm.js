function getMoney(){
    let moneyValue=document.getElementById("moneyInput").value;
    let moneyDenominations = [2000,500,200,100,50,20,10,5,2,1];
    let totalNotes =0;
    for(var i=0; i<moneyDenominations.length;i++){
        if(moneyDenominations[i]<=moneyValue){
            let noOfNotes = parseInt(moneyValue/moneyDenominations[i]);
            moneyValue %= moneyDenominations[i];
            totalNotes += noOfNotes;
            document.getElementById("currency"+moneyDenominations[i]).innerText= noOfNotes +' notes of Rs '+ moneyDenominations[i];
        }
        else{
            document.getElementById("currency"+moneyDenominations[i]).innerText='0 notes of Rs '+ moneyDenominations[i];
        }
    }
    document.getElementById("totalNotes").innerText='Total notes dispensed : '+totalNotes;  
}