const cep  = document.querySelector('#cep')

const showData = (result) => {
  
  for(const campo in result){
    if(document.querySelector(`#${campo}`)){
      document.querySelector(`#${campo}`).value = result[campo]
    }
  }
}

cep.addEventListener('blur', (e) => {                                        
  const search = cep.value.replace('-','')

  const url = `https://viacep.com.br/ws/${search}/json/`

  const options = {
    method: "GET",
    mode: "cors",
    cache: "defaut"
  }

  fetch(url)
    .then(response => response.json()
      .then( data => {showData(data)}))
    .catch( error => console.log("Erro "+ error))
})