function adicionar(){
    let numberOfHome = document.querySelector('input#numberOfHome')
    let bairro = document.querySelector('input#bairro')
    let city = document.querySelector('input#city') 
    let areadacasa = document.querySelector('input#areaDaCasa')
    let res = document.querySelector('div#res')

    let num = Number(numberOfHome.value)
    let area = Number(areadacasa.value)


    res.innerText += `\n*****************************
                      Cidade: ${city.value}\n
                      Bairro: ${bairro.value}\n
                      Número da casa: ${num}\n
                      Área da casa: ${area}m²
                      ******************************`


}

function remover(){
    alert('Os intens iram ser removidos!!')
    res.innerText = ''
}