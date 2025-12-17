// src/utils/response.ts
export function success(data: any, message = 'Success') {
  return { status: 'success', message, data }
}

export function error(message = 'Error', code = 400) {
  return { status: 'error', message, code }
}
