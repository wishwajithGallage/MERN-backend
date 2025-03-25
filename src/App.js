import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="App-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Welcome to MERN Stack CRUD Application
        </motion.h1>

        <motion.button
          className="users-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/users")}
        >
          Users
        </motion.button>
      </header>
    </motion.div>
  );
}

export default App;
