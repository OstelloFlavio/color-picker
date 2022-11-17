function rosso(bottone)
{
    let oldBottone = document.getElementById("pulsante_premuto");
    oldBottone.id = 'pulsante';
    document.body.style.backgroundColor="#FF0000";
    bottone.id ='pulsante_premuto'
}

function cyan(bottone)
{
    let oldBottone = document.getElementById("pulsante_premuto");
    oldBottone.id = 'pulsante';
    document.body.style.backgroundColor="#00FFFF";
    bottone.id ='pulsante_premuto'
}

function blue(bottone)
{
    let oldBottone = document.getElementById("pulsante_premuto");
    oldBottone.id = 'pulsante';
    document.body.style.backgroundColor="#0000FF";
    bottone.id ='pulsante_premuto'
}

function green(bottone)
{
    let oldBottone = document.getElementById("pulsante_premuto");
    oldBottone.id = 'pulsante';
    document.body.style.backgroundColor="#008000";
    bottone.id ='pulsante_premuto'
}

function purple(bottone)
{
    let oldBottone = document.getElementById("pulsante_premuto");
    oldBottone.id = 'pulsante';
    document.body.style.backgroundColor="#800080";
    bottone.id ='pulsante_premuto'
}

function yellow(bottone)
{
    let oldBottone = document.getElementById("pulsante_premuto");
    oldBottone.id = 'pulsante';
    document.body.style.backgroundColor="#FFFF00";
    bottone.id ='pulsante_premuto'
}

function search(modulo)
{
    if(event.key === 'Enter')
    {
        let regex = /[0-9A-Fa-f]{6}/g;
        if(modulo.value.match(regex))
        {
            document.body.style.backgroundColor= "#" + modulo.value;
        }
        else
        {
            alert("Inserire un codice esadecimale corretto");
        }
    }
}