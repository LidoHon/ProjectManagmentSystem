import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import MainLayout from "./layouts/MainLayout";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Project from "./pages/Project";
// import AddClientModal from "./components/AddClientModel";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
