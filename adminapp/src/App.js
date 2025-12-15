import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalyticsPage from './Component/Home/Analytics/AnalyticsPage';
import Dashboard from './Component/Home/Dashboard/Dashboard';
import ProfileOverview from './Component/Pages/Profiles/Profileoverview/ProfileOverview';
import Usersreports from './Component/Pages/users/Reports/Usersreports';
import SettingsDetails from './Component/Pages/Accounts/Settings/SetingDetails';
import TimelineUI from './Component/Pages/Projects/Timeline/Timeline';
import PricingPage from './Component/Pricing/Pricingpage';
import Charts from './Component/Charts/Charts';
import NotificationPage from './Component/Notifications/Notification';
import ChatLayout from './Component/Chats/Chats';
import Team from './Component/Pages/Profiles/Teams/Mainteam';
import Mainuser from './Component/Pages/users/Newusers/Mainuser';
import MainBilling from './Component/Pages/Accounts/Billing/MainBilling';
import NewProjectForm from './Component/Pages/Projects/Newprojects/NewProjects';
import AllProjects from './Component/Pages/Profiles/Allprojects/Allproject';
import InvoicePage from './Component/Pages/Accounts/Invoice/InvoicePage';
import SecuritySettings from './Component/Pages/Accounts/Security/Securitysettings';
import Kanban from './Component/Applications/Kanban/kanbanmain';
import Wizard from './Component/Applications/Wizard/Wizard';
import DataTables from './Component/Applications/Data table/Datatables';
import Calendar from './Component/Applications/Calender/Maincalendar';
import NewProduct from './Component/Ecommerce/Products/NEWproduct';
import OrderListPage from './Component/Ecommerce/Orders/OREDERlists/Orderlist';
import Orderdetail from './Component/Ecommerce/Orders/orederdetails/Order-detail';
import EditProductPage from './Component/Ecommerce/Editproduct/MainEditProductpAGE.jsx';
import MainProductlist from './Component/Ecommerce/Prodctlist/MainProductList.jsx';
import SignupForm from './Component/Authentication/SignupForm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/Profile" element={<ProfileOverview />} />
        <Route path="/userreports" element={<Usersreports />} />
        <Route path="/usersetting" element={<SettingsDetails />} />
         {/*<Route path="/Timeline" element={<TimelineUI />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Charts" element={<Charts />} />
        <Route path="/Notifications" element={<NotificationPage />} />
        <Route path="/Chats" element={<ChatLayout />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/newuser" element={<Mainuser />} />
        <Route path="/Billing" element={<MainBilling />} />
        <Route path="/newproject" element={<NewProjectForm />} />
        <Route path="/allproject" element={<AllProjects />} />
        <Route path="/Invoice" element={<InvoicePage />} />
        <Route path="/Security" element={<SecuritySettings />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/Datatable" element={<DataTables />} />
        <Route path="/calendar" element={< Calendar/>} />
        <Route path="/Newproduct" element={< NewProduct/>} />
        <Route path="/orderlist" element={< OrderListPage/>} />
        <Route path="/orderlisttwo" element={< Orderdetail/>} />
        <Route path="/editProduct" element={<EditProductPage/>} />
        <Route path="/Productlist" element={<MainProductlist/>} />
        <Route path="/signup" element={<SignupForm/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
