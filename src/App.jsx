/* eslint-disable no-unused-vars */
import { useData } from "./context/dataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./assets/styles/GlobalStyles";
import Home from "./components/pages/Home";
import SearchingPage from "./components/pages/SearchingPage";
import DetailItemPage from "./components/pages/DetailItemPage";
import CheckoutPage from "./components/pages/CheckoutPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // don't fetch when switch between tabs in browser
        staleTime: 1000 * 60 * 10, //time when data is considered as fresh
        cacheTime: 1000 * 60 * 10, //time data is stored in cache
      },
    },
  });

  const { dataItem } = useData();
  const title = dataItem?.title;
  const shopId = dataItem?.shop_id;
  const itemId = dataItem?.item_id;
  const encodedTitle = encodeURI(title);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchingPage />} />

          <Route
            path="/:encodedTitle/:shopId/:itemId"
            element={<DetailItemPage />}
          />

          <Route path="/cart" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
