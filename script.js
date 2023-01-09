var t=document.getElementById("yui")

function opi()
{
    var str='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz123456789$#@'
    var pass=''
    for(var i=1;i<=8;i++)
    {
char=Math.floor(Math.random()*(str.length+1))
pass=pass+str.charAt(char)
    }
    return pass
}
function oi(){
t.innerHTML=opi()}
function copyContent()
{
  let ty = document.getElementById('yui')
  let y=ty.textContent
alert("Password copied successfully")
       navigator.clipboard.writeText(y);

    
  }
