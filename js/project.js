
let codebox = document.getElementsByClassName('code_box')[0];
let codeContent = document.getElementById('code-content');
let btnCopy = document.getElementById('btnCopy');
let btnGit = document.getElementById('btnGit');

let showCode=async(project)=> {
    try{
        let data=await fetch("http://localhost:3000/project")
        let res=await data.json()
        console.log(res)
        codeContent.innerText = ""
        codeContent.classList.add("active_codebox")
        codeContent.innerText = res[project].code.join("\n") 
        btnCopy.classList.remove('disabled')
        btnGit.classList.remove('disabled')
        btnGit.href = res[project].gitLink
    }catch(error){
        console.log(error)
    }    
}

function copyCode() {
    let code = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(code);
    alert('کد کپی شد')
}

export {showCode,copyCode}