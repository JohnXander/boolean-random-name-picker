const textarea = document.getElementById("textarea")
const generateName = document.getElementById("generateName")
const randomName = document.getElementById("randomName")

generateName.addEventListener("click", () => {
    const arrOfNames = textarea.value.split("\n")
    const randomNum = Math.floor(Math.random() * arrOfNames.length)
    const currentName = arrOfNames[randomNum]
    const filteredArr = arrOfNames.filter(name => name !== currentName)

    randomName.innerHTML = currentName    
    textarea.value = filteredArr.join("\n")
})