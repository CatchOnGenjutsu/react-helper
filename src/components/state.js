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
                <h1>State (Состояние)</h1>
                <section>
                  <p>Объект <b>state</b> описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента.</p>
                  <p>Если props представляет входные данные, которые передаются в компонент извне, то состояние хранит такие объекты, которые создаются в компоненте и полностью зависят от компонента.</p>
                  <p>Также в отличие от props значения в state можно изменять.</p>
                  <p>И еще важный момент - значения из state должны использоваться при рендеринге. Если какой-то объект не используется в рендерниге компонента, то нет смысла сохранять его в state.</p>
                  <p>Нередко state описывает какие-то визуальные свойства элемента, которые могут изменяться при взаимодействие с пользователем. Например, кнопку нажали, и соответственно можно изменить ее состояние - придать ей какой-то другой цвет, тень и так далее. Кнопку нажали повторно - можно вернуть исходное состояние.</p>
                  <p>Стоит отметить, что традиционно объект state применялся только в классах-компонентах. В функциональных же компонентах для управления состоянием применяется другая архитектура, основанная на хуках.</p>
                  <div className='code-example'>
                    <pre><code>{`
      class Hello extends React.Component {
        constructor(props) {
            super(props);
            this.state = {welcome: "Добро пожаловать на сайт!"};
        }
        render() {
            return <h1>{this.state.welcome}</h1>;
        }
      }
      ReactDOM.createRoot(
          document.getElementById("app")
      )
      .render(
          <Hello />
      );
        `}
                    </code></pre>
                  </div>
                  <h2>Обновление состояния</h2>
                  <div className='attention-block'>
                    <p>Не изменяйте состояние напрямую</p>
                  </div>
                  <p>В следующем примере повторного рендера не происходит:</p>
                  <div className='code-example'>
                    <pre><code>{`
    // Неправильно
    this.state.comment = 'Привет';
            `}
                    </code></pre>
                  </div>
                  <p>Вместо этого используйте <span className='text-with-back'>setState():</span></p>
                  <div className='code-example'>
                    <pre><code>{`
    // Правильно
    this.setState({comment: 'Привет'});
            `}
                    </code></pre>
                  </div>
                  <p>Конструктор — это единственное место, где вы можете присвоить значение <span className='text-with-back'>this.state</span> напрямую.</p>

                  <h2>Обновления состояния могут быть асинхронными</h2>
                  <p>React может сгруппировать несколько вызовов <span className='text-with-back'>setState()</span> в одно обновление для улучшения производительности.</p>
                  <p>Поскольку <span className='text-with-back'>this.props</span> и <span className='text-with-back'>this.state</span> могут обновляться асинхронно, вы не должны полагаться на их текущее значение для вычисления следующего состояния.</p>
                  <p>Например, следующий код может не обновить счётчик:</p>
                  <div className='code-example'>
                    <pre><code>{`
    // Неправильно
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
            `}
                    </code></pre>
                  </div>
                  <p>Правильно будет использовать второй вариант вызова <span className='text-with-back'>setState()</span>, который принимает функцию, а не объект. Эта функция получит предыдущее состояние в качестве первого аргумента и значения пропсов непосредственно во время обновления в качестве второго аргумента:</p>
                  <div className='code-example'>
                    <pre><code>{`
    // Правильно
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
            `}
                    </code></pre>
                  </div>
                  
                  <h2>Обновления состояния объединяются</h2>
                  <p>Когда мы вызываем <span className='text-with-back'>setState()</span>, React объединит аргумент (новое состояние) c текущим состоянием.</p>
                  <p>Например, состояние может состоять из нескольких независимых полей:</p>
                  <div className='code-example'>
                    <pre><code>{`
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        comments: []
      };
    }
            `}
                    </code></pre>
                  </div>
                  <p>Их можно обновлять по отдельности с помощью отдельных вызовов <span className='text-with-back'>setState():</span></p>
                  <div className='code-example'>
                    <pre><code>{`
    componentDidMount() {
      fetchPosts().then(response => {
        this.setState({
          posts: response.posts
        });
      });
  
      fetchComments().then(response => {
        this.setState({
          comments: response.comments
        });
      });
    }
            `}
                    </code></pre>
                  </div>
                  <p>Состояния объединяются поверхностно, поэтому вызов <span className='text-with-back'>{`this.setState({comments})`}</span> оставляет <span className='text-with-back'>this.state.posts</span> нетронутым, но полностью заменяет <span className='text-with-back'>this.state.comments.</span></p>

                  
                  <h2>Использование хука состояния</h2>
                  <p>Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.</p>
                  <h3>Что такое хук?</h3>
                  <p>Наш новый пример начинается с того, что импортирует хук <span className='text-with-back'>useState</span> из React:</p>
                  <div className='code-example'>
                    <pre><code>{`
    import React, { useState } from 'react';

    function Example() {
      // ...
    }
            `}
                    </code></pre>
                  </div>
                  <p><b>Что такое хук?</b> Хук — это специальная функция, которая позволяет «подцепиться» к возможностям React. Например, хук <span className='text-with-back'>useState</span> предоставляет функциональным компонентам доступ к состоянию React. Мы узнаем про другие хуки чуть позже.</p>
                  <p><b>Когда применить хук?</b> Раньше, если вы писали функциональный компонент и осознавали, что вам нужно наделить его состоянием, вам приходилось превращать этот компонент в класс. Теперь же вы можете использовать хук внутри существующего функционального компонента. Мы покажем это прямо сейчас!</p>
                  <h3>Объявление переменной состояния</h3>
                  <p>Мы вызываем хук <span className='text-with-back'>useState</span> напрямую изнутри нашего компонента.</p>
                  <div className='code-example'>
                    <pre><code>{`
    import React, { useState } from 'react';

    function Example() {
      // Объявление новой переменной состояния «count»
      const [count, setCount] = useState(0);
            `}
                    </code></pre>
                  </div>
                  <p>Мы объявляем переменную состояния <span className='text-with-back'>count</span> и устанавливаем ей значение <span className='text-with-back'>0</span>. React будет помнить текущее (наиболее свежее) значение между рендерингами и передавать его нашей функции. Если мы захотим изменить <span className='text-with-back'>count</span>, мы вызовем <span className='text-with-back'>setCount</span>.</p>
                  <p><b>Что делает вызов useState?</b>  Он объявляет «переменную состояния». Мы называли переменную <span className='text-with-back'>count</span>, но могли дать ей любое имя, хоть <span className='text-with-back'>банан</span>. Таким образом мы можем «сохранить» некоторые значения между вызовами функции. <span className='text-with-back'>useState</span> — это новый способ использовать те же возможности, что даёт <span className='text-with-back'>this.state</span> в классах. Обычно переменные «исчезают» при выходе из функции. К переменным состояния это не относится, потому что их сохраняет React.</p>
                  <p><b>Какие аргументы передавать useState?</b> Единственный аргумент <span className='text-with-back'>useState</span> — это исходное состояние. В отличие от случая с классами, состояние может быть и не объектом, а строкой или числом, если нам так удобно. Поскольку в нашем примере отслеживается количество сделанных пользователем кликов, мы передаём 0 в качестве исходного значения переменной. (Если нам нужно было бы хранить два разных значения в состоянии, то пришлось бы вызвать <span className='text-with-back'>useState()</span> дважды.)</p>
                  <p><b>Что возвращается из useState?</b> Вызов <span className='text-with-back'>useState</span> вернёт пару значений: текущее состояние и функцию, обновляющую состояние. Поэтому мы пишем <span className='text-with-back'>const [count, setCount] = useState()</span>. Это похоже на <span className='text-with-back'>this.state.count</span> и <span className='text-with-back'>this.setState</span> в классах, с той лишь разницей, что сейчас мы принимаем их сразу в паре.</p>

                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/props'}>&#8592; Props</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/lifecycle'}>Lifecycle &#8594;</Link>
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