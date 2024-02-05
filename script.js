const hexCodeGenerator=document.querySelector("#create-hex-code")
let color="0123456789ABCDEF";
let hexColor=""
let prevColor="#777777"
const hexColorContainer=document.querySelector(".hex-color-container");

var button=document.createElement('button');
button.textContent="hellow guys";
button.classList.add("prev-class");
hexColorContainer.appendChild(button)

//how to add css using js dynamic values

var cssStyles= "display: flex;"+
                "align-items: center;"+
                "justify-content: center;"+
                "flex-direction:column;"+
                "gap:100px;"+
                " background-color:#" + prevColor + ";"+
                "margin-bottom:10px;"

hexCodeGenerator.addEventListener('click',()=>{
    hexColor=""
    for(let i=0;i<6; i++){
     hexColor+=color.charAt(Math.floor(Math.random()*15));
    }
    console.log(hexColor)
    hexCodeGenerator.style.backgroundColor=`#${hexColor}`;
    hexColorContainer.style.cssText=cssStyles;
    prevColor=hexColor;
    
})

