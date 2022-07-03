import {Switch, Route} from 'react-router-dom'
import Projetos from '../pages/projetos/projetos'
import Formacoes from '../pages/qualificacoes/qualificacoes'

import Sobre from '../pages/sobre/sobremim'
function Routes(){

    return(
        <Switch>
            <Route path="/" exact component={Sobre} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/qualificacoes" component ={Formacoes} />
        </Switch>
    )

}

export default Routes