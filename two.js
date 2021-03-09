const studentsForm =JSON.parse(localStorage.getItem('student'))
for (let i=0;i<studentsForm.length;i++){

    const newStudent =new Students(studentsForm[i])

    newStudent.render()
}