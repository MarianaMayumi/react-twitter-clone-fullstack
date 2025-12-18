export function csrfToken() {
  const el = document.querySelector('meta[name="csrf-token"]')
  return el && el.content
}

export function authenticityHeader() {
  return { 'X-CSRF-Token': csrfToken() }
}

export function safeCredentials(options = {}) {
  return Object.assign({
    credentials: 'include',
    headers: Object.assign({ 'Content-Type': 'application/json' }, authenticityHeader())
  }, options)
}

export function safeCredentialsFormData(options = {}) {
  return Object.assign({
    credentials: 'include',
    headers: Object.assign({}, authenticityHeader())
  }, options)
}
