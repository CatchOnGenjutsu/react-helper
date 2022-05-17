import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomUseEffect() {
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
                <h1>Использование useEffect</h1>
                <section>
                  <p>Хук эффекта даёт вам возможность выполнять побочные эффекты в функциональном компоненте:</p>
                  
                  <div className='code-example'>
                    <pre><code>{`
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);
      
        // Аналогично componentDidMount и componentDidUpdate:
        useEffect(() => {
          // Обновляем заголовок документа с помощью API браузера
          document.title = \`Вы нажали \${count} раз\`;
        });
      
        return (
          <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
              Нажми на меня
            </button>
          </div>
        );
      }
        `}
                    </code></pre>
                  </div>

                  <p>Побочными эффектами в React-компонентах могут быть: загрузка данных, оформление подписки и изменение DOM вручную. Неважно, называете ли вы эти операции «побочными эффектами» (или просто «эффектами») или нет, скорее всего вам доводилось ранее использовать их в своих компонентах.</p>
                  <div className='attention-block'>
                    <h3>Совет</h3>
                    <p>Если вам знакомы классовые методы жизненного цикла React, хук <span className='text-with-back'>useEffect</span> представляет собой совокупность методов <span className='text-with-back'>componentDidMount</span>, <span className='text-with-back'>componentDidUpdate</span>, и <span className='text-with-back'>componentWillUnmount</span>.</p>
                  </div>
                  <h2>Эффекты без сброса</h2>
                  <p>Иногда мы хотим <b>выполнить дополнительный код после того, как React обновил DOM</b>. Сетевые запросы, изменения DOM вручную, логирование — всё это примеры эффектов, которые не требуют сброса. После того, как мы запустили их, можно сразу забыть о них, ведь больше никаких дополнительных действий не требуется. Давайте сравним, как классы и хуки позволяют нам реализовывать побочные эффекты.</p>
                  <div className='code-example'>
                    <pre><code>{`
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          document.title = \`Вы нажали \${count} раз\`;
        });
      
        return (
          <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
              Нажми на меня
            </button>
          </div>
        );
      }
        `}
                    </code></pre>
                  </div>
                  <p><b>Что же делает useEffect?</b> Используя этот хук, вы говорите React сделать что-то после рендера. React запомнит функцию (то есть «эффект»), которую вы передали и вызовет её после того, как внесёт все изменения в DOM. В этом эффекте мы устанавливаем заголовок документа, но мы также можем выполнить запрос данных или вызвать какой-нибудь императивный API.</p>
                  <p><b>Почему же мы вызываем useEffect непосредственно внутри компонента?</b> Это даёт нам доступ к переменной состояния <span className='text-with-back'>count</span> (или любым другим пропсам) прямиком из эффекта. Нам не нужен специальный API для доступа к этой переменной — она уже находится у нас в области видимости функции. Хуки используют JavaScript-замыкания, и таким образом, им не нужен специальный API для React, поскольку сам JavaScript уже имеет готовое решение для этой задачи.</p>
                  <p><b>Выполняется ли useEffect после каждого рендера?</b> Разумеется! По умолчанию он будет выполняться после каждого рендера и обновления. Мы рассмотрим, как настраивать это немного позже. Вместо того, чтобы воспринимать это с позиции «монтирования» и «обновления», мы советуем просто иметь в виду, что эффекты выполняются после каждого рендера. React гарантирует, что он запустит эффект только после того, как DOM уже обновился.</p>
                  <div className='attention-block'>
                    <h3>Совет</h3>
                    <p>В отличие от <span className='text-with-back'>componentDidMount</span> или <span className='text-with-back'>componentDidUpdate</span>, эффекты, запланированные с помощью <span className='text-with-back'>useEffect</span>, не блокируют браузер при попытке обновить экран. Ваше приложение будет быстрее реагировать на действия пользователя, даже когда эффект ещё не закончился. Большинству эффектов не нужно работать в синхронном режиме.</p>
                  </div>
                  <h2>Эффекты со сбросом</h2>
                  <p>Ранее мы рассмотрели побочные эффекты, которые не требуют сброса. Однако, есть случаи, когда сброс всё же необходим. Например, <b>нам может потребоваться установить подписку</b> на какой-нибудь внешний источник данных. В этом случае очень важно выполнять сброс, чтобы не случилось утечек памяти! Давайте сравним, как мы можем это реализовать с помощью классов и хуков.</p>
                  <div className='code-example'>
                    <pre><code>{`
      import React, { useState, useEffect } from 'react';

      function FriendStatus(props) {
        const [isOnline, setIsOnline] = useState(null);
      
        useEffect(() => {
          function handleStatusChange(status) {
            setIsOnline(status.isOnline);
          }
          ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
          // Указываем, как сбросить этот эффект:
          return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
          };
        });
      
        if (isOnline === null) {
          return 'Загрузка...';
        }
        return isOnline ? 'В сети' : 'Не в сети';
      }
        `}
                    </code></pre>
                  </div>
                  <p><b>Зачем мы вернули функцию из нашего эффекта?</b> Это необязательный механизм сброса эффектов. Каждый эффект может возвратить функцию, которая сбросит его. Это даёт нам возможность объединить вместе логику оформления и отмены подписки. Они, всё-таки, часть одного и того же эффекта!</p>
                  <p><b>Когда именно React будет сбрасывать эффект?</b> React будет сбрасывать эффект перед тем, как компонент размонтируется. Однако, как мы уже знаем, эффекты выполняются не один раз, а при каждом рендере. Вот почему React также сбрасывает эффект из предыдущего рендера, перед тем, как запустить следующий.</p>
                  <div className='attention-block'>
                    <h3>Совет</h3>
                    <p>Нам не нужно возвращать именованную функцию из эффекта. Мы назвали её «сбросом», чтобы объяснить её предназначение. Вы можете по желанию возвратить стрелочную функцию или назвать её как-то по-другому.</p>
                  </div>
                  <h2>Итог</h2>
                  <p>Мы узнали, что с помощью <span className='text-with-back'>useEffect</span>, мы можем вызывать разные побочные эффекты после того, как компонент отрендерится. Некоторым эффектам нужен сброс, поэтому они возвращают соответствующую функцию.</p>
                  <div className='code-example'>
                    <pre><code>{`
      useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }
    
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
      });
        `}
                    </code></pre>
                  </div>
                  <p>В некоторых эффектах нет этапа сброса, поэтому они не возвращают ничего.</p>
                  <div className='code-example'>
                    <pre><code>{`
      useEffect(() => {
        document.title = \`Вы нажали \${count} раз\`;
      });
        `}
                    </code></pre>
                  </div>
                  <p>Хук эффекта покрывает оба сценария единым API.</p>

                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/memo'}>&#8592; React.Memo</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/router'}>Router &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomUseEffect />