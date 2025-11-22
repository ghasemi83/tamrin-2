import { Routes } from '@angular/router';
import { PublicTemplate } from './page/public/public-template/public-template';
import { PrivateTemplate } from './page/private/private-template/private-template';
import { Homepage } from './page/public/homepage/homepage';
import { Aboutpage } from './page/public/aboutpage/aboutpage';
import { Productspage } from './page/public/productspage/productspage';
import * as privatepage from './page/private/productspage/productspage';
import { Contactpage } from './page/public/contactpage/contactpage';
import { Dashboardpage } from './page/private/dashboardpage/dashboardpage';
import { Userpage } from './page/private/userpage/userpage';
import { Orderspage } from './page/private/orderspage/orderspage';
import { Loginpage } from './page/public/loginpage/loginpage';


export const routes: Routes = [
    {path:'public',component:PublicTemplate,children:[
        {path:'home',component:Homepage},
        {path:'about',component:Aboutpage},
        {path:'products',component:Productspage},
        {path:'login',component:Loginpage},
        {path:'contact',component:Contactpage},
        {path:'',redirectTo:'home',pathMatch:'prefix'},
        {path:'**',redirectTo:'home'}
    ]},
    {path:'private',component:PrivateTemplate , children:[
        {path:'dashboard', component:Dashboardpage},
        {path:'user', component:Userpage},
        {path:'products', component:Productspage},
       {path:'orders', component:Orderspage},
       {path:'', redirectTo:'dashboard', pathMatch:'prefix'},
       {path:'**',redirectTo:'dashboard'},
    ]},
    {path:'', redirectTo:'public',pathMatch:'full'},
    {path:'**',redirectTo:'public'},
];
