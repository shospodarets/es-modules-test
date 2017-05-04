let dynamicImportSupported = false;

try {
    Function('import("")');
    dynamicImportSupported = true;
} catch (err) {
}

if (dynamicImportSupported) {
    document.body.classList.add('dynamic-import-yes');
} else {
    document.body.classList.add('dynamic-import-no');
}