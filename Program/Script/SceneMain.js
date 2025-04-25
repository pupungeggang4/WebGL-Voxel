class SceneMain {
    static loop(program) {
        this.render(program)
        if (program.state === '') {
            this.cameraMove(program)
        }
    }

    static render(program) {
        Render.init(program)
        Render.HUDInit(program)
        program.ctx.fillText(`x:${program.camera.position.x.toFixed(1)} y:${program.camera.position.y.toFixed(1)} z:${program.camera.position.z.toFixed(1)}`, 24, 24)
    }

    static mouseUp(program, pos, button) {

    }

    static keyDown(program, key) {
        
    }

    static keyUp(program, key) {

    }

    static cameraMove(program) {
        if (program.keyPressed['left'] === true) {
            program.camera.position.x -= program.camera.speed * program.delta / 1000
        }
        if (program.keyPressed['right'] === true) {
            program.camera.position.x += program.camera.speed * program.delta / 1000
        }
        if (program.keyPressed['up'] === true) {
            program.camera.position.z -= program.camera.speed * program.delta / 1000
        }
        if (program.keyPressed['down'] === true) {
            program.camera.position.z += program.camera.speed * program.delta / 1000
        }
        if (program.keyPressed['c_left'] === true) {
            program.camera.rotation.y += 90 * Math.PI / 180 * program.delta / 1000
        }
        if (program.keyPressed['c_right'] === true) {
            program.camera.rotation.y -= 90 * Math.PI / 180 * program.delta / 1000
        }
        if (program.keyPressed['c_up'] === true) {
            program.camera.rotation.x += 90 * Math.PI / 180 * program.delta / 1000
        }
        if (program.keyPressed['c_down'] === true) {
            program.camera.rotation.x -= 90 * Math.PI / 180 * program.delta / 1000
        }

    }
}
