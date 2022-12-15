function Clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anonasc')
    var tot = ano - Number(fano.value)
    var r = document.getElementById('res')
    if (Number(fano.value) > ano){
        window.alert('ERRO')
    }else {
        var sex = document.getElementsByName('radiosex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', ('foto'))
        if (sex[0].checked ){
            genero = 'Masculino'
            if(tot >= 0 && tot < 15){
            img.setAttribute('src', 'crianca M.png')
            //criança
        } else if (tot > 15 && tot < 30){
            img.setAttribute('src', 'adoM.png')
            //adolecente
        } else if (tot > 30 && tot < 60 ){
            img.setAttribute('src', 'ad M.png')
             //adulto
        } else{
            img.setAttribute('src', 'idoso.png')
             //idoso(a)
        }
        
            
        }else if (sex[1].checked){
            genero = 'Feminino'
            if(tot >= 0 && tot < 15){
                img.setAttribute('src', 'c F.png')
                //criança
            } else if (tot > 15 && tot < 30){
                img.setAttribute('src', 'adoF.png')
                //adolecente
            } else if (tot > 30 && tot < 60 ){
                img.setAttribute('src','ad F.png')
                 //adulto
            } else{
                 //idoso(a)
                 img.setAttribute('src', 'idosa.png')
            }
            
        }
        r.innerHTML = `Detectamos ${genero} com ${tot} anos`
        r.appendChild(img)
    }
}