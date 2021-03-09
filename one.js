const student =localStorage.getItem('student')
if (student){

const studentForm =JSON.parse(student)
for( let i=0; i<studentForm;i++){
new Students(studentForm[i].name)
new Students(studentForm[i].email)
new Students(studentForm[i].mobile)
new Students(studentForm[i].tituation)
Students.all[i].render()

}

}

