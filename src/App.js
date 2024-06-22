// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import Dashboard from './Dashboard/Dashboard'
import About from './components/About'
import AdminLogin from './components/AdminLogin'
import Services from './components/Services'
import Overview from './Dashboard/Overview'
import Orders from './Dashboard/Orders'
import Users from './Dashboard/Users'
import PrivacyPolicy from './components/PrivacyPolicy'
import Faq from './components/Faq'
import Contactus from './components/Contactus'
import PageNotFound from './components/PageNotFound'
import Staffs from './Dashboard/Staffs'
import AddStaffs from './Dashboard/AddStaffs'
import LiquidDamage from './components/MobileServices/LiquidDamage'
import SignalCharging from './components/MobileServices/SignalCharging'
import PowerIssues from './components/MobileServices/PowerIssues'
import MotherBoard from './components/MobileServices/MotherBoard'
import Damaged from './components/MobileServices/Damaged'
import DisplayFailure from './components/MobileServices/DisplayFailure'
import Apple from './components/Brand/Apple'
import Mi from './components/Brand/Mi'
import Samsung from './components/Brand/Samsung'
import Vivo from './components/Brand/Vivo'
import OnePlus from './components/Brand/OnePlus'
import Oppo from './components/Brand/Oppo'
import Realme from './components/Brand/Realme'
import Moto from './components/Brand/Moto'
import Nokia from './components/Brand/Nokia'
import Honor from './components/Brand/Honor'
import Google from './components/Brand/Google'
import Asus from './components/Brand/Asus'
import Iqoq from './components/Brand/Iqoq'
import Nothing from './components/Brand/Nothing'
import Poco from './components/Brand/Poco'
import BookService from './components/MobileServices/BookService'
import Payment from './components/Payment'
import Iphone13promax from './components/Brand/Apple/Iphone13promax'
import Iphone14pro from './components/Brand/Apple/Iphone14pro'
import IphoneSe from './components/Brand/Apple/IphoneSe'
import Iphone7 from './components/Brand/Apple/Iphone7'
import Iphone7s from './components/Brand/Apple/Iphone7s'
import Iphone5 from './components/Brand/Apple/Iphone5'
import Iphone6 from './components/Brand/Apple/Iphone6'
import Iphone6s from './components/Brand/Apple/Iphone6s'
import Iphone6plus from './components/Brand/Apple/Iphone6plus'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/add-staffs" element={<AddStaffs />} />
          <Route path="/edit-staffs/:id" element={<AddStaffs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/display-failure" element={<DisplayFailure />} />
          <Route path="/liquid-damage" element={<LiquidDamage />} />
          <Route path="/signal-charging" element={<SignalCharging />} />
          <Route path="/power-issues" element={<PowerIssues />} />
          <Route path="/mother-board" element={<MotherBoard />} />
          <Route path="/damaged-mobile" element={<Damaged />} />
          <Route path="/apple-repair" element={<Apple />} />
          <Route path="/mi-repair" element={<Mi />} />
          <Route path="/samsung-repair" element={<Samsung />} />
          <Route path="/vivo-repair" element={<Vivo />} />
          <Route path="/oneplus-repair" element={<OnePlus />} />
          <Route path="/oppo-repair" element={<Oppo />} />
          <Route path="/realme-repair" element={<Realme />} />
          <Route path="/moto-repair" element={<Moto />} />
          <Route path="/nokia-repair" element={<Nokia />} />
          <Route path="/honor-repair" element={<Honor />} />
          <Route path="/google-repair" element={<Google />} />
          <Route path="/asus-repair" element={<Asus />} />
          <Route path="/iqoq-repair" element={<Iqoq />} />
          <Route path="/nothing-repair" element={<Nothing />} />
          <Route path="/poco-repair" element={<Poco />} />
          <Route path="/book-service" element={<BookService />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/iphone13promax" element={<Iphone13promax />} />
          <Route path="/iphone14pro" element={<Iphone14pro />} />
          <Route path="/iphonese" element={<IphoneSe />} />
          <Route path="/iphone7" element={<Iphone7 />} />
          <Route path="/iphone7s" element={<Iphone7s />} />
          <Route path="/iphone5" element={<Iphone5 />} />
          <Route path="/iphone6" element={<Iphone6 />} />
          <Route path="/iphone6s" element={<Iphone6s />} />
          <Route path="/iphone6plus" element={<Iphone6plus />} />
          {/* <Route path='/oneplus-repair' element={</>}/> */}
        </Routes>
      </Router>
      {/* elements */}
    </div>
  )
}

export default App
