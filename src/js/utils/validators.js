export function validateName(value) {
  const re = /[a-z0-9\s]{2,}/gi
  return re.test(value)
}

export function validateEmail(value) {
  const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(value)
}

export function validateCreditCard(value) {
  const numbersOnly = value.replace(/[^0-9]/gi, '')
  const re = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  return re.test(numbersOnly)
}

export function validateMonth(value) {
  const re = /^(0[1-9]|1[012])$/
  return re.test(value)
}

export function validateYear(value) {
  const re = /^[0-9]{4}$/
  const date = new Date()

  return re.test(value) && value >= date.getUTCFullYear()
}
export function validateCVV(value) {
  const re = /^[0-9]{3}$/
  return re.test(value)
}
