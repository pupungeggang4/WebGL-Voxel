class Render {
    static init(program) {
        let gl = program.gl
        let glVar = program.glVar
        gl.enable(gl.DEPTH_TEST)
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        gl.useProgram(glVar.program)
        gl.bindVertexArray(glVar.vao.cube)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer)
        gl.uniform3f(glVar.location.u_color, 1.0, 0.0, 0.0)
        gl.drawArrays(gl.TRIANGLES, 0, 12)
        gl.uniform3f(glVar.location.u_color, 0.0, 1.0, 0.0)
        gl.drawArrays(gl.TRIANGLES, 12, 12)
        gl.uniform3f(glVar.location.u_color, 0.0, 0.0, 1.0)
        gl.drawArrays(gl.TRIANGLES, 24, 12)
    }
}
