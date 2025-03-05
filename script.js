function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    const isMobile = window.innerWidth <= 768

    if (html.classList.contains('light')) {
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