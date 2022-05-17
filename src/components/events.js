import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomState() {
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
                <h1>Обработка событий</h1>
                <section>
                  <p>События в React именуются в стиле camelCase вместо нижнего регистра.</p>
                  <p>С JSX вы передаёте функцию как обработчик события вместо строки.</p>
                  <div className='code-example'>
                    <pre><code>{`
      <button onClick={activateLasers}>
        Активировать лазеры
      </button>
        `}
                    </code></pre>
                  </div>
                  <p>Ещё одно отличие — в React нельзя предотвратить обработчик события по умолчанию, вернув <span className='text-with-back'>false</span>false. Нужно явно вызвать <span className='text-with-back'>preventDefault</span>:</p>
                  <div className='code-example'>
                    <pre><code>{`
    function Form() {
      function handleSubmit(e) {
        e.preventDefault();
        console.log('Отправлена форма.');
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Отправить</button>
        </form>
      );
    }
            `}
                    </code></pre>
                  </div>
                  <p>При использовании React обычно не нужно вызывать <span className='text-with-back'>addEventListener</span>, чтобы добавить обработчики в DOM-элемент после его создания. Вместо этого добавьте обработчик сразу после того, как элемент отрендерился.</p>
                  <p>В компоненте, определённом с помощью <span className='text-with-back'>ES6-класса</span>, в качестве обработчика события обычно выступает один из методов класса. Например, этот компонент <span className='text-with-back'>Toggle</span> рендерит кнопку, которая позволяет пользователю переключать состояния между «Включено» и «Выключено»:</p>
                  <div className='code-example'>
                    <pre><code>{`
    class Toggle extends React.Component {
      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // Эта привязка обязательна для работы ${`this`} в колбэке.
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Включено' : 'Выключено'}
          </button>
        );
      }
    }
    
    ReactDOM.render(
      <Toggle />,
      document.getElementById('root')
    );
            `}
                    </code></pre>
                  </div>
                  <p>При обращении к <span className='text-with-back'>this</span> в JSX-колбэках необходимо учитывать, что методы класса в JavaScript по умолчанию <b>не привязаны</b> к контексту. Если вы забудете привязать метод <span className='text-with-back'>this.handleClick</span> и передать его в <span className='text-with-back'>onClick</span>, значение <span className='text-with-back'>this</span> будет <span className='text-with-back'>undefined</span> в момент вызова функции.</p>
                  <p>Дело не в работе React, это часть того, как работают функции в JavaScript. Обычно, если ссылаться на метод без <span className='text-with-back'>()</span> после него, например, <span className='text-with-back'>{`onClick={this.handleClick}`}</span>, этот метод нужно привязать.</p>

                  <h2>Передача аргументов в обработчики событий</h2>
                  <p>Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если <span className='text-with-back'>id</span> — это идентификатор строки, можно использовать следующие варианты:</p>
                  <div className='code-example'>
                    <pre><code>{`
    <button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
    <button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button>
            `}
                    </code></pre>
                  </div>
                  <p>Две строки выше — эквивалентны, и используют <a target={"_blank"} className="link-with-back" href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions'>стрелочные функции</a> и <a target={"_blank"} className="link-with-back" href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind'>Function.prototype.bind</a> соответственно.</p>
                  <p>В обоих случаях аргумент <span className='text-with-back'>e</span>, представляющий событие React, будет передан как второй аргумент после идентификатора. Используя стрелочную функцию, необходимо передавать аргумент явно, но с <span className='text-with-back'>bind</span> любые последующие аргументы передаются автоматически.</p>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/lifecycle'}>&#8592; Lifecycle</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/keys'}>Keys &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomState />