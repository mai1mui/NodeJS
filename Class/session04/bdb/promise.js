function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const data1 = "Du lieu o buoc 1";
                console.log("Buoc 1: ", data1);
                resolve(data1)
            } else {
                reject("Co loi xay ra o buoc 1")
            }
        }, 1000)
    })
}
function step2(dataFromStep1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const data2 = dataFromStep1 + " ->Xu ly buoc 2";
                console.log("Buoc 2: ", data2);
                resolve(data2)
            } else {
                reject("Co loi xay ra o buoc 2")
            }
        }, 1000)
    })
}
function step3(dataFromStep2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const data2 = dataFromStep2 + " ->Xu ly buoc 3";
                console.log("Buoc 3: ", data2);
                resolve(data2)
            } else {
                reject("Co loi xay ra o buoc 3")
            }
        }, 1000)
    })
}
//chay cac buoc
step1()
    .then(data1 => step2(data1))
    .then(data2 => step3(data2))
    .then(() => console.log("ket thuc"))
