/* eslint-disable no-unused-vars */
import HomeLayout from "./ui/HomeLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchingPage from "./pages/SearchingPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DetailItem from "./pages/DetailItem";
import { useState } from "react";

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

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/search" element={<SearchingPage />} />
          <Route path="/item" element={<DetailItem />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
