import landingPage from './views/Register'
import AdminDashboard from './views/AdminDashboard'
import AdminSettings from './views/AdminSettings'
// import Raw from './views/AdminSettings'

import employeebooking from './views/employeebooking'

export default[{
    path: "/",
    component: landingPage,
    name: "LandingPage",
},
{
    path: "/admin/panel",
    component: AdminDashboard,
    name: "AdminDashboard", 
},
{
    path: "/admin/settings",
    component: AdminSettings,
    name: "AdminSettings",
},
{
    path: "/employee/booking",
    component: employeebooking,
    name: "employeebooking",
}

]