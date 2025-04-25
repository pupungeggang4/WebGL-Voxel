const shaderSourceVertex = `#version 300 es
    in vec3 v_coord;
    uniform float u_camera[6];
    uniform vec3 u_cam_pos;
    uniform vec4 u_cam_rot;

    void main() {
        vec4 coord = vec4(v_coord, 1.0);
        float l = u_camera[0];
        float r = u_camera[1];
        float b = u_camera[2];
        float t = u_camera[3];
        float n = u_camera[4];
        float f = u_camera[5];
        mat4 ct = mat4(
            1.0, 0.0, 0.0, -u_cam_pos.x,
            0.0, 1.0, 0.0, -u_cam_pos.y,
            0.0, 0.0, 1.0, -u_cam_pos.z,
            0.0, 0.0, 0.0, 1.0
        );
        mat4 proj = mat4(
            2.0/(r-l), 0.0, 0.0, -(r+l)/(r-l),
            0.0, 2.0/(t-b), 0.0, -(t+b)/(t-b),
            0.0, 0.0, -2.0/(f-n), -(f+n)/(f-n),
            0.0, 0.0, 0.0, 1.0
        );
        coord = proj * (ct * coord);
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
