import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render(props = {}) {
  const { container } = props;
  const root = ReactDOM.createRoot((container || document).querySelector('#root'));
  root.render(
    <App />
  );
}

// 没有 qiankun 使用默认的 render
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode((container || document).querySelector('#root'));
}

// 如果你想开始测量应用程序的性能，传递一个函数来记录结果(例如:reportWebVitals(console.log))或发送到分析端点。
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
