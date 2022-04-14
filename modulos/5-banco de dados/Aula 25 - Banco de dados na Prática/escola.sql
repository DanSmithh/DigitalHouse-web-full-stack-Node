CREATE DATABASE escola;
USE escola;

CREATE TABLE areas (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  ano_matricula INT NOT NULL
);

CREATE TABLE professores (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  sobrenome VARCHAR(45) NOT NULL
);

CREATE TABLE alunos (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  sobrenome VARCHAR(45) NOT NULL,
  matricula INT NOT NULL
);

CREATE TABLE cursos (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  area_id INT UNSIGNED,
  nome VARCHAR(45) NOT NULL,
  FOREIGN KEY (area_id) REFERENCES areas(id)
);

CREATE TABLE turmas (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  area_id INT UNSIGNED,
  semestre VARCHAR(2) NOT NULL,
  ano_inicio INT NOT NULL,
  curso_id INT UNSIGNED,
  professor_id INT UNSIGNED,
  FOREIGN KEY (curso_id) REFERENCES cursos(id),
	FOREIGN KEY (professor_id) REFERENCES professores(id)
);

CREATE TABLE alunos_has_turmas (
	aluno_id INT UNSIGNED,
  turma_id INT UNSIGNED,
  nr_faltas INT,
  nota DECIMAL(2),
	FOREIGN KEY (aluno_id) REFERENCES alunos(id),
	FOREIGN KEY (turma_id) REFERENCES turmas(id)
);

INSERT INTO alunos (nome, sobrenome, matricula)
VALUES
	('Bruno', 'Razera', 2021111),
	('Daniel', 'Rodrigues', 2021112),
  ('Elaine', 'Marcondes', 2021113),
  ('Rodrigo', 'Gomes', 2021114),
  ('Priscila', 'Almeida', 2021115),
	('Luan', 'Santos', 2021116),
  ('Marcos', 'Oliveira', 2021117);

INSERT INTO areas (nome, ano_matricula)
VALUES
	('Programação', 2022),
  ('Marketing', 2022),
  ('Dados', 2022),
  ('Testing', 2022),
	('Design Thinking', 2022);

INSERT INTO professores (nome, sobrenome)
VALUES
	('Valmir', 'Alvarenga'),
  ('Luciano', 'Nonato'),
  ('Isabel', 'Manfredini');

INSERT INTO cursos (nome, area_id)
VALUES ('Fullstack Nodejs', 1);

INSERT INTO turmas (semestre, ano_inicio, curso_id, professor_id)
VALUES ('1°', 2021, 1, 1);

INSERT INTO alunos_has_turmas (aluno_id, turma_id)
VALUES
  (1, 1),
  (2, 1);

-- Modificar coluna da tabela:
-- ALTER TABLE alunos
-- MODIFY id INT UNSIGNED NOT NULL AUTO_INCREMENT;

-- Remover coluna da tabela:
-- ALTER TABLE turmas
-- DROP areas_id