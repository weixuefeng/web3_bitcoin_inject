const { wif, DogeWallet } = require("@okxweb3/coin-bitcoin");

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

function transferUsdt() {
    var wallet = new DogeWallet()
    var input = 
    wallet.signTransaction()
}
var contentType = "text/plain;charset=utf-8";
var body = JSON.stringify({"p":"brc-20","op":"deploy","tick":"bc1p","amt":"1000"});

async function commitTest() {
    var request = {
        commitTxPrevOutputList: [
            {
                "txId": "e420ea4193eef7114501e3533dccc83acff50476fc136440a8a68b17c2d1dc50",
                "vOut": 0,
                "amount": 50000000,
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



async function ltcInscribeTest() {
    var contentType = "text/plain;charset=utf-8";
    var body = JSON.stringify({"p":"ltc-20","op":"deploy","tick":"pony","max":"210000000000", "lim": "21000"});
    var ltcWifPriv = wif.encode(0xb0, Buffer.from("486403caef2ef30e6653d024e90b9d158dcac0845d5bbfd1210e15b7c7490720","hex"))
    console.log(ltcWifPriv)
    var request = {
        commitTxPrevOutputList: [
            {
                "txId": "63d77267936ec7e7ce36dbc849f9a12eb4fad7beadc3b362b2b17083e4089c08",
                "vOut": 1,
                "amount": 1156881,
                "address": "LQWv8XDvQXfrFCbJVRZsiW6jkTTzjZ4nd9",
                "privateKey": ltcWifPriv
            }
        ],
        commitFeeRate: 1,
        revealFeeRate: 1,
        inscriptionDataList: [
            {
                contentType: contentType,
                body: body,
                revealAddr: "LQWv8XDvQXfrFCbJVRZsiW6jkTTzjZ4nd9"
            }
        ],
        revealOutValue: 100000,
        changeAddress: "LQWv8XDvQXfrFCbJVRZsiW6jkTTzjZ4nd9",
        revealOutValue: 10000,
        serviceFeeAddress: null,
        serviceFee: 0

    }
    console.log(request)
    var res = gateLib.inscribe(gateLib.litecoin, request);
    console.log(res);
}


async function arc20Test() {
    var request = {
        commitTxPrevOutputList: [
            {
                "txId": "9087b54385272f774cce65fdcf82e9ff98c555f731972dca53d4c9512f3ad5e9",
                "vOut": 1,
                "amount": 90339933,
                "address": "bc1pn0rj965rkrza764uq8tjz5qtj3qpz46a73z65sddekhztnxxg38q750km9",
                "privateKey": "KyWBEeYWEqWuW1UsARwUdrrvskeRBqxJMwnarvQMRQP2oPomLZyR"
            }
        ],
        commitFeeRate: 15,
        revealFeeRate: 15,
        inscriptionDataList: [
            {
                contentType: "dft",
                body: JSON.stringify({"name":"weixuefng","description":"pony test arc20","decimals":0,"links":{"a":"https://weixuefeng.github.io"},"legal":{"terms":"MIT"},"issuer":{},"args":{"mint_amount":10000,"mint_height":0,"max_mints":1000,"mint_bitworkc":"1322","mint_bitworkr":"2561","request_ticker":"xxww","bitworkc":"8890","nonce":2726692,"time":1703662366}}),
                revealAddr: "bc1pn0rj965rkrza764uq8tjz5qtj3qpz46a73z65sddekhztnxxg38q750km9"
            }
        ],
        revealOutValue: dust,
        changeAddress: "bc1pn0rj965rkrza764uq8tjz5qtj3qpz46a73z65sddekhztnxxg38q750km9",
        serviceFeeAddress: serviceFeeAddress,
        serviceFee: 0

    }
    console.log(request)
    var res = gateLib.inscribeArc20(gateLib.networks.bitcoin, request);
    console.log(res);
}

arc20Test()

// a: 01000000000101e9d53a2f51c9d453ca2d9731f755c598ffe982cffd65ce4c772f278543b5879001000000009b96244902ad0d000000000000225120ae0ec0716bd7240ea1b7f05629f1add64f8a8a504e530302f1a63d1dc7556e91aa636205000000002251209bc722ea83b0c5df6abc01d721500b944011575df445aa41adcdae25ccc6444e0140b9badd440b04b9c30b498e9cd1a61a4ba729a068fb837287856ecf617e6689213fd96552919cad8b3b0269edbf0d0cd46f01c1c28d8d2bd0ff97e6fd6855b65300000000
// w: 02000000000101e9d53a2f51c9d453ca2d9731f755c598ffe982cffd65ce4c772f278543b587900100000000fdffffff02ad0d000000000000225120ae0ec0716bd7240ea1b7f05629f1add64f8a8a504e530302f1a63d1dc7556e91aa636205000000002251209bc722ea83b0c5df6abc01d721500b944011575df445aa41adcdae25ccc6444e0140d15e6f0c6bf2afc12f462f97d86f83842f592d05e2966ebae8f5e179b89bb83dccbbbbd905e091214521c1234d50cadd6030849d92c94a5610fe1c828eb7e6f100000000