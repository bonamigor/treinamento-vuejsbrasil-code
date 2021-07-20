import { reactive } from 'vue'

const state = reactive({
  currentUser: {}
})

export default state

export const cleanCurrentUser = () => {
  state.currentUser = {}
}

export const setCurrentUser = (user) => {
  state.currentUser = user
}

export const setApiKey = (apiKey) => {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
