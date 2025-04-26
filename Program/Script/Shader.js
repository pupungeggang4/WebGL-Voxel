const shaderSourceVertex = `#version 300 es
    in vec3 v_coord;
    uniform float u_camera[6];
    uniform float u_camera_p[4];
    uniform vec3 u_cam_pos;
    uniform vec3 u_cam_rot;
    uniform vec3 u_m_pos;

    void main() {
        vec4 coord = vec4(v_coord, 1.0);
        float l = u_camera[0];
        float r = u_camera[1];
        float b = u_camera[2];
        float t = u_camera[3];
        float n = u_camera[4];
        float f = u_camera[5];
        float fov = u_camera_p[0];
        float a = u_camera_p[1];
        float near = u_camera_p[2];
        float far = u_camera_p[3];
        mat4 mt = mat4(
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            u_m_pos.x, u_m_pos.y, u_m_pos.z, 1.0
        );
        mat4 ms = mat4(
            0.01, 0.0, 0.0, 0.0,
            0.0, 0.01, 0.0, 0.0,
            0.0, 0.0, 0.01, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        mat4 ct = mat4(
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -u_cam_pos.x, -u_cam_pos.y, -u_cam_pos.z, 1.0
        );
        mat4 crx = mat4(
            1.0, 0.0, 0.0, 0.0,
            0.0, cos(-u_cam_rot.x), sin(-u_cam_rot.x), 0.0,
            0.0, -sin(-u_cam_rot.x), cos(-u_cam_rot.x), 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        mat4 cry = mat4(
            cos(-u_cam_rot.y), 0.0, -sin(-u_cam_rot.y), 0.0,
            0.0, 1.0, 0.0, 0.0,
            sin(-u_cam_rot.y), 0.0, cos(-u_cam_rot.y), 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        mat4 proj = mat4(
            2.0/(r-l), 0.0, 0.0, 0.0,
            0.0, 2.0/(t-b), 0.0, 0.0,
            0.0, 0.0, -2.0/(f-n), 0.0,
            -(r+l)/(r-l), -(t+b)/(t-b), -(f+n)/(f-n), 1.0
        );
        mat4 pproj = mat4(
            a/tan(fov/2.0), 0.0, 0.0, 0.0,
            0.0, 1.0/tan(fov/2.0), 0.0, 0.0,
            0.0, 0.0, (near+far)/(near-far), -1.0,
            0.0, 0.0, (2.0*near*far)/(near-far), 0.0
        );
        coord = pproj * crx * cry * ct * mt * ms * coord;
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
