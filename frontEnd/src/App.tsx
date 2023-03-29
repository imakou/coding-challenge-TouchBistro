import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MedianPrimeNumberList from "./components/MedianPrimeNumberList";
import { MedianNumberStateProvider } from "./context/medianNumberContext";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MedianNumberStateProvider>
        <MedianPrimeNumberList />
      </MedianNumberStateProvider>
    </QueryClientProvider>
  );
}

export default App;
