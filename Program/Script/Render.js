class Render {
    static init(program) {
        let gl = program.gl
        let glVar = program.glVar
        gl.enable(gl.DEPTH_TEST)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.lineWidth(5)

        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

        gl.useProgram(glVar.program)
        gl.bindVertexArray(glVar.vao.cube)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer)
        
        gl.uniform1fv(glVar.location.u_camera, [-16.0, 16.0, -10.0, 10.0, -10.0, 10.0])
        gl.uniform1fv(glVar.location.u_camera_p, [1, 1/1.6, 1, 100])
        gl.uniform3f(glVar.location.u_cam_pos, program.camera.position.x, program.camera.position.y, program.camera.position.z)
        gl.uniform3f(glVar.location.u_cam_rot, program.camera.rotation.x, program.camera.rotation.y, program.camera.rotation.z)
        
        for (let i = 0; i < program.voxel.length; i++) {
            gl.uniform3f(glVar.location.u_m_pos, program.voxel[i][0], program.voxel[i][1], program.voxel[i][2])
            gl.uniform3f(glVar.location.u_color, program.voxel[i][3], program.voxel[i][4], program.voxel[i][5])
            gl.drawArrays(gl.TRIANGLES, 0, 36)
            gl.uniform3f(glVar.location.u_m_pos, program.voxel[i][0], program.voxel[i][1], program.voxel[i][2])
            gl.uniform3f(glVar.location.u_color, 1.0, 0.0, 0.0)
            gl.drawArrays(gl.LINES, 36, 24)
        }
    }

    static HUDInit(program) {
        program.ctx.font = '32px neodgm'
        program.ctx.textAlign = 'left'
        program.ctx.textBaseline = 'top'
        program.ctx.fillStyle = 'Yellow'
        program.ctx.clearRect(0, 0, 1280, 800)
    }
}
