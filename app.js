var inp = document.getElementById('inp')
var list = document.getElementById('list')


function editList(btn){
btn.parentNode.firstChild.nodeValue = prompt()

}

function deleteList(btn){
console.log(btn.parentNode)
btn.parentNode.remove()
// alert("abc")
}

function addTask(){
 var li = document.createElement('li')
 var liVal = document.createTextNode(inp.value)
 li.appendChild(liVal)
 inp.value = "";
 list.appendChild(li)


 var del = document.createElement('button')
var delText = document.createTextNode("delete")
del.appendChild(delText)
del.setAttribute("class","btn")
del.setAttribute("onclick","deleteList(this)")
li.appendChild(del)
console.log(del)



var edit= document.createElement('button')
var editText = document.createTextNode("Edit")
edit.setAttribute("class","edi")
edit.appendChild(editText)
edit.setAttribute("onclick","editList(this)")
li.appendChild(edit)
console.log(edit)
}