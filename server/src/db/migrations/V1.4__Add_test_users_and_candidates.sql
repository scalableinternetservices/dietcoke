insert into `candidate` (`name`, `voteCount`, `id`) values ('Bob', '2', 1);
insert into `candidate` (`name`, `voteCount`, `id`) values ('Sue', '2', 2);
insert into `candidate` (`name`, `voteCount`, `id`) values ('Bill', '1', 3);
insert into `user` (`email`, `userType`, `name`, `candidateIds`) values ('email@email.com', 'ADMIN', 'John Fothels', '1,3,2');
insert into `user` (`email`, `userType`, `name`, `candidateIds`) values ('email@email.com', 'ADMIN', 'John Kothels', '2,1,3');
insert into `user` (`email`, `userType`, `name`, `candidateIds`) values ('email@email.com', 'ADMIN', 'John Mothels', '3,1,2');
insert into `user` (`email`, `userType`, `name`, `candidateIds`) values ('email@email.com', 'ADMIN', 'John Jothels', '1,3,2');
insert into `user` (`email`, `userType`, `name`, `candidateIds`) values ('rothfels@cs.ucla.edu', 'ADMIN', 'John Rothfels', '2,1,3');
