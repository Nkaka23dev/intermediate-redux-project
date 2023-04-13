import { Provider } from "react-redux";
import Articles from "./components/Articles";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import { store } from "./services/features/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

import PubDetails from "./pages/PubDetails";
import ModNavBar from "./layouts/ModNavBar";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <ModNavBar />
          <Switch>
            <Route exact path="/">
              <Articles />
            </Route>
            <Route path="/publisher/:id">
              <PubDetails />
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
