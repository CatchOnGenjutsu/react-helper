import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomMemo() {
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
                <h1>React.memo</h1>
                <section>
                <div className='code-example'>
                    <pre><code>{`
      const MyComponent = React.memo(function MyComponent(props) {
        /* рендер с использованием пропсов */
      });
        `}
                    </code></pre>
                  </div>
                  <p><span className='text-with-back'>React.memo</span> — это <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/higher-order-components.html'>компонент высшего порядка</a>.</p>
  
                  <p>Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов <span className='text-with-back'>React.memo</span> для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
                  <p><span className='text-with-back'>React.memo</span> затрагивает только изменения пропсов. Если функциональный компонент обёрнут в <span className='text-with-back'>React.memo</span> и использует <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/hooks-state.html'>useState</a>, <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/hooks-reference.html#usereducer'>useReducer</a> или <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/hooks-reference.html#usecontext'>useContext</a>, он будет повторно рендериться при изменении состояния или контекста.</p>
                  <p>По умолчанию он поверхностно сравнивает вложенные объекты в объекте <span className='text-with-back'>props</span>. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.</p>
                  <div className='code-example'>
                    <pre><code>{`
      function MyComponent(props) {
        /* рендер с использованием пропсов */
      }
      function areEqual(prevProps, nextProps) {
        /*
        возвращает true, если nextProps рендерит
        тот же результат что и prevProps,
        иначе возвращает false
        */
      }
      export default React.memo(MyComponent, areEqual);
        `}
                    </code></pre>
                  </div>
                  <p>Этот метод предназначен только для <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/optimizing-performance.html'>оптимизации производительности</a>. Не полагайтесь на него, чтобы «предотвратить» рендер, так как это может привести к ошибкам.</p>
                  <div className='attention-block'>
                    <h3>Примечание</h3>
                    <p>В отличие от метода <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/react-component.html#shouldcomponentupdate'>shouldComponentUpdate()</a> для классовых компонентов, функция <span className='text-with-back'>areEqual</span> возвращает <span className='text-with-back'>true</span>, если пропсы равны, и значение <span className='text-with-back'>false</span>, если пропсы не равны. Это обратные значения для <span className='text-with-back'>shouldComponentUpdate</span>.</p>
                  </div>
                  
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/fragment'}>&#8592; React.Fragment</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/useeffect'}>useEffect &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomMemo />