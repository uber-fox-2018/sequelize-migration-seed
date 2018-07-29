SQLlite3 vs PostgreSQL

SQLlite3
- file based
- limited 
- baiknya untuk singgel user database

PostgreSQL 
- server based
- Pocked
- Multi-User application


--> digitalocean.com
--> pgadmin
--> postico hanya utuk mac book

untuk connect ke database harus seting terminal,

lalu intall squilize
-----------------------------------------------------------------

ORM --> (object realtion mapping)

example 

People
id            name             email
-----------------------------------------------------------------
1             Dimitri          dimitri@gmail.com  --> new Person()
2             Alexei           alerxei@gmail.com  --> new Person()

Migration --> untuk mengcopy file, hanya schemanya
- untuk sesuatu yang berhubungan dengan schea,
- bisa dibuat berualng kali
- sebagai track racord seperti git yang punya check Point
- kalo mau mengganti schema harus dari Migration, supaya tidak rancu dan menjadi maslah untuk programer lain

Seeders --> akan dibutuhkan ketika membutuhkan data awal

models --> akan membuat class otomatis
-->> documentasi docs.sequelize.js.com // untuk referensi

untuk memulai squalize
- npm init -y
- nmp install squelize squelize-cli pg
- squalize init
- npm install -g sequelize-cli


-->> Migration
diterminal model: generet --name Student --attribut
firstName:string,lastName:string,email:string

--> membuat table

--> squalize db:migrate
--> squalize db:create
--> squalize db:migrate
--> squilize Migration:generet
--> squilize migrateion:generet --name --add --phoneNumber
--> squilize db:migrate:undo --> untuk undo


--Seeder--
-squilize seed:generate --name add_initial_students
return queryInterface.bulkInstert('Student',[{
    firstName: 'Dimitri',
    lastName: 'W'

    cratedAt = new Date
    updateAt = new Date


}])
return qureryInterface.bulkInstert.(student)
jalaninnya squilize db:seed





