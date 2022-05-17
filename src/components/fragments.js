import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomFragments() {
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
                <h1>Фрагменты</h1>
                <section>
                  <p>Возврат нескольких элементов из компонента является распространённой практикой в React. Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.</p>
                  
                  <div className='code-example'>
                    <pre><code>{`
      render() {
        return (
          <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
          </React.Fragment>
        );
      }
        `}
                    </code></pre>
                  </div>

                  <h3>Использование</h3>
                  <p>Возврат списка дочерних элементов из компонента — распространённая практика.<br/>Рассмотрим пример на React:</p>
                  <div className='code-example'>
                    <pre><code>{`
      class Table extends React.Component {
        render() {
          return (
            <table>
              <tr>
                <Columns />
              </tr>
            </table>
          );
        }
      }
      class Columns extends React.Component {
        render() {
          return (
            <React.Fragment>
              <td>Привет</td>
              <td>Мир</td>
            </React.Fragment>
          );
        }
      }
        `}
                    </code></pre>
                  </div>
                  <h3>Сокращённая запись</h3>
                  <p>Существует сокращённая запись объявления фрагментов. Она выглядит как пустые теги:</p>
                  <div className='code-example'>
                    <pre><code>{`
      class Columns extends React.Component {
        render() {
          return (
            <>
              <td>Привет</td>
              <td>Мир</td>
            </>
          );
        }
      }
        `}
                    </code></pre>
                  </div>
                  <p>Можно использовать <span className='text-with-back'>{`<></>`}</span> так же, как используется любой другой элемент. Однако такая запись не поддерживает ключи или атрибуты.</p>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/dom'}>&#8592; Virtual DOM</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/memo'}>React.Memo &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomFragments />