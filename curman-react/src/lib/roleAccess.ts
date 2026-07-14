const ROLE_ACCESS_KEY = 'roleAccessGranted'
const ROLE_ACCESS_CODE = 'CML2025'

export function isRoleAccessGranted() {
  if (typeof window === 'undefined') return false
  return window.sessionStorage.getItem(ROLE_ACCESS_KEY) === 'true'
}

export function grantRoleAccess(code: string) {
  if (code.trim() !== ROLE_ACCESS_CODE || typeof window === 'undefined') return false
  window.sessionStorage.setItem(ROLE_ACCESS_KEY, 'true')
  return true
}

export function revokeRoleAccess() {
  if (typeof window === 'undefined') return
  window.sessionStorage.removeItem(ROLE_ACCESS_KEY)
}
