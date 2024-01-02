require("../bitcoinjs.js")

async function drc20Test() {
    console.log(gateCryptoLib)
    let wallet = new gateLib.DogeWallet()
    let privateKey = "QV3XGHS28fExYMnEsoXrzRr7bjQbCH1qRPfPCMLBKhniWF4uFEcs"
    const commitTxPrevOutputList = [];
    commitTxPrevOutputList.push({
        txId: "adc5edd2a536c92fed35b3d75cbdbc9f11212fe3aa6b55c0ac88c289ba7c4fae",
        vOut: 2,
        amount: 317250000,
        address: "DFuDR3Vn22KMnrnVCxh6YavMAJP8TCPeA2",
        privateKey: privateKey,
    });
    const inscriptionData = {
        contentType: "text/plain;charset=utf8",
        body: gateCryptoLib.base.fromHex(gateCryptoLib.base.toHex(Buffer.from('{"p":"drc-20","op":"mint","tick":"tril","amt":"100"}'))),
        revealAddr: "DFuDR3Vn22KMnrnVCxh6YavMAJP8TCPeA2",
    };

    const request = {
        type: 1,
        commitTxPrevOutputList,
        commitFeeRate: 100000,
        revealFeeRate: 100000,
        revealOutValue: 100000,
        inscriptionData,
        changeAddress: "DFuDR3Vn22KMnrnVCxh6YavMAJP8TCPeA2",
        serviceFeeAddress: "DLJyiwJW9MANqg36e5W89CR9BgQww5nEZR",
        serviceFee: 200000
    };
    let result = await wallet.signTransaction({privateKey: privateKey, data: request})
    console.log(result);
}
drc20Test()