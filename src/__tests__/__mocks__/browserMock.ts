const localStorageMock = (function() {
    let store : {[key: string]: string} = {}

    return {
        getItem: jest.fn().mockImplementation(function(key: string) {
            return store[key] || null
        }),
        setItem: jest.fn().mockImplementation(function(key: string, value: string) {
            store[key] = value.toString()
        }),
        removeItem: jest.fn().mockImplementation(function(key: string) {
            delete store[key]
        }),
        clear: jest.fn().mockImplementation(function() {
            store = {}
        })
    }
})()

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
})

export default localStorageMock