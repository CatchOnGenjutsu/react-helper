import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomKeys() {
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
                <h1>Keys (Ключи)</h1>
                <section>
                  <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>
                  <div className='code-example'>
                    <pre><code>{`
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      );
        `}
                    </code></pre>
                  </div>
                  <p>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:</p>
                  <div className='code-example'>
                    <pre><code>{`
      const todoItems = todos.map((todo) =>
        <li key={todo.id}>
          {todo.text}
        </li>
      );
        `}
                    </code></pre>
                  </div>
                  <p>Когда у вас нет заданных ID для списка, то <span className='text-with-back'>в крайнем случае</span> можно использовать индекс элемента как ключ.</p>
                  <h2>Извлечение компонентов с ключами</h2>
                  <p>Ключи нужно определять непосредственно внутри массивов.</p>
                  <p>Например, если вы извлекаете компонент <span className='text-with-back'>ListItem</span>, то нужно указывать ключ для <span className='text-with-back'>{`<ListItem />`}</span> в массиве, а не в элементе <span className='text-with-back'>{`<li>`}</span> внутри самого <span className='text-with-back'>ListItem</span>.</p>
                  <div className='code-example'>
                    <pre><code>{`
    function ListItem(props) {
      // Правильно! Не нужно определять здесь ключ:
      return <li>{props.value}</li>;
    }
    
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        // Правильно! Ключ нужно определять внутри массива:
        <ListItem key={number.toString()} value={number} />
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }
    
    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(
      <NumberList numbers={numbers} />,
      document.getElementById('root')
    );
            `}
                    </code></pre>
                  </div>
                  <p>Как правило, элементам внутри <span className='text-with-back'>map()</span> нужны ключи.</p>
                  <h2>Ключи должны быть уникальными среди соседних элементов</h2>
                  <p>Ключи внутри массива должны быть уникальными только среди своих соседних элементов. Им не нужно быть уникальными глобально. Можно использовать один и тот же ключ в двух разных массивах.</p>
                  <p>Ключи служат подсказками для React, но они никогда не передаются в ваши компоненты. Если в компоненте нужно то же самое значение, то передайте его явно через проп с другим именем.</p>
                  <h2>Встраивание map() в JSX</h2>
                  <p>В примерах выше мы отдельно определяли переменную <span className='text-with-back'>listItems</span> и вставляли её в JSX:</p>
                  <div className='code-example'>
                    <pre><code>{`
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }
            `}
                    </code></pre>
                  </div>
                  <p>JSX позволяет <span className='text-with-back'>встроить любое выражение</span> в фигурные скобки, так что мы можем включить результат выполнения <span className='text-with-back'>map()</span>:</p>
                  <div className='code-example'>
                    <pre><code>{`
    function NumberList(props) {
      const numbers = props.numbers;
      return (
        <ul>
          {numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} />
          )}
        </ul>
      );
    }
            `}
                    </code></pre>
                  </div>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/events'}>&#8592; Events</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/refs'}>Refs &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomKeys />