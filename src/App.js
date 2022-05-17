import React from 'react';
import About from './components/about.js';
import Components from './components/components.js';
import Props from './components/props.js';
import State from './components/state.js';
import Lifecycle from './components/lifecycle.js';
import Events from './components/events.js';
import Keys from './components/keys.js';
import Refs from './components/refs.js';
import Async from './components/async.js';
import VirtualDOM from './components/virtualdom.js';
import Fragments from './components/fragments.js';
import Memo from './components/memo.js';
import UseEffect from './components/useEffects.js';
import CustomRouter from './components/router.js';
import CustomContext from './components/context.js';
import Form from './components/form.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";


export default () => (
  <Router>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/components" element={<Components />}/>
        <Route path="/props" element={<Props />}/>
        <Route path="/state" element={<State />}/>
        <Route path="/lifecycle" element={<Lifecycle />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/keys" element={<Keys />}/>
        <Route path="/refs" element={<Refs />}/>
        <Route path="/async" element={<Async />}/>
        <Route path="/dom" element={<VirtualDOM />}/>
        <Route path="/fragment" element={<Fragments />}/>
        <Route path="/memo" element={<Memo />}/>
        <Route path="/useeffect" element={<UseEffect />}/>
        <Route path="/router" element={<CustomRouter />}/>
        <Route path="/context" element={<CustomContext />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
);
