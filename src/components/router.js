import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomRouter() {
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
          <CustomHeader />
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div className="site-layout-content">
              <div className='custom-content'>
                <h1>Router</h1>
                <section>
                  <p>В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами. Ключевым звеном в работе маршрутизации является модуль <a target={"_blank"} className="link-with-back" href='https://reactrouter.com/'>react-router</a>, который содержит основной функционал по работе с маршрутизацией.</p>
                  <h3>Установка</h3>
                  <p>React Router можно установить из <a target={"_blank"} className="link-with-back" href='https://www.npmjs.com/package/react-router-dom'>общедоступного реестра npm</a> с помощью <span className='text-with-back'>npm</span> либо <a target={"_blank"} className="link-with-back" href='https://yarnpkg.com/'>yarn</a>.Поскольку мы создаем веб-приложение, мы будем использовать <span className='text-with-back'>react-router-dom</span> в этом руководстве.</p>
                  <p>Чтобы установить React Router пишем в консоли:</p>
                  <div className='code-example'>
                    <pre><code>{`
      npm install react-router-dom@6
        //Или
      yarn add react-router-dom@6
        `}
                    </code></pre>
                  </div>

                  <p>После этого нам необходимо получить ряд объектов, которые потребуются для определения маршрутов:</p>
                  <div className='code-example'>
                    <pre><code>{`
      import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link,
        Navigate,
      } from "react-router-dom";
        `}
                    </code></pre>
                  </div>


                  <p><span className='text-with-back'>Router</span> определяет набор маршрутов и, когда к приложению, приходит запрос, то <span className='text-with-back'>Router</span> выполняет сопоставление запроса с маршрутами. И если какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается для обработки запроса.</p>
                  <p>И также для выбора маршрута определен объект <span className='text-with-back'>Routes</span>. Он содержит набор маршрутов и позволяет выбрать первый попавшийся маршрут и его использовать для обработки.</p>
                  <p>Каждый маршрут представляет объект <span className='text-with-back'>Route</span>. Он имеет ряд атрибутов. В частности, в примере ниже для маршрута устанавливаются два атрибута:</p>
                  <ul className='content-list'>
                    <li><b>path:</b> шаблон адреса, с которым будет сопоставляться запрошенный адрес URL</li>
                    <li><b>element:</b> тот компонент, который отвечает за обработку запроса по этому маршруту</li>
                  </ul>
                  <div className='code-example'>
                    <pre><code>{`
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
        `}
                    </code></pre>
                  </div>

                  <p>Первый маршрут выступает в качестве корневого. Он сопоставляется с адресом <span className='text-with-back'>"/"</span> и обрабатывается компонентом <span className='text-with-back'>Main</span>.Второй маршрут будет сопоставляться с адресом <span className='text-with-back'>"/about"</span>, а обрабатываться он будет компонентом <span className='text-with-back'>About</span>.Особо следует выделить третий маршрут</p>
                  <p>Путь в виде звездочки - <span className='text-with-back'>"*"</span> указывает, что этот маршрут будет сопоставляться <b>со всеми адресами URL, которые не соответствуют предыдущим маршрутам</b>. И он будет обрабатываться компонентом NotFound. Таким образом мы можем задать обработку при обращении к несуществующим ресурсам в приложении.</p>
                  
                  <h2>Общий пример использования React Router:</h2>
                  
                  <div className='code-example'>
                    <pre><code>{`
      class About extends React.Component{
        render(){
            return <h2>О сайте</h2>;
        }
      }
      class NotFound extends React.Component{
          render(){
              return <h2>Ресурс не найден</h2>;
          }
      }
      class Main extends React.Component{
          render(){
              return <h2>Главная</h2>;
          }
      }
      ReactDOM.render(
          <Router>
              <div>
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
              </div>
          </Router>,
          document.getElementById("app")
      )
        `}
                    </code></pre>
                  </div>
                  <p>Больше информации и примеров использования можно получить на странице <a target={"_blank"} className="link-with-back" href='https://v5.reactrouter.com/web/guides/quick-start/'>React Router</a></p>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/useeffect'}>&#8592; useEffect</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/context'}>Context &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomRouter />