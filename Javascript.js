var caixa2 = document.getElementById("caixa2");

var course = ["HTML","CSS","JAVASCRIPT","NODE.JS","SASS"] 

var ver = document.getElementById("btn3")

var remover = document.getElementById("btn2")

var input = document.querySelector("#input")


var antes = document.getElementById("btn4")

var depois = document.getElementById("btn5")




var tirar = ()=>{


  var todos = [...document.querySelectorAll('.selec')]

  todos.map((el)=>{

    el.classList.remove("selec")


  })

}

var createnewcourse = (curso)=>{


  var div =  document.createElement("div")

  div.setAttribute("class", "course")

    div.innerHTML = curso;



    div.addEventListener("click",(evt)=>{
      tirar()
      evt.target.classList.toggle("selec")

    })
    

    caixa2.appendChild(div)

    return div 

}

const selec = ()=>{


  var todos = [...document.querySelectorAll('.selec')]


//retorna somente todos que tem class todos ativo com return 
    return todos[0]


  


}



course.map((el)=>{

  const novoelement0 = createnewcourse(el)

  caixa2.appendChild(novoelement0)

})


remover.addEventListener("click",()=>{

  var rs = selec()

  rs.remove()

})


ver.addEventListener("click",()=>{

var rs = selec();



alert("O curso selecionado : "+ rs)


})

antes.addEventListener("click",()=>{

  var rs = selec();

  


  const novoelement00 = createnewcourse(input.value)

  caixa2.insertBefore(novoelement00,rs)



})
depois.addEventListener("click",()=>{

  var rs = selec();



    const novoelement00 = createnewcourse(input.value)
  

    caixa2.insertBefore(novoelement00,rs.nextSibling)

})