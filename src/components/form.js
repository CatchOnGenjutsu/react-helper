import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Breadcrumb } from 'antd';
import CustomHeader from './header.js';
import CustomFooter from './footer.js';
import {Link} from "react-router-dom";

const { Content } = Layout;

function CustomForm() {
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
                <h1>Form</h1>
                <section>
                  <p>Хотя в React мы можем использовать все стандартные элементы форм, которые есть в HTML, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React.</p>
                  <div className='code-example'>
                    <pre><code>{`
      class UserForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {name: ""};
            this.onChange = this.onChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        onChange(e) {
          var val = e.target.value;
          this.setState({name: val});
        }
      
        handleSubmit(e) {
          e.preventDefault();
          alert("Имя: " + this.state.name);
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <p>
                <label>Имя:</label><br />
                <input type="text" value={this.state.name} onChange={this.onChange}/>
              </p>
              <input type="submit" value="Отправить" />
            </form>
          );
        }
      }
      
      ReactDOM.render(
        <UserForm />,
        document.getElementById("app")
      )
        `}
                    </code></pre>
                  </div>

                  <p>Чтобы контролировать введенные значения, в конструкторе устанавливается объект <span className='text-with-back'>state:</span></p>
                  <div className='code-example'>
                    <pre><code>{`
      this.state = {name: ""};
        `}
                    </code></pre>
                  </div>

                  <p>При определении поля ввода каждое поле связывается с определенным значением в <span className='text-with-back'>state:</span></p>
                  <div className='code-example'>
                    <pre><code>{`
      <input type="text" value={this.state.name} onChange={this.onChange} />
        `}
                    </code></pre>
                  </div>
                  
                  <p>Так, источником значения для поля ввода имени является объект <span className='text-with-back'>this.state.name</span>.</p>
                  <p>Для отслеживания изменений в поле ввода нам надо определить обработчик для события <span className='text-with-back'>change</span> с помощью атрибута <b>onChange</b>. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.</p>
                  <p>Суть каждого обработчика заключается в изменении значений в <span className='text-with-back'>this.state:</span></p>
                  
                  <div className='code-example'>
                    <pre><code>{`
      onChange(e) {
        var val = e.target.value;
        this.setState({name: val});
      }
        `}
                    </code></pre>
                  </div>
                  <p>С помощью <span className='text-with-back'>e.target.value</span> получаем введенное значение. После обновления новое значение <span className='text-with-back'>this.state.name</span> отобразится в поле ввода.</p>

                  <p>Больше информации и примеров использования можно получить на странице <a target={"_blank"} className="link-with-back" href='https://ru.reactjs.org/docs/forms.html'>Формы.</a></p>
        
                  <div className='bottom-links'>
                    <Link className='bottom-link-element' to={'/context'}>&#8592; Context</Link>
                    <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
                    <Link className='bottom-link-element' to={'/'}>Home &#8962;</Link>
                  </div>
                </section>
              </div>
            </div>
          </Content>
        <CustomFooter />
      </Layout>
    )
}

export default () => <CustomForm />