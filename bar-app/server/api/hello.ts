import { useHelloWorld } from "~~/server/helper/useHelloWorld"

export default defineEventHandler((event) => {
  return {message: useHelloWorld()}
})
