const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const ema = async (emaLength, sourceType, ex, ticker, interval, isFuture = false, limit = 500, source = []) => {
    try {
        if (source['open'] == undefined){
            let ohlcv = await getOHLCV(ex, ticker, interval, isFuture, limit)
            source = detachSource(ohlcv)
        }
        let emaInput = {
            values: source[sourceType],
            period: emaLength
        }
        return await indicators.EMA.calculate(emaInput)
    } catch (err) {
        throw (err)
    }
}
module.exports = ema
