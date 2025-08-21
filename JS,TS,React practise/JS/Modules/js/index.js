document.addEventListener("DOMContentLoaded", async function () {
    const loader = await import ('./loader.js')
    loader.showLoader()
    const storagePage = await import ('./storagePage.js')
    storagePage.default()
})