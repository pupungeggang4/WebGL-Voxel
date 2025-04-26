class Camera3D {
    constructor() {
        this.position = new Vector3D(0, 0, 0)
        this.rotation = new Vector3D(0, 0, 0),
        this.speed = 0.2
    }
}

class VoxelModel3D {
    constructor(pos, size) {
        this.cuboid = new Cuboid3D(pos[0], pos[1], pos[2], size[0], size[1], size[2])
    }

    render(program) {

    }
}
