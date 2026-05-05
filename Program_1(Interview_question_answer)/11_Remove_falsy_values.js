let val=[0,1,false,2,'',3,null,'a',undefined,'b',NaN,'c'];

let val=[0,1,false,2,'',3,null,'a',undefined,'b',NaN,'c'];

//solution 1
console.log(removeFalsycondition(val));
function removeFalsycondition(val){
    let result=[];
    val.forEach((valu)=>{
        if(valu){
        result.push(valu);
        }
    })
    return result;
}

//second method
console.log(removefalsyvalues2(val));
function removefalsyvalues2(val){
   return  val.filter((cuval)=>cuval?cuval:'');
}

//third method
console.log(removefalsyvalues3(val));   
function removefalsyvalues3(val){
    return val.filter(Boolean);
}

//fourth method
console.log(removefalsyvalues4(val));
function removefalsyvalues4(val){
    return val.reduce((acc,cuval)=>{
        if(cuval){
            acc.push(cuval);
        }
        return acc;
    },[]);
}

//fifth method
console.log(removefalsyvalues5(val));
function removefalsyvalues5(val){
    return val.reduce((acc,cuval)=>cuval?acc.concat(cuval):acc,[]);
}

//sixth method
console.log(removefalsyvalues6(val));
function removefalsyvalues6(val){
    for(let i=0;i<val.length;i++){
        if(!val[i]){
            val.splice(i,1);
            i--;
        }               
    }
    return val;
}