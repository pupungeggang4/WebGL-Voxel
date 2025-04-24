const shaderSourceVertex = `#version 300 es
    in vec3 v_coord;
    uniform float u_camera[6];

    void main() {
        vec4 coord = vec4(v_coord, 1.0);
        float l = u_camera[0];
        float r = u_camera[1];
        float b = u_camera[2];
        float t = u_camera[3];
        float n = u_camera[4];
        float f = u_camera[5];
        coord = mat4(
            1.0, 0.0, 0.0, 0.0,
            0.0, 0.96, -0.28, 0.0,
            0.0, 0.28, 0.96, 0.0,
            0.0, 0.0, 0.0, 1.0
        ) * coord;
        //coord = mat4(
            //0.6, 0.0, 0.8, 0.0,
            //0.0, 1.0, 0.0, 0.0,
            //-0.8, 0.0, 0.6, 0.0,
            //0.0, 0.0, 0.0, 1.0
        //) * coord;
        coord = mat4(
            2.0/(r-l), 0.0, 0.0, -(r+l)/(r-l),
            0.0, 2.0/(t-b), 0.0, -(t+b)/(t-b),
            0.0, 0.0, -2.0/(f-n), -(f+n)/(f-n),
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
