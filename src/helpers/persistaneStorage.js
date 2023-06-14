const localStore = {
    getItem(key) {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (err) {
            console.log('ERR in getting data in localStore', err)
            return null
        }
    },
    setItem(key, item) {
        try {
            localStorage.setItem(key, JSON.stringify(item))
        } catch (err) {
            console.log('ERR in saving data in localStore', err)
        }
    },
    removeItem(key) {
        try {
            localStorage.removeItem(key)
        } catch (err) {
            console.log('ERR in removing data in localStore', err)
        }
    },
}

export default localStore
