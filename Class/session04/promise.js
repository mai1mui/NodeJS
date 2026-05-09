function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success =true;
            if(success){
                const data1 ="Du lieu o buoc 1";
                console.log("buoc 1: ",data1);
                resolve(data1);

            }else{
                reject ("co loi xay ra o buoc 1")
            }
        },1000)
    })
}

function step2(dataFromStep1){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success =true;
            if(success){
                const data2 =dataFromStep1+"-> Xu ly o buoc 2";
                console.log("buoc 2: ",data2);
                resolve(data2);

            }else{
                reject ("co loi xay ra o buoc 2")
            }
        },1000)
    })
}
//chay cac buoc
step1()
.then(dat1=>step2(dat1))