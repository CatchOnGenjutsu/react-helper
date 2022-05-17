import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomVirtualDOM() {
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
                <h1>Virtual DOM</h1>
                <section>
                  <p>Вместо того, чтобы взаимодействовать с DOM напрямую, мы работаем с его легковесной копией. Мы можем вносить изменения в копию, исходя из наших потребностей, а после этого применять изменения к реальному DOM.<br/>При этом происходит сравнение DOM-дерева с его виртуальной копией, определяется разница и запускается перерисовка того, что было изменено.</p>
                  <p>Такой подход работает быстрее, потому как не включает в себя все тяжеловесные части реального DOM.<br/>Но только если мы делаем это правильно. Есть две проблемы: когда именно делать повторную перерисовку DOM и как это сделать эффективно.</p>
                  <h3>Когда?</h3>
                  <p>Когда данные изменяются и нуждается в обновлении.</p>
                  <p>Есть два варианта узнать, что данные изменились:</p>
                  <ul className='content-list'>
                    <li>Первый из них — «dirty checking» (грязная проверка) заключается в том, чтобы опрашивать данные через регулярные промежутки времени и рекурсивно проверять все значения в структуре данных.</li>
                    <li>Второй вариант — «observable» (наблюдаемый) заключается в наблюдении за изменением состояния. Если ничего не изменилось, мы ничего не делаем. Если изменилось, мы точно знаем, что нужно обновить.</li>          
                  </ul>
                  <h3>Как?</h3>
                  <p>Что делает этот подход действительно быстрым:</p>
                  <ul className='content-list'>
                    <li>Эффективные алгоритмы сравнения</li>
                    <li>Группировка операций чтения/записи при работе с DOM</li>
                    <li>Эффективное обновление только под-деревьев</li>
                  </ul>
                 
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/async'}>&#8592; Async</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/fragment'}>React.Fragment &#8594;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomVirtualDOM />