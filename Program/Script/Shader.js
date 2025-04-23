const shaderSourceVertex = `#version 300 es
    in vec3 v_coord;

    void main() {
        gl_Position = vec4(v_coord, 1.0);
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