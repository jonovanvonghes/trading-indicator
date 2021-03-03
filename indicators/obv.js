const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const obv = async (ex, ticker, interval, isFuture = false, limit = 500) => {
    try {
        let ohlcv = await getOHLCV(ex, ticker, interval, isFuture, limit)
        let source = detachSource(ohlcv)
        let obvInput = {
            close: source['close'],
            volume: source['volume']
        }
        return await indicators.OBV.calculate(obvInput)
    } catch (err) {
        throw (err)
    }
}
module.exports = obv
