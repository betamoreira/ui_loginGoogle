import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";


//essa página só é acessada se o usuário estiver logado

export const Home = () => {

  // const url = "http://127.0.0.1:8080/books";
  // function getUsers() {
  //   axios.get(url)
  //     .then(response => {
  //       const data = response.data
  //       console.log(data);
  //       //renderApiResult.textContent = JSON.stringify(data)
  //     })
  //     .catch(error => console.log(error))
  // }

  const { user } = useContext(AuthGoogleContext);
  console.log(user)
  const userLogado = JSON.parse(user);
    return (
    <div>
      <h1>Bem vindo, {userLogado.displayName}</h1>
    </div>)
  }