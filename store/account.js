export const state = () => ({
    info: {}
})

export const mutations = {
    setAccountInfo(state, accountInfo) {
        state.info = accountInfo;
    }
}