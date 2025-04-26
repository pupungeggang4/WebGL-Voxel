let program

class Program {
    constructor() {
        this.scene = 'main'
        this.state = ''
        this.menu = false

        this.keyMap = {
            'left': 'a', 'right': 'd', 'up': ' ', 'down': 'x', 'forward': 'w', 'backward': 's',
            'c_left': 'ArrowLeft', 'c_right': 'ArrowRight', 'c_down': 'ArrowDown', 'c_up': 'ArrowUp',
        }
        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false, 'forward': false, 'backward': false,
            'c_left': false, 'c_right': false, 'c_up': false, 'c_down': false,
        }
        this.voxel = [
            [-0.01, -0.05, -0.10, 0.7, 0.7, 0.0],
            [0.00, -0.05, -0.10, 0.7, 0.7, 0.0],
            [0.01, -0.05, -0.10, 0.7, 0.7, 0.0],
            [-0.02, -0.05, -0.11, 0.7, 0.7, 0.0],
            [-0.01, -0.05, -0.11, 1.0, 1.0, 0.0],
            [0.00, -0.05, -0.11, 1.0, 1.0, 0.0],
            [0.01, -0.05, -0.11, 1.0, 1.0, 0.0],
            [0.02, -0.05, -0.11, 0.7, 0.7, 0.0],
            [-0.03, -0.05, -0.12, 0.7, 0.7, 0.0],
            [-0.02, -0.05, -0.12, 1.0, 1.0, 0.0],
            [-0.01, -0.05, -0.12, 1.0, 1.0, 0.7],
            [0.00, -0.05, -0.12, 1.0, 1.0, 0.7],
            [0.01, -0.05, -0.12, 1.0, 1.0, 0.7],
            [0.02, -0.05, -0.12, 1.0, 1.0, 0.0],
            [0.03, -0.05, -0.12, 0.7, 0.7, 0.0],
            [-0.03, -0.05, -0.13, 0.7, 0.7, 0.0],
            [-0.02, -0.05, -0.13, 1.0, 1.0, 0.0],
            [-0.01, -0.05, -0.13, 1.0, 1.0, 0.7],
            [0.00, -0.05, -0.13, 1.0, 1.0, 0.0],
            [0.01, -0.05, -0.13, 1.0, 1.0, 0.0],
            [0.02, -0.05, -0.13, 1.0, 1.0, 0.0],
            [0.03, -0.05, -0.13, 0.7, 0.7, 0.0],
            [-0.03, -0.05, -0.14, 0.7, 0.7, 0.0],
            [-0.02, -0.05, -0.14, 1.0, 1.0, 0.0],
            [-0.01, -0.05, -0.14, 1.0, 1.0, 0.7],
            [0.00, -0.05, -0.14, 1.0, 1.0, 0.7],
            [0.01, -0.05, -0.14, 1.0, 1.0, 0.7],
            [0.02, -0.05, -0.14, 1.0, 1.0, 0.0],
            [0.03, -0.05, -0.14, 0.7, 0.7, 0.0],
            [-0.02, -0.05, -0.15, 0.7, 0.7, 0.0],
            [-0.01, -0.05, -0.15, 1.0, 1.0, 0.0],
            [0.00, -0.05, -0.15, 1.0, 1.0, 0.0],
            [0.01, -0.05, -0.15, 1.0, 1.0, 0.0],
            [0.02, -0.05, -0.15, 0.7, 0.7, 0.0],
            [-0.01, -0.05, -0.16, 0.7, 0.7, 0.0],
            [0.00, -0.05, -0.16, 0.7, 0.7, 0.0],
            [0.01, -0.05, -0.16, 0.7, 0.7, 0.0],

        ]
        this.camera = new Camera3D()
        this.facing = new Vector3D(0, 0, -1)

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
        this.HUD = document.getElementById('hud')
        this.ctx = this.HUD.getContext('2d')
        GL.glInit(this)

        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.HUD.addEventListener('mousedown', (event) => this.mouseDown(event), false)
        this.HUD.addEventListener('mousemove', (event) => this.mouseMove(event), false)
        this.HUD.addEventListener('mouseup', (event) => this.mouseUp(event), false)

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

        for (let k in this.keyMap) {
            if (key === this.keyMap[k]) {
                this.keyPressed[k] = true
            }
        }

        if (this.scene === 'main') {
            SceneMain.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        for (let k in this.keyMap) {
            if (key === this.keyMap[k]) {
                this.keyPressed[k] = false
            }
        }

        if (this.scene === 'main') {
            SceneMain.keyUp(this, key)
        }
    }

    mouseDown(event) {

    }

    mouseMove(event) {

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
