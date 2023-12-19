require("./bitcoinjs.js")

var network = gateLib.networks.bitcoin;

var privateKeyHex = "bd0003fcc25ac8c2dfaaa8413405156498114a9d1627486af8f5b27de35309f9";
var wifPriv = "L3Z6tQ2N2FLfRDZJmRgfAAZ3Tz1W5HmYEoD7jmttNASNzhRZbe9u";
var destination = "bc1prn9txsu3dvz409svqpgt4cu3mwfgz2y2qll8ra67yya4ynarkzfsggw5h8";
var serviceFeeAddress = "3Gksp1S41nfFER2gEKCBnDakfCv96D5aRf"
var dust = 546;

var mainTest = {
    /**
bip44: 13xrt1jE5mvCDaQJLBA9SAwaEvGZg4Ux58
bip49: 3Gksp1S41nfFER2gEKCBnDakfCv96D5aRf
bip84: bc1qyzqvgn8qcxkkneymz83kfdzcfr8nm2xvn3jr08
bip86: bc1prn9txsu3dvz409svqpgt4cu3mwfgz2y2qll8ra67yya4ynarkzfsggw5h8
     */
}

var regTest = {
    /**
bip44: miUpB4pCtoMSzgsv3k8XG69u6usGXhuPYi
bip49: 2N8K5skN5dFAbSCfDuSp4QAa1sZ8Jw2P77V
bip84: bcrt1qyzqvgn8qcxkkneymz83kfdzcfr8nm2xvm7sara
bip86: bcrt1prn9txsu3dvz409svqpgt4cu3mwfgz2y2qll8ra67yya4ynarkzfsjejacj
     */
}
var contentType = "text/plain;charset=utf-8";
var body = JSON.stringify({"p":"brc-20","op":"deploy","tick":"bc1p","amt":"1000"});

async function commitTest() {
    var request = {
        commitTxPrevOutputList: [
            {
                "txId": "0ea9dcd1a902d027f3de3405134409b68d7a70ea646b919fe6a82a0df45f0516",
                "vOut": 1,
                "amount": 99944554,
                "address": destination,
                "privateKey": wifPriv
            }
        ],
        commitFeeRate: 2,
        revealFeeRate: 2,
        inscriptionDataList: [
            {
                contentType: contentType,
                body: body,
                revealAddr: destination
            }
        ],
        revealOutValue: dust,
        changeAddress: destination,
        serviceFeeAddress: serviceFeeAddress,
        serviceFee: 1090

    }
    console.log(request)
    var res = gateLib.inscribe(network, request);
    console.log(res);
}

commitTest();
