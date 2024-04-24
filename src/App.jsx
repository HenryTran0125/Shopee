/* eslint-disable no-unused-vars */
import HomeLayout from "./ui/HomeLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchingPage from "./pages/SearchingPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/search" element={<SearchingPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
