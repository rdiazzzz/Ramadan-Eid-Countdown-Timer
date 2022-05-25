const updateOnlineStatus = () => {
    document.getElementById('status').innerHTML = navigator.onLine ? 'yes' : 'no'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()