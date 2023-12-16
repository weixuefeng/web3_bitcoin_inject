
    class TextEncoder {
      encode(str) {
        const buf = new ArrayBuffer(str.length);
        const bufView = new Uint8Array(buf);
        for (let i = 0; i < str.length; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return bufView;
      }
    }
    // 将 TextEncoder 添加到全局作用域
    globalThis.TextEncoder = TextEncoder;

globalThis.self = globalThis;
gateLib = require("@okxweb3/coin-bitcoin")
module.exports = gateLib;