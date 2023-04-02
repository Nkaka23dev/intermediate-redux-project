import { Provider } from "react-redux";
import Articles from "./components/Articles";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import { store } from "./services/actions/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import ArticlesDetails from "./pages/ArticlesDetails";
import PublisherDetails from "./pages/PublisherDetails";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Articles />
            </Route>
            <Route path="/blog/:id">
              <ArticlesDetails />
            </Route>
            <Route path="/publisher/:id">
              <PublisherDetails />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}
