const express = require('express');
const tituloRoutes = require('./src/titulo/routes');
const professorRoutes = require('./src/professor/routes');
const instituicaoRoutes = require('./src/instituicao/routes');
const tipoCursoRoutes = require('./src/tipo_curso/routes');
const tipoDisciplinaRoutes = require('./src/tipo_disciplina/routes');
const cursoRoutes = require('./src/curso/routes');
const disciplinaRoutes = require('./src/disciplina/routes');
const lecionaRoutes = require('./src/leciona/routes');
const alunoRoutes = require('./src/aluno/routes');
const cursaRoutes = require('./src/cursa/routes');
const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use('/titulo', tituloRoutes)
app.use('/professor', professorRoutes)
app.use('/instituicao', instituicaoRoutes)
app.use('/tipocurso', tipoCursoRoutes)
app.use('/tipodisciplina', tipoDisciplinaRoutes)
app.use('/curso', cursoRoutes)
app.use('/disciplina', disciplinaRoutes)
app.use('/leciona', lecionaRoutes)
app.use('/aluno', alunoRoutes)
app.use('/cursa', cursaRoutes)

app.listen(port, () => console.log(`api rodando na porta ${port}`))