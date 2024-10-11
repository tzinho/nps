import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { HomePage } from "./components/pages/home";
import { ThemeProvider } from "./components/providers/theme";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen max-w-[1440px] p-3 flex flex-col justify-between">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
