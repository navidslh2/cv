
let codebox = document.getElementsByClassName('code_box')[0];
let codeContent = document.getElementById('code-content');
let btnCopy = document.getElementById('btnCopy');
let btnGit = document.getElementById('btnGit');

let showCode=async(project)=> {
    try{
        let data=await fetch("http://localhost:3000/project")
        let res=await data.json()
        codeContent.innerText = ""
        codeContent.classList.add("active_codebox")
        codeContent.innerText = res[project].code.join("\n") 
        btnCopy.classList.remove('disabled')
        btnGit.classList.remove('disabled')
        btnGit.href = res[project].gitLink
    }catch(error){
    }    
}

function copyCode() {
    let code = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(code);
    let message = document.createElement("div")
    message.classList.add("message")
    message.innerText = "کد کپی شد"
    document.body.appendChild(message)
    setTimeout(() => {
        let opacity = 1
        setInterval(() => {
            opacity -= 0.1
            message.style.opacity = opacity
            if (opacity <= 0){
                message.remove()
            }
        }, 100);
    }, 1000);
}

let copy = document.getElementById("btnCopy")
copy.addEventListener("click", copyCode)


showCode()