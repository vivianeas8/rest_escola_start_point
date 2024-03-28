create table titulo(
id_titulo SERIAL,
tx_descricao VARCHAR(150) not null unique,
primary key (id_titulo)
);

insert into titulo(tx_descricao) values 
('Título Descrição 1'), 
('Título Descrição 2'), 
('Título Descrição 3'), 
('Título Descrição 4'), 
('Título Descrição 5'), 
('Título Descrição 6'), 
('Título Descrição 7'), 
('Título Descrição 8'), 
('Título Descrição 9'), 
('Título Descrição 10')
select * from titulo

create table professor(
id_professor SERIAL,
id_titulo INTEGER,
tx_nome VARCHAR(50),
tx_sexo CHAR(1),
tx_estado_civil CHAR(1),
dt_nascimento DATE,
tx_telefone VARCHAR(13),
primary key (id_professor),
constraint fk_titulo foreign key (id_titulo) references titulo(id_titulo)
);

insert into professor (id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone) values
(1, 'Professor 1', 'm', 's', '1985-02-15', '1234567890'),
(2, 'Professor 2', 'f', 'c', '1986-03-05', '1234567890'),
(3, 'Professor 3', 'm', 'd', '1987-04-25', '1234567890'),
(4, 'Professor 4', 'f', 's', '1988-05-10', '1234567890'),
(5, 'Professor 5', 'm', 'c', '1989-06-21', '1234567890'),
(6, 'Professor 6', 'f', 'd', '1991-07-30', '1234567890'),
(7, 'Professor 7', 'm', 's', '1984-08-01', '1234567890'),
(8, 'Professor 8', 'f', 'c', '1983-09-02', '1234567890'),
(9, 'Professor 9', 'm', 'd', '1982-10-14', '1234567890'),
(10, 'Professor 10', 'f', 's', '1981-11-15', '1234567890')
select p.id_professor, p.tx_nome, p.tx_sexo, p.tx_estado_civil, p.dt_nascimento, p.tx_telefone, t.tx_descricao from professor p join titulo t on p.id_titulo = t.id_titulo 

create table instituicao(
id_instituicao SERIAL,
tx_sigla VARCHAR(15) not null unique,
tx_descricao VARCHAR(150) not null unique,
primary key (id_instituicao)
);

insert into instituicao(tx_sigla,  tx_descricao) values
('INST1', 'Instituição Descrição 1'),
('INST2', 'Instituição Descrição 2'),
('INST3', 'Instituição Descrição 3'),
('INST4', 'Instituição Descrição 4'),
('INST5', 'Instituição Descrição 5'),
('INST6', 'Instituição Descrição 6'),
('INST7', 'Instituição Descrição 7'),
('INST8', 'Instituição Descrição 8'),
('INST9', 'Instituição Descrição 9'),
('INST10', 'Instituição Descrição 10')
select * from instituicao 

create table tipo_curso(
id_tipo_curso SERIAL,
tx_descricao VARCHAR(150) not null unique,
primary key (id_tipo_curso)
);

insert into tipo_curso(tx_descricao) values
('Tipo Curso Descrição 1'),
('Tipo Curso Descrição 2'),
('Tipo Curso Descrição 3'),
('Tipo Curso Descrição 4'),
('Tipo Curso Descrição 5'),
('Tipo Curso Descrição 6'),
('Tipo Curso Descrição 7'),
('Tipo Curso Descrição 8'),
('Tipo Curso Descrição 9'),
('Tipo Curso Descrição 10')
select * from tipo_curso 

create table curso(
id_curso SERIAL,
id_instituicao INTEGER,
id_tipo_curso INTEGER,
tx_descricao VARCHAR(150) not null unique,
primary key (id_curso),
constraint fk_instituicao foreign key (id_instituicao) references instituicao(id_instituicao),
constraint fk_tipo_curso foreign key (id_tipo_curso) references tipo_curso(id_tipo_curso)
);

insert into curso(id_instituicao, id_tipo_curso, tx_descricao) values
(1, 1, 'Curso Descrição 1'),
(2, 2, 'Curso Descrição 2'),
(3, 3, 'Curso Descrição 3'),
(4, 4, 'Curso Descrição 4'),
(5, 5, 'Curso Descrição 5'),
(6, 6, 'Curso Descrição 6'),
(7, 7, 'Curso Descrição 7'),
(8, 8, 'Curso Descrição 8'),
(9, 9, 'Curso Descrição 9'),
(10, 10, 'Curso Descrição 10')
select c.id_curso, c.tx_descricao, i.id_instituicao, i.tx_sigla, i.tx_descricao, tc.id_tipo_curso, tc.tx_descricao from curso c join instituicao i on c.id_instituicao = i.id_instituicao join tipo_curso tc on c.id_tipo_curso = tc.id_tipo_curso

create table tipo_disciplina(
id_tipo_disciplina SERIAL,
tx_descricao VARCHAR(150) not null unique,
primary key (id_tipo_disciplina)
);

insert into tipo_disciplina(tx_descricao) values
('Tipo Disciplina Descrição 1'),
('Tipo Disciplina Descrição 2'),
('Tipo Disciplina Descrição 3'),
('Tipo Disciplina Descrição 4'),
('Tipo Disciplina Descrição 5'),
('Tipo Disciplina Descrição 6'),
('Tipo Disciplina Descrição 7'),
('Tipo Disciplina Descrição 8'),
('Tipo Disciplina Descrição 9'),
('Tipo Disciplina Descrição 10')
select * from tipo_disciplina 

