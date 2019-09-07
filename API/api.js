const env = require('../assets/files/environment.json');

export const postTrip = async (token, trip) => {
  console.log("Post Trip...");
  console.log(trip);
  console.log(token);
  console.log(`${env.API}/rotas`);
  
    let result = await fetch(`${env.API}/rotas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: {
        "endereco": "-10.945287,-37.048063",
        "sentido": "PARA_CASA",
        "usuarios_id": 3
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(result); 
};

export const getMatch = async (token, rota) => {
  try {
    let result = await fetch(
      `${env.API}/match?rota=${rota}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(result);
  } catch (error) {
    console.log(`Erro ${env.API}/match?rota=${rota}`);
    console.error(error);
  }
}

export const getOptions = async (url) => {
  try {
    let response = await fetch(
      //`${env.API}/${url}`,
      `${url}`
    );
    let responseJson = response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export const getIdByEmail = async (email) => {
    let response = await fetch(`${env.API}/${email}`,      
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    }
    ).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.data)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

