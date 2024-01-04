const { wif, LtcWallet } = require("@okxweb3/coin-bitcoin");

require("../bitcoinjs.js")


async function lrc20Test() {
    let privateKeyHex = "486403caef2ef30e6653d024e90b9d158dcac0845d5bbfd1210e15b7c7490720"
    let fromAddress = "LQWv8XDvQXfrFCbJVRZsiW6jkTTzjZ4nd9"
    var wifPriv = wif.encode(176,Buffer.from(privateKeyHex, 'hex'))
    console.log("wifPriv: ", wifPriv);

    const commitTxPrevOutputList = [];
    commitTxPrevOutputList.push({
        txId: "deb6fa9da3bf91c5261a1ec154fbe06d06e2d1cc1f61ae2237b5e603c4365626",
        vOut: 1,
        amount: 1079321,
        address: fromAddress,
        privateKey: wifPriv,
    });
    var body = JSON.stringify({"p":"ltc-20","op":"mint","tick":"bald","amt":"4000"});
    var contentType = "text/plain;charset=utf-8";
    const inscriptionData = {
        contentType: contentType,
        body: body,
        revealAddr: fromAddress,
    };
    console.log(inscriptionData)
    var request = {
        commitTxPrevOutputList: commitTxPrevOutputList,
        commitFeeRate: 1,
        revealFeeRate: 1,
        inscriptionDataList: [
            inscriptionData
        ],
        revealOutValue: 10000,
        changeAddress: fromAddress,
      };
    var res = gateLib.inscribe(gateLib.litecoin, request);
    console.log(gateLib.litecoin)
    console.log(res);
}
// ltc commit: 05d4ba29f568827748d1640876e79c8930091519d0e4d20075166d2d0e370f3d
// ltc reveal: 5e7e06b0d2e63b42847ecd6b17c34c9efd0e8325c93c48627c5df990477008ca
lrc20Test()
