//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Components
import MaisVistos from "pages/Home/MaisVistos";

//API
import api from "services/api";

//UseParams
import { useParams} from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

const Search = ()=>{

    const {word_search} = useParams();

    const [word, setWord] = useState(word_search);
    const [search, setSearch] = useState([]);
    const [form, setForm] = useState([]);

    useEffect(()=>{
        if (word){
            api.get(`/posts/?q=${word}`)
            .then((response)=>{
                setSearch(response.data)
            });
        }
    }, [word]);

    function onChange(event){
        const {value, name} = event.target;
        setForm({...form, [name]:value});

        console.log(form);
    }

    function handleSearch(event){
        event.preventDefault();
        setWord(form.search);
    }
  
    return(
        <>
        <Header></Header>
            <section className="container">
                <h6 className="uppercase color-primary text-center">{search.length} resultados</h6>
                <h4 className="text-center">{word}</h4>

                <form onSubmit={handleSearch}>
                    <div className="row">
                        <div className="grid-2 disappear"></div>

                        <div className="grid-8 flex-center">
                            <input type="text" name="search" onChange={onChange} placeholder="Faça uma busca"></input>
                            <button className="btn ml-2">Buscar</button>
                        </div>

                        <div className="grid-2 disappear"></div>
                    </div>
                </form>

                <p className="mt-2">Faça uma busca pelo nosso Blog</p>
                
                <div className="row mt-4">
                    {
                        search.map((item)=>{
                            return(
                                <MaisVistos key={item.id} content={item}></MaisVistos>
                            );
                        })
                    }
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}

export default Search;


/************** HEADER
1° - adicionar os eventos onChange con a função onChange no input e o evento onSubmit com a função handleSearch no form.

2° - criar uma variável inicial com um objeto que tem o valor search vazio.

3° - criar a variável de estado form e setForm com o valor inicial sendo a variável criada no passo 2.

4° - na função onChange(event) criar uma função desestruturada em value e name sendo igual ao target do evento, onde o value é a palavra que está sendo escrita e o name é o nome dado ao target(input), que no caso é o mesmo nome da propriedade do objeto do passo 2. Com isso, a função onChange irá disparar toda vez que uma letra for escrita e vai armazenar cada letra na propriedade search do initialValueForm, que por sua vez está sendo armazenada na variável form. Logo usando o setForm, podemos buscar as letras digitadas anteriormente com o spread form e concatenar com a letra que está sendo digitada no momento({...from, [name]:value}). Onde name vai ser search e value vai ser a letra, novamente voltando ao padrão do objeto criado no passo 2.

5° - importar o useNavigate para permitir o redirecionamento para a página search e alocar o useNavigate na variável navigate.

6° - na função handleSearch(event), usar um preventDefault para que quando haja o submit do formulário, a página não atualize e usar a variável navigate para dizer a url que deverá ser redirecionada anvigate(`/search/${form.search}`). Usa-se o `${}` para acessar o JS dentro de uma string e usa o from.search, pq search é o nome da propriedade do objeto criado no passo 2, que está armazenado dentro da variável form. Escrebendo essas linhas de código, o site vai nos direcionar para a página search */

/*************Search
 
1° - ir no paths e adicionar o parâmetro na rota search

2° - usar esse parâmtero como uma variável, chamado o useParams para ele const {word_search} = useParams();

3° -  criar uma variável de estado [word, setWord] e igualar ela à variável criada no passo 1.

4° - criar uma variável de estado [search, setSearch] para armazenar o valor da palavra pesquisada.

5° - Através do useEffect(), se word já tiver algum valor armazenado nela, fazer uma requisição para a api, filtrando todos os posts que tiverem a palavra pesquisada, através do método de pesquisa do json-server ?q=palavra -- api.get(`/posts?q=${word}`) e armazenar a resposta dessa requisição na variável search usando o setSearch.

6° -  Para a estrutura da página search, pegamos a mesma estrutura dos posts mais visto lá na página Home.
 */