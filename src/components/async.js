import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomAsync() {
  useEffect(()=>{
    const prevHref = window.location.href;
    return () => {
      if(prevHref != window.location.href){
        window.scrollTo(0, 0)
      }
    }
  })
    return (
      <Layout className="layout">
          <CustomHeader/>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div className="site-layout-content">
              <div className='custom-content'>
                <h1>AJAX и обращение к API</h1>
                <section>
                  <p>Вы можете использовать встроенный в браузер метод <a target={"_blank"} className="link-with-back" href='https://learn.javascript.ru/fetch'>window.fetch</a> или любую AJAX-библиотеку, например <a target={"_blank"} className="link-with-back" href='https://github.com/axios/axios'>Axios</a> или <a target={"_blank"} className="link-with-back" href='https://api.jquery.com/jQuery.ajax/'>jQuery AJAX</a>.</p>
                  <p>Вы можете сделать AJAX-запрос в <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/react-component.html#mounting'>componentDidMount</a>. Когда вы получите данные, вызовите <span className='text-with-back'>setState</span>, чтобы передать их компоненту.</p>
                  <h3>Пример: Устанавливаем состояние из AJAX-запроса</h3>
                  <p>Компонент ниже показывает, как в <span className='text-with-back'>componentDidMount</span> задать внутреннее состояние из результата AJAX-запроса.</p>
                  <p>Допустим, наш API возвращает следующий JSON-объект:</p>
                  <div className='code-example'>
                    <pre><code>{`
      {
        "items": [
          { "id": 1, "name": "Яблоки",  "price": "$2" },
          { "id": 2, "name": "Персики", "price": "$5" }
        ] 
      }
        `}
                    </code></pre>
                  </div>
                  <div className='code-example'>
                    <pre><code>{`
      {
        class MyComponent extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
              error: null,
              isLoaded: false,
              items: []
            };
          }
        
          componentDidMount() {
            fetch("https://api.example.com/items")
              .then(res => res.json())
              .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    items: result.items
                  });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
          }
        
          render() {
            const { error, isLoaded, items } = this.state;
            if (error) {
              return <div>Ошибка: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Загрузка...</div>;
            } else {
              return (
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      {item.name} {item.price}
                    </li>
                  ))}
                </ul>
              );
            }
          }
        }
      }
        `}
                    </code></pre>
                  </div>
                  <p>Вот эквивалент с <a target={"_blank"} className="link-with-back" href='https://reactjs.org/docs/hooks-intro.html'>хуками</a>:</p>
                  <div className='code-example'>
                    <pre><code>{`
      function MyComponent() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
      
        // Примечание: пустой массив зависимостей [] означает, что
        // этот useEffect будет запущен один раз
        // аналогично componentDidMount()
        useEffect(() => {
          fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result);
              },
              // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
              // чтобы не перехватывать исключения из ошибок в самих компонентах.
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])
      
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.price}
                </li>
              ))}
            </ul>
          );
        }
      }
        `}
                    </code></pre>
                  </div>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/refs'}>&#8592; Refs</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/dom'}>Virtual DOM &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomAsync />