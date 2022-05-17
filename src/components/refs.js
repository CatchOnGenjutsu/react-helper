import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomRefs() {
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
                <h1>Refs (Рефы)</h1>
                <section>
                  <p>Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.</p>
                  <p>В обычном потоке данных React родительские компоненты могут взаимодействовать с дочерними только через <span className='text-with-back'>пропсы</span>. Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми пропсами. Тем не менее, могут возникать ситуации, когда вам требуется императивно изменить дочерний элемент, обойдя обычный поток данных. Подлежащий изменениям дочерний элемент может быть как React-компонентом, так и DOM-элементом. React предоставляет лазейку для обоих случаев.</p>
                  <h2>Когда использовать рефы</h2>
                  <p>Ситуации, в которых использование рефов является оправданным:</p>
                  <ul className='content-list'>
                    <li>Управление фокусом, выделение текста или воспроизведение медиа.</li>
                    <li>Императивный вызов анимаций.</li>
                    <li>Интеграция со сторонними DOM-библиотеками.</li>
                  </ul>
                  <p>Избегайте использования рефов в ситуациях, когда задачу можно решить декларативным способом.</p>
                  <p>Например, вместо того чтобы определять методы <span className='text-with-back'>open()</span> и <span className='text-with-back'>close()</span> в компоненте <span className='text-with-back'>Dialog</span>, лучше передавать ему проп <span className='text-with-back'>isOpen</span>.</p>
                  <h2>Не злоупотребляйте рефами</h2>
                  <p>Возможно, с первого взгляда вам показалось, что рефы применяются, когда нужно решить какую-то задачу в вашем приложении «во что бы то ни стало». Если у вас сложилось такое впечатление, сделайте паузу и обдумайте, где должно храниться конкретное состояние в иерархии компонентов. Часто становится очевидно, что правильным местом для хранения состояния является верхний уровень в иерархии. Подробнее об этом — в главе <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/lifting-state-up.html'>Подъём состояния</a>.</p>
                  <h2>Создание рефов</h2>
                  <p>Рефы создаются с помощью <span className='text-with-back'>React.createRef()</span> и прикрепляются к React-элементам через <span className='text-with-back'>ref</span> атрибут. Обычно рефы присваиваются свойству экземпляра класса в конструкторе, чтобы на них можно было ссылаться из любой части компонента.</p>
                  <div className='code-example'>
                    <pre><code>{`
      class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.myRef = React.createRef();
        }
        render() {
          return <div ref={this.myRef} />;
        }
      }
        `}
                    </code></pre>
                  </div>

                  <h2>Доступ к рефам</h2>
                  <p>Когда реф передаётся элементу в методе <span className='text-with-back'>render</span>, ссылка на данный узел доступна через свойство рефа <span className='text-with-back'>current</span>.</p>
                  <div className='code-example'>
                    <pre><code>{`
      const node = this.myRef.current;
        `}
                    </code></pre>
                  </div>
                  <p>Значение рефа отличается в зависимости от типа узла:</p>
                  <ul className='content-list'>
                    <li>Когда атрибут <span className='text-with-back'>ref</span> используется с HTML-элементом, свойство <span className='text-with-back'>current</span> созданного рефа в конструкторе с помощью <span className='text-with-back'>React.createRef()</span> получает соответствующий DOM-элемент.</li>
                    <li>Когда атрибут <span className='text-with-back'>ref</span> используется с классовым компонентом, свойство <span className='text-with-back'>current</span> объекта-рефа получает экземпляр смонтированного компонента.</li>
                    <li><b>Нельзя использовать ref атрибут с функциональными компонентами</b>, потому что для них не создаётся экземпляров.</li>
                  </ul>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/keys'}>&#8592; Keys</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/async'}>Async &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomRefs />