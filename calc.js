console.log('hello');
let btn = document.getElementsByTagName('button');
let txt = document.getElementById('text');

let p = '';
Array.from(btn).forEach(e => {
    e.addEventListener('click',()=>
    {
        let t = e.innerHTML;
        if(t=='C')
        {
            txt.innerHTML='';
            p='';
        }
        else if(t=='Enter')
        {
            let y = eval(p);
            console.log(y);
            txt.innerHTML=y;
            p=y.toString();
        }
        else if(t!='Enter' || t!='C')
        {
            if((p[p.length-1]=='+'||p[p.length-1]=='-'||p[p.length-1]=='*'||p[p.length-1]=='/')&&(t=='+'||t=='-'||t=='*'||t=='/'))
            {
                ;
            }
            else
            {
                p += `${t}`;
                txt.innerHTML=p;
            }
        }
    })
});