window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    program = new Program()
}

function errorHandle(err, url, line, col, obj) {
    cancelAnimationFrame(program.programLoop)
}

function rightClick() {
    return false
}
