select alunos.nome, COUNT(turma_id)
from alunos_has_turmas
inner join alunos
on alunos.id = alunos_has_turmas.aluno_id
group by aluno_id
having COUNT(turma_id) > 2;

select semestre, ano_inicio, professores.nome from turmas
inner join professores
on turmas.professor_id = professores.id
where turmas.id in (8, 4, 2);

select 
	cursos.nome as nome_curso,
    professores.nome,
    turmas.semestre,
    turmas.ano_inicio
from turmas
inner join professores
on turmas.professor_id = professores.id
inner join cursos
on turmas.curso_id = cursos.id
where professores.nome LIKE 'Rebeca%';

select professores.* from turmas
inner join professores
on turmas.professor_id = professores.id
where turmas.id = 8;

select professores.* from professores
inner join turmas
on turmas.professor_id = professores.id
where turmas.id = 8;

select cursos.*, areas.nome as nome_area from cursos
inner join areas
on cursos.area_id = areas.id;