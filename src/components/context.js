import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomContext() {
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
                <h1>Context</h1>
                <section>
                  <p><i>Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.</i></p>
                  <h3>Когда использовать контекст</h3>
                  <p>Контекст разработан для передачи данных, которые можно назвать «глобальными» для всего дерева React-компонентов (например, текущий аутентифицированный пользователь, UI-тема или выбранный язык).</p>
                  <h2>API</h2>
                  <h3>React.createContext</h3>
                  <div className='code-example'>
                    <pre><code>{`
      const MyContext = React.createContext(defaultValue);
        `}
                    </code></pre>
                  </div>
                  <p>Создаёт объект <span className='text-with-back'>Context</span>. Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего <span className='text-with-back'>Provider</span> выше в дереве компонентов.</p>
                  <p>Аргумент <span className='text-with-back'>defaultValue</span> используется <b>только</b> в том случае, если для компонента нет подходящего <span className='text-with-back'>Provider</span> выше в дереве. Значение по умолчанию может быть полезно для тестирования компонентов в изоляции без необходимости оборачивать их. Обратите внимание: если передать <span className='text-with-back'>undefined</span> как значение <span className='text-with-back'>Provider</span>, компоненты, использующие этот контекст, не будут использовать <span className='text-with-back'>defaultValue</span>.</p>
                  
                  <h3>Context.Provider</h3>
                  <div className='code-example'>
                    <pre><code>{`
      <MyContext.Provider value={/* некоторое значение */}>
        `}
                    </code></pre>
                  </div>
                  <p>Каждый объект <span className='text-with-back'>Context</span> используется вместе с <span className='text-with-back'>Provider</span> компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.</p>
                  <p>Компонент <span className='text-with-back'>Provider</span> принимает проп <span className='text-with-back'>value</span>, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента <span className='text-with-back'>Provider</span>. Один <span className='text-with-back'>Provider</span> может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты <span className='text-with-back'>Provider</span> могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.</p>
                  <p>Все потребители, которые являются потомками Provider, будут повторно рендериться, как только проп <span className='text-with-back'>value</span> у Provider изменится. Потребитель (включая <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/context.html#classcontexttype'>.contextType</a> и <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/hooks-reference.html#usecontext'>useContext</a>) перерендерится при изменении контекста, даже если его родитель, не использующий данный контекст, блокирует повторные рендеры с помощью <span className='text-with-back'>shouldComponentUpdate</span>.</p>

                  <h3>Class.contextType</h3>
                  <div className='code-example'>
                    <pre><code>{`
      class MyClass extends React.Component {
        componentDidMount() {
          let value = this.context;
          /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
        }
        componentDidUpdate() {
          let value = this.context;
          /* ... */
        }
        componentWillUnmount() {
          let value = this.context;
          /* ... */
        }
        render() {
          let value = this.context;
          /* отрендерить что-то, используя значение MyContext */
        }
      }
      MyClass.contextType = MyContext;
        `}
                    </code></pre>
                  </div>
                  <p>В свойство класса <span className='text-with-back'>contextType</span> может быть назначен объект контекста, созданный с помощью <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/context.html#reactcreatecontext'>React.createContext()</a>. С помощью этого свойства вы можете использовать ближайшее и актуальное значение указанного контекста при помощи <span className='text-with-back'>this.context</span>. В этом случае вы получаете доступ к контексту, как во всех методах жизненного цикла, так и в рендер-методе.</p>
                  <div className='attention-block'>
                    <h3>Примечание</h3>
                    <p>Вы можете подписаться только на один контекст, используя этот API. В случае, если вам необходимо использовать больше одного, смотрите <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/context.html#consuming-multiple-contexts'>Использование нескольких контекстов</a>.</p>
                    <p>Если вы используете экспериментальный <a target={"_blank"} className="link-with-back" href='https://babeljs.io/docs/en/babel-plugin-proposal-class-properties'>синтаксис публичных полей класса</a>, вы можете использовать <b>static</b> поле класса, чтобы инициализировать ваш <span className='text-with-back'>contextType</span>.</p>
                  </div>
                  <div className='code-example'>
                    <pre><code>{`
      class MyClass extends React.Component {
        static contextType = MyContext;
        render() {
          let value = this.context;
          /* отрендерить что-то, используя значение MyContext */
        }
      }
        `}
                    </code></pre>
                  </div>

                  <h3>Context.Consumer</h3>
                  <div className='code-example'>
                    <pre><code>{`
      <MyContext.Consumer>
        {value => /* отрендерить что-то, используя значение контекста */}
      </MyContext.Consumer>
        `}
                    </code></pre>
                  </div>
                  <p><span className='text-with-back'>Consumer</span> — это React-компонент, который подписывается на изменения контекста. В свою очередь, использование этого компонента позволяет вам подписаться на контекст в <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components'>функциональном компоненте</a>.</p>
                  <p><span className='text-with-back'>Consumer</span> принимает <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/render-props.html#using-props-other-than-render'>функцию в качестве дочернего компонента</a>. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент <span className='text-with-back'>value</span> будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу <span className='text-with-back'>value</span> компонента <span className='text-with-back'>Provider</span>. Если такого компонента <span className='text-with-back'>Provider</span> не существует, аргумент <span className='text-with-back'>value</span> будет равен значению <span className='text-with-back'>defaultValue</span>, которое было передано в <span className='text-with-back'>createContext()</span>.</p>
                  <div className='attention-block'>
                    <h3>Примечание</h3>
                    <p>Подробнее про паттерн <i>«функция как дочерний компонент»</i> можно узнать на странице <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/render-props.html'>Рендер-пропсы</a>.</p>
                  </div>

                  <h3>Context.displayName</h3>
                  <p>Объекту <span className='text-with-back'>Context</span> можно задать строковое свойство <span className='text-with-back'>displayName</span>. React DevTools использует это свойство при отображении контекста.</p>
                  <p>К примеру, следующий компонент будет отображаться под именем MyDisplayName в DevTools:</p>
                  <div className='code-example'>
                    <pre><code>{`
      const MyContext = React.createContext(/* некоторое значение */);
      MyContext.displayName = 'MyDisplayName';

      <MyContext.Provider> // "MyDisplayName.Provider" в DevTools
      <MyContext.Consumer> // "MyDisplayName.Consumer" в DevTools
        `}
                    </code></pre>
                  </div>

                  <p>Больше информации и примеров использования можно получить на странице <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/context.html'>Контекст</a>.</p>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/router'}>&#8592; Router</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/form'}>Work with Form &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomContext />