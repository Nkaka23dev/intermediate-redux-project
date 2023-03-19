import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import Articles from "./components/Articles";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import { articleApi } from "./services/actions/apiService";

export default function App() {
  return (
    <>
      <ApiProvider api={articleApi}>
        <div className="flex h-full justify-between flex-col">
          <Navbar />
          <Articles />
          <Footer />
        </div>
      </ApiProvider>
    </>
  );
}
