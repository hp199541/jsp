import dva from 'dva';
import './index.css';
import Router from './router'
// import createHistory from 'history/createBrowserHistory';
import {createBrowserHistory as createHistory} from 'history'
// 1. Initialize
const app = dva({
    history: createHistory(),
  });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/propduct').default);

// 4. Router
// app.router(require('./router').default);
app.router(Router);

// 5. Start
app.start('#root');
