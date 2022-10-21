import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Spinner from './components/Spinner/Spinner';
import MainPage from './pages/MainPage/MainPage';
import Page404 from "./pages/Page404/Page404";
import PostPage from './pages/PostPage/PostPage';

function App() {
  return (
    <Router>
      <div className="app">
      {/* <AppHeader /> */}
        <main>
          <Suspense fallback={<Spinner size={150} />}>
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/posts/:id">
                <PostPage />
              </Route>
              <Route>
                {<Page404 />}
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;


