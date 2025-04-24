let program

class Program {
    constructor() {
        this.scene = 'main'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.gl = this.canvas.getContext('webgl2')
        this.glVar = {
            program: {},
            shader: {
                vertex: {},
                fragment: {},
            },
            location: {
                
            },
            buffer: {},
            vao: {
                
            }
        }
        this.HUD = document.createElement('canvas')
        this.ctx = this.HUD.getContext('2d')
        GL.glInit(this)

        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.programLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'main') {
            SceneMain.loop(this)
        }

        this.programLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key

        if (this.scene === 'main') {
            SceneMain.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'main') {
            SceneMain.keyUp(this, key)
        }
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'main') {
            SceneMain.mouseUp(this, pos, button)
        }
    }
}
