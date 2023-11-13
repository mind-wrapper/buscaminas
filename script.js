var list=[
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    []
]
const minas=[[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()],[rd(),rd()]];

var contador=0;

class casilla{
    constructor(x,y,st)
    {
        this.x=x;
        this.y=y;
        this.st=st;
    }

    crear()
    {
        const div=document.createElement("div");

        div.classList=(`unreveal`)
        div.id=`${this.x},${this.y}`;
        div.addEventListener("click",()=>{
            if(this.st!="m")
            {
                if(div.classList=="unreveal")
                {
                    contador+=1;
                    if(contador==88)
                    {
                        alert("ganaste")
                    }
                }
                if(this.st==0)
                {
                    div.classList=(`item s${this.st}`)
                    div.id=`${this.x},${this.y}`;
                }
                else               
                {              
                    div.innerHTML=`${this.st}`
                    div.classList=(`item s${this.st}`)
                }
                }
            else
            {
                div.classList=(`item s${this.st}`)
                const msg=document.querySelector(".none")
                msg.classList.remove("none")
                msg.classList.add("back")
            }
        })
        
        
        
        
        
        return div;
    }
}
function rd()
{
    return Math.round(Math.random()*9)
}

const rev=(x,y)=>{
    let n=0
    if(list[x][y]=="m")
    return "m"
    if(x!=0&&list[x-1][y]=="m")
    {

        n+=1;
    }
    if(list[x][y-1]=="m")
    {

        n+=1;
    }
    if(x<10&&list[x+1][y]=="m")
    {

        n+=1;
    }

    if(list[x][y+1]=="m")
    {

        n+=1;
    }

    if(x<10&&list[x+1][y-1]=="m")
    {

        n+=1;
    }

    if(x!=0&&list[x-1][y+1]=="m")
    {

        n+=1;
    }

    if(x!=0&&list[x-1][y-1]=="m")
    {

        n+=1;
    }


    if(x<10&&list[x+1][y+1]=="m")
    {

        n+=1;
    }

    return n;
}

id=document.getElementById("5,5")
console.log(id)



for(let i=0;i<minas.length;i++){
    list[minas[i][0]][minas[i][1]]="m";
}

for(let i=0;i<10;i++)
{
    for(let j=0;j<10;j++)
    {
        list[i][j]=rev(i,j)
    }
}

var lista=[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]; 
const fr=document.createDocumentFragment();
for(let i=0;i<10;i++)
{
    for(let j=0;j<10;j++)
    {
        lista[i][j]=new casilla(i,j,list[i][j])
        fr.appendChild(lista[i][j].crear())
    }
}
const cont=document.querySelector(".container")
cont.appendChild(fr);


const b=document.querySelector(".boton")
b.addEventListener("click",()=>{
    location.reload();
})