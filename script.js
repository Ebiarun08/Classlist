var buttonadd = document.getElementById("add")
buttonadd.addEventListener('click', () => {
    buttonadd.classList.add('button-add')
    buttonadd.textContent = "ADDED"
})

function remv(){
    var remove = document.getElementById("remove")
    remove.classList.remove('removeBox')
    remove.textContent = "Removed Sucessfully"
    remove.style.color="white "
    remove.style.fontSize="24px"
}
// var buttonremove = document.getElementById("remove")
// buttonremove.addEventListener('click', () => {
//     buttonremove.classList.remove('removeBox')
// })
function toggle(){
    var tgl = document.getElementById("toggle")
    tgl.classList.toggle('mystyle')

}
function replc(){
    var replace = document.getElementById("replace")
    replace.classList.replace('first','second')
    replace.textContent= "Replaced"
}

// var buttontoggle = document.getElementById("btn-3")
// buttontoggle.addEventListener('click', () => {
//     buttontoggle.classList.toggle('second')
// })
// var buttoncontains = document.getElementById("contains")
// buttoncontains.addEventListener('click', () => {
//     var content = prompt("Enter the class name")
//     let x = buttoncontains.classList.contains(content)
//     // alert("The button class is present") = x
//     document.getElementById("demo").innerHTML = x
// })

// var box = document.getElementById("replace")
// box.addEventListener('click', () => {
//     box.classList.replace('myStyle', 'newStyle')
// })