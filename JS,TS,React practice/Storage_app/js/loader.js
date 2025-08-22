import {getLoaderEl} from './components.js'

export function showLoader() {
    const loader = getLoaderEl()
    document.body.append(loader)
}

export function removeLoader() {
    const loader = getLoaderEl()
    if (loader) {
        loader.remove()
    }
}