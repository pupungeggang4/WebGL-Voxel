class GL {
    static glInit(program) {
        let gl = program.gl
        let glVar = program.glVar

        glVar.shader.vertex = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(glVar.shader.vertex, shaderSourceVertex)
        gl.compileShader(glVar.shader.vertex)
        glVar.shader.fragment = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(glVar.shader.fragment, shaderSourceFragment)
        gl.compileShader(glVar.shader.fragment)
        glVar.program = gl.createProgram()
        gl.attachShader(glVar.program, glVar.shader.vertex)
        gl.attachShader(glVar.program, glVar.shader.fragment)
        gl.linkProgram(glVar.program)

        glVar.location.v_coord = gl.getAttribLocation(glVar.program, 'v_coord')
        glVar.location.u_color = gl.getUniformLocation(glVar.program, 'u_color')

        glVar.vao.cube = gl.createVertexArray()
        gl.bindVertexArray(glVar.vao.cube)
        glVar.buffer = gl.createBuffer(gl.ARRAY_BUFFER)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer)
        gl.enableVertexAttribArray(glVar.location.v_coord)
        gl.vertexAttribPointer(glVar.location.v_coord, 3, gl.FLOAT, false, 0, 0)
        gl.bufferData(gl.ARRAY_BUFFER, cubeVAO, gl.STATIC_DRAW)
    }

    static convertToBuffer(data) {
        
    }
}
