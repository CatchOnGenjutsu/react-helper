import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";


const { Content } = Layout;

function CustomLifecycle() {
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
                <h1>Lifecycle (Жизненный цикл)</h1>
                <section>
                  <h3>Есть 3 основных метода жизненного цикла:</h3>
                  <div className='code-example'>
                    <pre><code>{`
    class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }
    
      componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
    
      render() {
        return (
          <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
        `}
                    </code></pre>
                  </div>
                  
                  <p><span className='text-with-back'>componentDidMount()</span> вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.</p>

                  <p>В <span className='text-with-back'>componentDidUpdate()</span> <b>можно вызывать setState()</b>, однако его <b>необходимо обернуть в условие</b>, как в примере выше, чтобы не возник бесконечный цикл. Вызов <span className='text-with-back'>setState()</span> влечет за собой дополнительный рендер, который незаметен для пользователя, но может повлиять на производительность компонента. Вместо «отражения» пропсов в состоянии рекомендуется использовать пропсы напрямую.</p>

                  <p><span className='text-with-back'>componentWillUnmount()</span> вызывается непосредственно перед размонтированием и удалением компонента. В этом методе выполняется необходимый сброс: отмена таймеров, сетевых запросов и подписок, созданных в <span className='text-with-back'>componentDidMount()</span>.<br/>Не используйте <span className='text-with-back'>setState()</span> в <span className='text-with-back'>componentWillUnmount()</span>, так как компонент никогда не рендерится повторно. После того, как экземпляр компонента будет размонтирован, он никогда не будет примонтирован снова.</p>

                  <p>Подробнее об этих и других методах жизненного цикла можно узнать по <a href='https://www.w3schools.com/react/react_lifecycle.asp' target={"_blank"} className="link-with-back">ссылке</a>.</p>

                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/state'}>&#8592; State</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/events'}>Events &#8594;</Link>
                  </div>

                </section>
              </div>
            </div>

      
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomLifecycle />