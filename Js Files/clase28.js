/* Properties */
const URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const OPTS = {crossDomain: true}
var ids = [1, 2, 3, 4, 5, 6, 7] 

/* Function of the response for JQuery petition */
const ON_RESPONSE = function (data) {
    console.log(`Hola, yo soy ${data.name}`)
}

/* Functions */
function obtainCharacter(id) {
    /* Create a new promise for the result of a request */
    return new Promise((resolve, reject) => {
        const CHARACTER_URL = `${URL}${PEOPLE_URL.replace(":id", id)}`
        /* Make a request with JQuery */
        $.get(CHARACTER_URL, OPTS, function(data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

async function obtainCharacters() {
    /* Create an array for promises and print all of them */
    var promises = ids.map((id) => obtainCharacter(id))
    try {
        var characters = await Promise.all(promises)
        console.log(characters)
    } catch (id) {
        onError(id)
    }
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

/* Structure for promise on JQuery request */
obtainCharacter(1)
    /* To success */
    .then((data) => {
        console.log(`Hola, yo soy ${data.name}`)
        return obtainCharacter(2)
    })
        .then((data) => {
            console.log(`Hola, yo soy ${data.name}`)
            return obtainCharacter(3)
        })
            .then((data) => {
                console.log(`Hola, yo soy ${data.name}`)
            })
    /* To failure */
    .catch(onError)

obtainCharacters()