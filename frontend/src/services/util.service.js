export const utilService = {
    saveToStorage,
    loadFromStorage,
    debounce,
    makeId,
    getPercentage,
    handleKeydown
}

// Local Storage

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

// Optimization

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

// ID

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

// MATH

function getPercentage(part, total) {
    if (total === 0) {
        return 0
    }
    return (part / total) * 100
}

// Event handling

function handleKeydown(event, keyType, callBack) {
    console.log('event.key: ', event.key)
    if (event.key === keyType) {
        callBack(event)
    }
}

