import "./index.css";
import About from "./ui/organisms/about/About";
import Footer from "./ui/organisms/footer/Footer";
import GetInTouchForm from "./ui/organisms/form/GetInTouchForm";
import MainPage from "./ui/organisms/main/MainPage";

function App() {
  return (
    <div className='bg-[#FCFBFA] w-full h-full'>
      <MainPage/>
      <About />
      <GetInTouchForm />
      <Footer />
    </div>
  );
}

export default App;
