class Vector3D {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

class Cuboid3D {
    constructor(x, y, z, w, h, d) {
        this.position = new Vector3D(x, y, z)
        this.size = new Vector3D(w, h, d)
    }
}
