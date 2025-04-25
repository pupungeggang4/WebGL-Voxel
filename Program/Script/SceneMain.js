class SceneMain {
    static loop(program) {
        this.render(program)
    }

    static render(program) {
        Render.init(program)
        Render.HUDInit(program)
        program.ctx.fillText(program.pointer, 24, 24)
    }

    static mouseUp(program, pos, button) {

    }

    static keyDown(program, key) {

    }

    static keyUp(program, key) {

    }
}
