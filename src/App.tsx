import { BrowserRouter } from "react-router-dom";
import "./App.css"
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
// Removed unused Button import

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark"> 
        
        <Layout>Hello</Layout> 
      
      </ThemeProvider>
      

    </BrowserRouter>
  )
}

export default App
