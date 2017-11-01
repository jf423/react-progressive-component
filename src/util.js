/* global Image */
export default function imageHandler(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(src);
        image.onerror = err => reject(err);
    });
}
