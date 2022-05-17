import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import LinksBottom from './linksbottom.js'
import {Link} from "react-router-dom";

const { Content } = Layout;
// const linksBottom = {
//   prev: {
//     link:'/', 
//     title:'About'
//   },
//   next: {
//     link:'props', 
//     title:'Props'
//   }
// }
// const prev= {link:'/', title:'About'}
// const next= {link:'props', title:'Props'}

function CustomComponents(){
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
              <h1>Функциональные и классовые компоненты</h1>
              <section>
                <p>Проще всего объявить React-компонент как функцию:</p>
                
                <div className='code-example'>
                  <pre><code>{`
    function Welcome(props) {
      return <h1>Привет, {props.name}</h1>;
    }
      `}
                  </code></pre>
                </div>
                
                <p>Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.</p>
                
                <p>Ещё компоненты можно определять как <a className='link-with-back' href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes' target={"_blank"}>классы ES6:</a></p>

                <div className='code-example'>
                  <pre><code>{`
  class Welcome extends React.Component {
    render() {
      return <h1>Привет, {this.props.name}</h1>;
    }
  }
          `}
                  </code></pre>
                </div>
                
                <div className='attention-block'>
                  <p><b>Примечание: Всегда называйте компоненты с заглавной буквы.</b><br/>Если компонент начинается с маленькой буквы, React принимает его за DOM-тег. Например, <span className='text-with-back'>{`<div />`}</span> это div-тег из HTML, а <span className='text-with-back'>{`<Welcome />`}</span> это уже наш компонент <span className='text-with-back'>Welcome</span>, который должен быть в области видимости.</p>
                </div>

                <h2>Как отрендерить компонент</h2>

                <p>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>

                <div className='code-example'>
                  <pre><code>{`
  function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
  }
  
  const element = <Welcome name="Алиса" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
          `}
                  </code></pre>
                </div>

                <p>Что именно здесь происходит:</p>

                <ol>
                  <li>Мы передаём React-элемент <span className='text-with-back'>{`<Welcome name="Алиса" />`}</span> в <span className='text-with-back'>{`ReactDOM.render()`}</span>.</li>
                  <li>React вызывает наш компонент <span className='text-with-back'>{`Welcome`}</span> с пропсами <span className='text-with-back'>{`{name: 'Алиса'}`}</span>.</li>
                  <li>Наш компонент <span className='text-with-back'>{`Welcome`}</span> возвращает элемент <span className='text-with-back'>{`<h1>Привет, Алиса</h1>`}</span> в качестве результата.</li>
                  <li>React DOM делает минимальные изменения в DOM, чтобы получилось <span className='text-with-back'>{`<h1>Привет, Алиса</h1>`}</span>.</li>
                </ol>

                {/* <LinksBottom links={linksBottom.prev}/> */}
                <div className='bottom-links'>
                  <Link className='bottom-link-element' to={'/'}>&#8592; About</Link>
                  <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                  <Link className='bottom-link-element' to={'/props'}>Props &#8594;</Link>
                </div>
              </section>
            </div>
          </div>
        </Content>
      <CustomFooter />
    </Layout>
  )
}

export default () => <CustomComponents />