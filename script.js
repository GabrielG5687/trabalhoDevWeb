function toggleMode() {
    const html = document.documentElement
    const isLightMode = html.classList.toggle('light')

    localStorage.setItem('theme', isLightMode ? 'light' : 'dark')

    const img = document.querySelector("#profile img")
    const isMobile = window.innerWidth <= 768

    if (isLightMode) {
        img.setAttribute('src', 'assets/assets/avatar-light.png')
        if (isMobile) {
            document.body.style.backgroundImage = "url('assets/assets/bg-mobile-light.jpg')"
        } else {
            document.body.style.backgroundImage = "url('assets/assets/bg-desktop-light.jpg')"
        }
    } else {
        img.setAttribute('src', 'assets/assets/avatar.png')
        if (isMobile) {
            document.body.style.backgroundImage = "url('assets/assets/bg-mobile.jpg')"
        } else {
            document.body.style.backgroundImage = "url('assets/assets/bg-desktop.jpg')"
        }
    }
}

function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
        const html = document.documentElement
        const isMobile = window.innerWidth <= 768

        if (storedTheme === 'light') {
            html.classList.add('light')
            document.querySelector("#profile img").setAttribute('src', 'assets/assets/avatar-light.png')
            if (isMobile) {
                document.body.style.backgroundImage = "url('assets/assets/bg-mobile-light.jpg')"
            } else {
                document.body.style.backgroundImage = "url('assets/assets/bg-desktop-light.jpg')"
            }
        } else {
            html.classList.remove('light')
            document.querySelector("#profile img").setAttribute('src', 'assets/assets/avatar.png')
            if (isMobile) {
                document.body.style.backgroundImage = "url('assets/assets/bg-mobile.jpg')"
            } else {
                document.body.style.backgroundImage = "url('assets/assets/bg-desktop.jpg')"
            }
        }
    }
}

// Apply the stored theme on page load
document.addEventListener('DOMContentLoaded', applyStoredTheme)