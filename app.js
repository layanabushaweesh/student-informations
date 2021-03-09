//helper function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

//construcor function
function Students(id,name,email,mobile,tituation){
  this.id=id
  this.name=name
  this.email=email
  this.age=0 
  this.mobile=mobile
  this.tituation=tituation
  Students.all.push(this)

}
Students.all=[]


//private function to get random number to age
Students.prototype.getAge=function (min,max) {  
this.age=getRandomInt(min, max)
  }

const container=document.getElementById("table-content")

// DOM
Students.prototype.render =function () {
    const tableEl =document.createElement('table')
    container.appendChild(tableEl)

    const headerRow=document.createElement('tr')
    tableEl.appendChild(headerRow)

    const th1El =document.createElement('th')
    headerRow.appendChild(th1El)
    th1El.textContent='id'

    const th2El =document.createElement('th')
    headerRow.appendChild(th2El)
    th2El.textContent='Name'

    const th3EL =document.createElement('th')
    headerRow.appendChild(th3EL)
    th3EL.textContent='Email'

    const th4El =document.createElement('th')
    headerRow.appendChild(th4El)
    th4El.textContent='Mobile'

   const th5El =document.createElement('th')
    headerRow.appendChild(th5El)
    th5El.textContent='Age'


    const th6El =document.createElement('th')
    headerRow.appendChild(th6El)
    th6El.textContent='Tituation'


    const headerData =document.createElement('tr')
    tableEl.appendChild(headerRow)



    const td1El =document.createElement('td')
    headerData.appendChild(td1El)
    td1El.textContent=this.id

    const td2El =document.createElement('td')
    headerData.appendChild(td2El)
    td2El.textContent=this.name

    const td3El =document.createElement('td')
    headerData.appendChild(td3El)
    td3El.textContent=this.email


    const td4EL =document.createElement('td')
    headerData.appendChild(td4EL)
    td4EL.textContent=this.mobile

    const td5El =document.createElement('td')
    headerData.appendChild(td5El)
    td5El.textContent=this.age

    const td6El =document.createElement('td')
    headerData.appendChild(td6El)
    td6El.textContent=this.tituation
    
}

// add event listner
const studentForm=document.getElementById("student-list")
studentForm.addEventListener('submit' ,handleClick)
function  handleClick (event) {
    
    event.preventDefault();

   const email =event.target.name.value
    const mobile=event.target.number.value
    const tituation =event.target.tityation.value

    const newStudent =new Students (name,email,mobile,tituation)

    studentForm.reset()
    newStudent.getAge(5,7)
    newStudent.render()
    localStorage.setItem('student',JSON.stringify(Students.all))
    
}


