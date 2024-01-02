require("../bitcoinjs.js")

async function drc20Test() {
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
    console.log(inscriptionData)
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

 async function transferDrc20Test() {
    let wallet = new gateLib.DogeWallet()
    let btcTxParams = {
    inputs: [
        {
        txId: "a7edebed3f2e51a2ed99a3625fb408bd9db2ce61b1794880b3f214b26bf7a023",
        vOut: 0,
        amount: 250000
        },
    ],
    outputs: [
        {
            address: "tb1qtsq9c4fje6qsmheql8gajwtrrdrs38kdzeersc",
            amount: 150000
        },
        {
            address: "mouQtmBWDS7JnT65Grj2tPzdSmGKJgRMhE",
            amount: 50000
        },
    ],
        address: "2NF33rckfiQTiE5Guk5ufUdwms8PgmtnEdc",
        feePerB: 2
    };

    let signParams = {
        privateKey: "L22jGDH5pKE4WHb2m9r2MdiWTtGarDhTYRqMrntsjD5uCq5z9ahY",
        data: btcTxParams
    };
    let tx = await wallet.signTransaction(signParams);
 }