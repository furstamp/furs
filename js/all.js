// desativando o clique direito
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0); 
}

// desativando o F12, ctrl+shift+i, ctrl+shift+j e o ctrl+u
// inspecionar elementos, source code e console
document.onkeydown = (e) => {
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') || // ctrl + shift + i
        ctrlShiftKey(e, 'J') || // ctrl + shift + i
        ctrlShiftKey(e, 'C') || // ctrl + shift + c
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // ctrl + u
    ) return false;
};