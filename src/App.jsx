import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Khata from "./pages/Khata";
import Customer from "./pages/Customer";
import Sales from "./pages/Sales";
import Contextprovider from "./context/Contextprovider";


function App() {
  return (
    <Contextprovider>
      <Router>
      <Routes>
        {/* Dashboard Layout with nested routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} /> {/* Default */}
          <Route path="/customers" element={<Customer />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/khata" element={<Khata />} />
        </Route>
      </Routes>
    </Router>

    </Contextprovider>
    
  );
}

export default App;