create table disciplina(
id_disciplina SERIAL,
id_curso INTEGER,
id_tipo_disciplina INTEGER,
tx_sigla VARCHAR(10) not null unique,
tx_descricao VARCHAR(150) not null unique,
in_periodo INTEGER not null,
in_carga_horaria INTEGER not null,
primary key (id_disciplina),
constraint fk_curso foreign key (id_curso) references curso(id_curso),
constraint fk_tipo_disciplina foreign key (id_tipo_disciplina) references tipo_disciplina(id_tipo_disciplina)
);

insert into disciplina(id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria) values
(1, 1, 'DISC1', 'Disciplina Descrição 1', 1, 60),
(2, 2, 'DISC2', 'Disciplina Descrição 2', 1, 60),
(3, 3, 'DISC3', 'Disciplina Descrição 3', 2, 40),
(4, 4, 'DISC4', 'Disciplina Descrição 4', 2, 40),
(5, 5, 'DISC5', 'Disciplina Descrição 5', 3, 50),
(6, 6, 'DISC6', 'Disciplina Descrição 6', 3, 50),
(7, 7, 'DISC7', 'Disciplina Descrição 7', 4, 70),
(8, 8, 'DISC8', 'Disciplina Descrição 8', 4, 70),
(9, 9, 'DISC9', 'Disciplina Descrição 9', 5, 30),
(10, 10, 'DISC10', 'Disciplina Descrição 10', 5, 30)
select d.id_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria, c.id_curso, c.id_instituicao, c.id_tipo_curso, c.tx_descricao as curso_descricao, td.id_tipo_disciplina, td.tx_descricao as tipo_disciplina_descricao from disciplina d join curso c on d.id_curso = c.id_curso join tipo_disciplina td on d.id_tipo_disciplina = td.id_tipo_disciplina

create table leciona(
id_professor INTEGER,
id_disciplina INTEGER,
primary key (id_professor, id_disciplina),
constraint fk_professor foreign key (id_professor) references professor(id_professor) on update cascade on delete cascade,
constraint fk_disciplina foreign key (id_disciplina) references disciplina(id_disciplina) on update cascade on delete cascade
);

insert into leciona(id_professor, id_disciplina) values
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10)
select p.id_professor, p.id_titulo, p.tx_nome, p.tx_sexo, p.tx_estado_civil, p.dt_nascimento, p.tx_telefone, d.id_disciplina, d.id_curso, d.id_tipo_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria from leciona l join professor p on l.id_professor = p.id_professor join disciplina d on d.id_disciplina = l.id_disciplina

create table aluno(
id_aluno SERIAL,
tx_nome VARCHAR(100) not null,
tx_sexo CHAR(1) not null,
dt_nascimento DATE not null,
primary key (id_aluno)
);

insert into aluno (tx_nome, tx_sexo, dt_nascimento) values
('Aluno 1', 'm', '1995-02-15'),
('Aluno 2', 'f', '1996-03-05'),
('Aluno 3', 'm', '1997-04-25'),
('Aluno 4', 'f', '1998-05-10'),
('Aluno 5', 'm', '1999-06-21'),
('Aluno 6', 'f', '1991-07-30'),
('Aluno 7', 'm', '1994-08-01'),
('Aluno 8', 'f', '1993-09-02'),
('Aluno 9', 'm', '1992-10-14'),
('Aluno 10', 'f', '1991-11-15')
select * from aluno

create table cursa(
id_aluno INTEGER,
id_disciplina INTEGER,
in_ano INTEGER,
in_semestre INTEGER,
in_faltas INTEGER not null,
nm_nota1 NUMERIC(4,2) not null,
nm_nota2 NUMERIC(4,2) not null,
nm_nota3 NUMERIC(4,2) not null,
bl_aprovado BOOLEAN not null,
primary key (id_aluno, id_disciplina, in_ano, in_semestre),
constraint fk_aluno foreign key (id_aluno) references aluno(id_aluno) on update cascade on delete cascade,
constraint fk_disciplina foreign key (id_disciplina) references disciplina(id_disciplina) on update cascade on delete cascade
);

insert into cursa(id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado) values
(1, 1, 1, 1, 2, 6, 6, 6, true),
(2, 2, 1, 2, 4, 6, 5, 2, false),
(3, 3, 2, 1, 6, 8, 7, 6, true),
(4, 4, 2, 2, 2, 9, 6, 8, true),
(5, 5, 3, 1, 4, 2, 5, 2, false),
(6, 6, 3, 2, 6, 6, 6, 6, true),
(7, 7, 4, 1, 2, 10, 7, 8, true),
(8, 8, 4, 2, 4, 6, 2, 2, false),
(9, 9, 5, 1, 6, 6, 9, 6, true),
(10, 10, 5, 2, 2, 2, 4, 6, false)
SELECT a.id_aluno, a.tx_nome, a.tx_sexo, a.dt_nascimento, d.id_disciplina, d.id_curso, d.id_tipo_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria, c.in_ano, c.in_semestre, c.in_faltas, c.nm_nota1, c.nm_nota2, c.nm_nota3, c.bl_aprovado FROM cursa c JOIN aluno a ON c.id_aluno = a.id_aluno JOIN disciplina d ON c.id_disciplina = d.id_disciplina
