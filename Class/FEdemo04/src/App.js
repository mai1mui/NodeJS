import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactCuli from "./components/ContactCuli";
import ContactGD from "./components/ContactGD";
import AdminPage from "./pages/AdminPage";
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/culi" element={<ContactCuli />} />
          <Route path="/gd" element={<ContactGD />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
