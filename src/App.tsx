import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import Spinner from './components/ui/Spinner/Spinner';

import './App.css';

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const Page404 = lazy(() => import("./pages/Page404/Page404")) ;
const PostPage = lazy(() => import("./pages/PostPage/PostPage"));

function App() {
  return (
    <Router>
      <div className="app">
        <ErrorBoundary>
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
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;


