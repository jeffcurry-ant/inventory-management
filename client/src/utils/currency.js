// Currency conversion utility
// USD to JPY exchange rate (approximate)
const USD_TO_JPY = 150

// 万 (man) = 10,000 · 億 (oku) = 100,000,000 — standard Japanese large-number units.
// Japanese groups digits in ten-thousands, not thousands, so ¥4,675,027,963 reads
// naturally as 46.8億円 rather than a comma-separated string.
function formatYenWithUnits(yenAmount) {
  const OKU = 100_000_000
  const MAN = 10_000

  if (yenAmount >= OKU) {
    const oku = yenAmount / OKU
    return `¥${oku.toLocaleString('ja-JP', { maximumFractionDigits: 1 })}億`
  }
  if (yenAmount >= MAN) {
    const man = yenAmount / MAN
    return `¥${man.toLocaleString('ja-JP', { maximumFractionDigits: 1 })}万`
  }
  return `¥${yenAmount.toLocaleString('ja-JP')}`
}

export function formatCurrency(amount, currency = 'USD') {
  if (currency === 'JPY') {
    const yenAmount = Math.round(amount * USD_TO_JPY)
    return formatYenWithUnits(yenAmount)
  }
  // Default USD
  return `$${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
}

export function formatCurrencyWithDecimals(amount, currency = 'USD', decimals = 0) {
  if (currency === 'JPY') {
    const yenAmount = Math.round(amount * USD_TO_JPY)
    return formatYenWithUnits(yenAmount)
  }
  // Default USD
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`
}

export function convertAmount(amount, currency = 'USD') {
  if (currency === 'JPY') {
    return Math.round(amount * USD_TO_JPY)
  }
  return amount
}
