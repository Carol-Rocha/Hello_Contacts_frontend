export const formatPhoneNumber = (input: { value: string }) => {
  const value = input.value.replace(/\D/g, '')
  if (value.length <= 2) {
    input.value = value
  } else if (value.length <= 7) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7
    )}`
  }
}
