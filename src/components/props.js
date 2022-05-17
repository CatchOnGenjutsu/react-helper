import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";


const { Content } = Layout;

function CustomProps(){
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
              <h1>React Props (Пропсы)</h1>
              <section>
                <p>Props — это аргументы, передаваемые компонентам React.</p>
                <p>Props передаются компонентам через атрибуты HTML.</p>
                <div className='attention-block'>
                  <p><span className='text-with-back'>props</span> обозначает свойства.</p>
                </div>
                <p>React Props похожи на аргументы функций в JavaScript и атрибуты в HTML.</p>
                <p>Чтобы отправить <span className='text-with-back'>props</span> в компонент, используйте тот же синтаксис, что и атрибуты HTML:</p>
                <p><b>Пример</b></p>
                <p>Добавьте атрибут «brand» к элементу «Car»:</p>
                <div className='code-example'>
                  <pre><code>{`
    const myElement = <Car brand="Ford" />;
      `}
                  </code></pre>
                </div>
                
                <p>Компонент получает аргумент как <span className='text-with-back'>props</span> объект:</p>
                <div className='code-example'>
                  <pre><code>{`
  function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
          `}
                  </code></pre>
                </div>
              
                <div className='attention-block'>
                  <p><b>Примечание.</b> React Props доступны только для чтения! Вы получите сообщение об ошибке, если попытаетесь изменить их значение.</p>
                </div>

                <div className='bottom-links'>
                  <Link className='bottom-link-element' to={'/components'}>&#8592; Components</Link>
                  <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                  <Link className='bottom-link-element' to={'/state'}>State &#8594;</Link>
                </div>
              </section>
            </div>
          </div>
        </Content>
      <CustomFooter />
    </Layout>
  )
}

export default () => <CustomProps />