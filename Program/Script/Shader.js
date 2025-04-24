const shaderSourceVertex = `#version 300 es
    in vec3 v_coord;

    void main() {
        vec4 coord = vec4(v_coord, 1.0);
        coord = mat4(
            0.6, 0.0, 0.8, 0.0,
            0.0, 1.0, 0.0, 0.0,
            -0.8, 0.0, 0.6, 0.0,
            0.0, 0.0, 0.0, 1.0
        ) * coord;
        coord = mat4(
            1.0, 0.0, 0.0, 0.0,
            0.0, 0.8, -0.6, 0.0,
            0.0, 0.6, 0.8, 0.0,
            0.0, 0.0, 0.0, 1.0
        ) * coord;
        gl_Position = coord;
    }
`

const shaderSourceFragment = `#version 300 es
    precision highp float;
    uniform vec3 u_color;
    out vec4 o_color;

    void main() {
        o_color = vec4(u_color, 1.0);
    }
`
