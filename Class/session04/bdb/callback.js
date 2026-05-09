// định nghĩa hàm callback
// function greet(name, callback) {
//     console.log("Hello: ",name);
//     callback()
// }
// function sayGoodBye() {
//     console.log("Tam biet!!");
    
// }
// greet("Patrik",sayGoodBye)

// VD2
//callback cap 1
function step1(callback) {
    setTimeout(()=>{
        const data1 = "Du lieu o buoc 1";
        console.log("Buoc 1: ",data1);
        callback(data1)
    },2000)
}
//callback cap 2
function step2(dataFromStep1,callback) {
    setTimeout(()=>{
        const data2 = dataFromStep1+  " -> Xu ly buoc 2";
        console.log("Buoc 2: ",data2);
        callback(data2)
    },2000)
}
//callback cap 3
function step3(dataFromStep2,callback) {
    setTimeout(()=>{
        const data3 = dataFromStep2+  " -> Xu ly buoc 3";
        console.log("Buoc 3: ",data3);
        callback(data3)
    },2000)
}
step1((data1)=>{
    step2(data1,(data2)=>{
       step3(data2,(data3)=>{
        console.log("Hoan tat xu ly: ",data3);
        
       })
    })
})