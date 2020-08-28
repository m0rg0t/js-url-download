/**
 * Open browser download dialog using <a> dwnload attribute
 * @param fileUrl - url to file we want to download
 * @param filename - optionla filename with which we should save file
 */
export default function urlDownload(fileUrl, filename = '') {
    var tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = fileUrl;
    tempLink.setAttribute('download', filename || fileUrl);

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.npm install --save-dev eslint
    if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
    }

    document.body.appendChild(tempLink);
    tempLink.click();

    setTimeout(function () {
        document.body.removeChild(tempLink);
    }, 200)
}
