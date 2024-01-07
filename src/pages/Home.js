import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import CompanyCard from "../Components/CompanyCard";
import Footer from "../Components/Footer";
import { useState } from "react";

function Home() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const check = localStorage.getItem("isLoggedIn");

    if (check === "false") {
      navigate("/login");
    }
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/company/getAllCompanies');
        setItems(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col ">
      <Navbar />
      <div className="h-full w-full flex flex-col items-center flex-1 " >
        <p className="text-[25px] text-[#c5c2c2] m-5 " >Placement Archives</p>
        {items.payload?.map((item) => (
        <CompanyCard key={item.id} item={item} />
      ))}
      </div>
      <Footer/>
    </div>
  );
}
export default Home;
