export function getUnitAll(
    user: string
) {
  return `/v1/unidade/usuario/${3}` as const
}
  
export function getLineAll(
    user: string,
    unit: number
) {
  return `/v1/linha/usuario/${3}/${unit}` as const
}
  