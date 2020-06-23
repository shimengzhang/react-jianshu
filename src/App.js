import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
// import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>
//           <div>
//             <Header />
//             <Route path='/' exact component={Home}></Route>
//             <Route path='/login' exact component={Login}></Route>
//             <Route path='/write' exact component={Write}></Route>
//             <Route path='/detail/:id' exact component={Detail}></Route>
//           </div>
//         </BrowserRouter>
//       </Provider>
//     );
//   }
// }

const Detail = lazy(() => import(/* webpackChunkName:"detail" */ './pages/detail'));

// 延迟加载 Detail 组件
function LazyDetail() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Detail></Detail>
    </Suspense>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={LazyDetail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
