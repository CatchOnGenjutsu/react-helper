import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js'
import CustomFooter from './footer.js'
import {
  Link,
} from "react-router-dom";

const { Content } = Layout;

function About() {
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
              <h1>
                Что такое React?
              </h1>
              <section>
                <p>React — это декларативная, эффективная и гибкая JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет вам собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами».</p>
                
                <p>React имеет несколько разных видов компонентов, но мы начнём с подклассов <span className='text-with-back'>React.Component:</span></p>
                
                <div className='code-example'>
                  <pre><code>{`
    class ShoppingList extends React.Component {
      render() {
        return (
          <div className="shopping-list">
            <h1>Список покупок для {this.props.name}</h1>
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </div>
        );
      }
    }

    // Пример использования: <ShoppingList name="Марк" />
      `}
                  </code></pre>
                </div>
                
                <p>Мы используем компоненты, чтобы сообщить React, что мы хотим увидеть на экране. Каждый раз, когда наши данные меняются, React эффективно обновляет и повторно рендерит наши компоненты.</p>
                
                <p><span className='text-with-back'>ShoppingList</span> является примером <b>классового компонента React</b>. Компонент принимает параметры, которые называются пропсами (<span className='text-with-back'>props</span>, сокращение от <span className='text-with-back'>properties</span> — свойства), и возвращает из метода <span className='text-with-back'>render()</span> иерархию представлений для отображения.</p>
                
                <p>Метод <span className='text-with-back'>render</span> возвращает описание того, что вы хотите увидеть на экране. React берёт это описание и отображает результат. Если точнее, <span className='text-with-back'>render</span> возвращает <b>React-элемент</b>, который является легковесным описанием того, что нужно отрендерить. Большинство React-разработчиков используют специальный синтаксис под названием «JSX» для упрощения описания структуры. Во время компиляции синтаксис <span className='text-with-back'>{`<div />`}</span> преобразовывается в <span className='text-with-back'>{`React.createElement('div')`}</span> . Пример выше равнозначен вот этому:</p>

                <div className='code-example'>
                  <pre><code>{`
  return React.createElement('div', {className: 'shopping-list'},
    React.createElement('h1', /* ... h1 children ... */),
    React.createElement('ul', /* ... ul children ... */)
  );
          `}
                  </code></pre>
                </div>

                <a target={"_blank"} href="https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.17.11&externalPlugins=&assumptions=%7B%7D">Полная версия.</a>

                <p>Приведённый выше компонент <span className='text-with-back'>ShoppingList</span> рендерит только встроенные DOM-компоненты вроде <span className='text-with-back'>{`<div />`}</span> или <span className='text-with-back'>{`<li />`}</span>. Но вы также можете создавать и рендерить собственные компоненты. Например, теперь вы можете ссылаться на весь компонент со списком покупок, написав <span className='text-with-back'>{`<ShoppingList />`}</span>. Каждый React-компонент инкапсулирован и может использоваться независимо. Это позволяет создавать сложный UI из простых компонентов.</p>

                <div className='bottom-links'>
                  <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                  <Link className='bottom-link-element' to={'/components'}>Components &#8594;</Link>
                </div>
              </section>
            </div>
          </div>
        </Content>
      <CustomFooter />
    </Layout>
  )
}

export default () => <About />