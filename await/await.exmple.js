

function returnAfterDelay() {
    return new Promise((resolve) => {
        {
            setTimeout(() => {
                resolve('success')
            }, 3000)
        }
    })
}

(async () => {
    let start = new Date();
    console.log(`start@${start.getMinutes()}分${start.getSeconds()}秒`);
    let a = await returnAfterDelay()
    let success = new Date()
    console.log('返回结果前这条语句不会执行');
    console.log(`bingo@${success.getMinutes()}分${success.getSeconds()}秒  result:${a}`);
})()


function invokeNow(){
    let start = new Date();
    console.log(`我马上就会执行，不会被阻塞@${start.getMinutes()}分${start.getSeconds()}秒`);
}
invokeNow()