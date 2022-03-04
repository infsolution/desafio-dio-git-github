import React from 'react'
import { Container } from './styled'
import useGithub from '../../hooks/github-hooks';
const Header: React.FC =()=>{
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = React.useState('');
  
    const submitGetUser = () => {
      if (!usernameForSearch) return;
      return getUser(usernameForSearch);
    };
  
    return(
        <>
            <Container>
            <input
            type="text"
            placeholder="Digite o username para pesquisa..."
             onChange={(event:React.ChangeEvent<HTMLInputElement>) => setUsernameForSearch(event.target.value)}
            />
            <button type="submit" onClick={submitGetUser}>
            <span>Buscar</span>
            </button>
            </Container>   
        </>
    )
}

export default Header

