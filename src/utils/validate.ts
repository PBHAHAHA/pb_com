/**
 * 判断是否是外部资源
 * @param {*} path
 */
export function isExteral(path: any) {
  return /^(https?:|mailto:|tel:)/.test(path)
}