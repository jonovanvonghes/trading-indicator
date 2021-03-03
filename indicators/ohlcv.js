const ccxt = require("ccxt")
const getOHLCV = async (ex, ticker, interval, isFuture = false, limit = 500) => {
    if (!ccxt.exchanges.includes(ex)) {

        throw ('Exchange is not supported')
    }
    try {
        let exchangeId = ex,
            exchangeClass = ccxt[exchangeId]

        let exchange
        if (isFuture) {

            exchange = new exchangeClass({
                options: {
                    defaultType: 'future'
                }
            })
        } else {
            exchange = new exchangeClass({})
        }
		return await exchange.fetchOHLCV(ticker, interval, undefined, limit);
    } catch (err) {
        throw ('Ticker is not supported')
    }
}
// console.log(getOHLCV("binance", "BTC/USDT", "15m", true))
module.exports = getOHLCV
