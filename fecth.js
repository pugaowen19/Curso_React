fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
          json.forEach((user) => {
              console.log(user.name + " ----- " + user.address["city"])
          })
      })
        .catch((err) => {
            console.error("algo salio mal")
        })