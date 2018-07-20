/**
 * 困惑: 使用await查询数据时，spinner 如何设置？ 是否是等待完成后才会执行
 * 结论: await语句后面的语句会等待执行后继续执行
 * 困惑2: 和调用async函数统计的语句是否会被执行
 * 结论2 : async函数后面的语句会正常执行，直到await返回结果
 */

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