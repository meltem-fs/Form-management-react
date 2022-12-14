
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from './router/AppRouter';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter/>
        <ToastContainer />
      </AuthProvider>
      
    </div>
  );
}

export default App;
