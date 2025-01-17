import { useState } from "react";
import Perfil from "./components/Perfil/Index";
import ReposList from "./components/ReposList/Index";

function App () {
    const [nomeUsuario, setNomeUsuario] = useState('')
    return(
        <>
            <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

            {nomeUsuario.length > 4 &&(
                <>
                    <Perfil nomeUsuario={nomeUsuario}/>
                    <ReposList nomeUsuario={nomeUsuario}/>
                </>
            )}
        </>
    )
}

export default App