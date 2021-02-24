function asincrona(callback) {
    //toDo
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        }
        catch (e) {
            callback(e)
        }
    }, 1000)
}

asincrona((err, dato) => {
    if (err) {
        console.error(err);
        //throw err // Para funciones sincronas --> throw err
        return false
    }
    console.log('Exitoso!', dato);
})
