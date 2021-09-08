const charactersAPI = new APIHandler('http://localhost:8000');

//LISTADO
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(respose =>{
      let text = ''
      respose.data.forEach(ele => text +=
        `<div class="character-info">
        <div class="name">Name: ${ele.name}</div>
        <div class="occupation">Occupation: ${ele.occupation}</div>
        <div class="cartoon">Is acartoon: ${ele.cartoon}</div>
        <div class="weapon">Weapon: ${ele.weapon}</div>
      </div>`)
      document.querySelector('.characters-container').innerHTML = text  
      })
      .catch(err => console.error('ERROR', err))
    })
    

//ELEMENTO POR ID
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector('#one').value
    charactersAPI
   .getOneRegister(id)
   .then(response => {
    const { id, name, occupation, cartoon, weapon } = response.data
    
    let text = 
    `<div class="character-info">
    <div class="name">Id: ${id}</div>
    <div class="name">Name: ${name}</div>
    <div class="occupation">Occupation: ${occupation}</div>
    <div class="cartoon">Is acartoon: ${cartoon}</div>
    <div class="weapon">Weapon: ${weapon}</div>
    </div>`
    document.querySelector('.characters-container').innerHTML = text  
   })
   .catch(err => console.error('ERROR', err))
  })
  

//ELIMINAR POR ID
  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector('#del-one').value
    charactersAPI
    .deleteOneRegister(id)
    .then(green =>{
      if(green.data){
      document.querySelector('#delete-one').classList.add('active')
      setTimeout(() => document.querySelector('#delete-one').classList.remove('active'),5000)
      }else {
        document.querySelector('#delete-one').classList.add('des-active')
      setTimeout(() => document.querySelector('#delete-one').classList.remove('des-active'),5000)
      }
      document.querySelector('#del-one').value = ''
    })
    .catch(err => console.error('ERROR', err)) 
  })

//EDITAR
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const inputs = document.querySelectorAll('#edit-character-form input')
    const id = inputs[0].value
    const character = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      cartoon: inputs[4].value,
      weapon: inputs[3].value
    }
    console.log(character);

    charactersAPI
    .updateOneRegister(id,character)
    .then(green => {
      document.querySelector('#edit-character-form').reset()
      if(green.data){
        document.querySelector('#send-up').classList.add('active')
        setTimeout(() => document.querySelector('#send-up').classList.remove('active'),5000)
        }else {
          document.querySelector('#send-up').classList.add('des-active')
        setTimeout(() => document.querySelector('#send-up').classList.remove('des-active'),5000)
        }
      })
      .catch(err => console.error('ERROR', err)) 
    })
  });


//CREAR NUEVO
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const character = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        cartoon: inputs[2].value,
        weapon: inputs[3].value
    }
console.log(character);
    charactersAPI
    .createOneRegister(character)
    .then(green => {
      document.querySelector('#new-character-form').reset()
      if(green.data){
        document.querySelector('#send-data').classList.add('active')
        setTimeout(() => document.querySelector('#send-data').classList.remove('active'),5000)
        }else {
          document.querySelector('#send-data').classList.add('des-active')
        setTimeout(() => document.querySelector('#send-data').classList.remove('des-active'),5000)
        }
      })
      .catch(err => console.error('ERROR', err)) 
    })
  

