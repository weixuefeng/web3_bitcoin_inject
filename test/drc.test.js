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

 async function drc20Oridinals() {
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
        contentType: "image/png",
        body: gateCryptoLib.base.fromHex('0x89504e470d0a1a0a0000000d49484452000001a4000001a408060000007e4c513500000006624b474400ff00ff00ffa0bda7930000077949444154789cedd7b16a9e751887e144be9e40c82a420b45c1b558d70f320825457470ea909c40971e858bd0b9bb88a518ba94902e85aae400620a2d95ae219b733c07f17b9f9be6ba4ee0f7bcbcc3cd7ffbfce4e06a0b00867d327d00006c6d0912001182044082200190204800240812000982044082200190204800240812000982044082200190204800240812000982044082200190204800240812000982044082200190204800240812000982044082200190204800'),
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
drc20Oridinals();