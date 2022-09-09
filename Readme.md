npx sequelize-cli model:generate --name data --attributes Section:string,No_Mesin:integer,Nama_Mesin:string,Tindakan_Perbaikan:string,Catatan:string,Gejala_Kerusakan:string,Bagian:string,Problem:string,Penyebab:string,Jenis_Perbaikan:string,category:string,part:string,Running_Hours:integer,Durasi:integer

npx sequelize-cli model:generate --name line --attributes nama:string, value:integer

npx sequelize-cli model:generate --name bagian --attributes sectionId:integer,Value:string,Image:string

npx sequelize-cli model:generate --name problem --attributes sectionId:integer,bagianId:integer,Value:string

npx sequelize-cli model:generate --name penyebab --attributes SectionId:integer,Value_Penyebab:string


npx sequelize-cli model:generate --name jenis_perbaikan --attributes SectionId:integer,Value_Jenis_Perbaikan:string


npx sequelize-cli model:generate --name section --attributes nama:string,value:string,index:string

langkah langkah
1. npm init -y =>
2. npm install express pg sequelize dotenv
 bcrypt cors jsonwebtoken multer
3. buat file .gitignore dan .env => code .gitignore .env
4. npm install nodemon sequelize-cli --save-dev
5. buat folder controllers, routes  => mkdir controllers,routes
6. npx sequelize-cli init => buat models dan config(database)




7. npx sequelize-cli db:create => buat database ke dbeaver
8. npx sequelize-cli model:generate --name author --attributes title:string,author:string,pages:integer,genre:string => buat tabel
11. di model :
    - book.belongsTo(models.author) => tabel banyak buku untuk 1 author
    - author.hasMany(models.book) => tabel 1 id author untuk banyak buku
9. npx sequelize-cli db:migrate => migrasi

buat masukin database dari json
10. npx sequelize-cli seed:generate --name todo-seeder => memasukkan data json lain ke dbeavers
11. buat di seeder:
....
11. npx sequelize-cli db:seed:all => masukin objek
12. 
13. 
sequelize db:migrate:undo:all    16.21

INSERT INTO "problems" (id, sectionId, Value_Problem, "createdAt", "updatedAt") values (1, 6, "Api tidak menyala", cast('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Problem, "createdAt", "updatedAt") values (2, 6, "Jig pole abnormal", cast('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Problem, "createdAt", "updatedAt") values (3, 6, "Sistem cooling abnormal", cast('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Problem, "createdAt", "updatedAt") values (4, 6, "Tangkai welder tidak bisa berhenti berputar", cast('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Problem, "createdAt", "updatedAt") values (5, 6, "Tangkai welder tidak bisa berputar", cast('2022-09-04' as Date), cast('2022-09-04' as Date));

INSERT INTO "penyebabs" (id, sectionId, Value_Penyebab, "createdAt", "updatedAt") values (1, 6, "As / bearing / mounting / pin / baut rusak, cast"('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Penyebab, "createdAt", "updatedAt") values (2, 6, "I / O PLC rusak", cast('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Penyebab, "createdAt", "updatedAt") values (3, 6, "Koneksi kabel / skun putus", cast('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Penyebab, "createdAt", "updatedAt") values (4, 6, "Kontaktor / relay output rusak", cast('2022-09-04' as Date), cast('2022-09-04' as Date)),
(id, sectionId, Value_Penyebab, "createdAt", "updatedAt") values (5, 6, "Kontaktor mati", cast('2022-09-04' as Date), cast('2022-09-04' as Date));

npx sequelize-cli => help

    "Section": "",
    "No_Mesin": "",
    "Nama_Mesin": "",
    "Gejala_Kerusakan":"", 
    "Bagian": "",
    "Problem": "",
    "Penyebab": "",
    "Jenis_Perbaikan": "", 
    "Mttr": "",
    "Mtbf": "",
    "Running_Hours":"" 

controller:
1. show :
    - findAll
    - order :[['id','ASC']]
    - include :[author]
2. add :
    - deklar title dll ke req.body
    - create title dll
3. edit :
    - deklar id ke +req.params.id
    - let {title dll} = req.body;
    - update({title dll},{where:{id}})
4. delete :
    - deklar id ke +req.params.id
    - destroy (where:{id})

{
              showDataResult ?
              (showDataResult
                
                .map((mesin) => {
                  return (
                    <>
                      <Row key={mesin.id} className="dashbord_section4">
                        <div className="dashbord_btn_section">
                          <Row>
                            <Col md={3} lg={2}>
                              <Button >{mesin.Section}</Button>
                            </Col>
                            <Col>
                              <p> cm</p>
                              <Row>
                                <Col>
                                  <p> cm</p>
                                </Col>
                                <Col>
                                  <p> cm</p>
                                </Col>
                                <Col>
                                  <p> cm</p>
                                </Col>
                              </Row>
                              <div className="box_no_dashbord">
                                <p>
                                  <span>No: </span>
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </>
                  );
                })) : (<></>)
              }

              