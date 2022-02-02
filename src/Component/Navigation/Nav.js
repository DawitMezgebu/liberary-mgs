import React from 'react';
import './myStylesheet.css'

function Login() {
    return (
        <div>
        <div class="v2_3">
            <div class="v2_5">
                <div class="v6_2"></div>
            </div>
            <div class="menu">
                <a href="./Navbar" class="Dashboard_menu"><i class="fa fa-tachometer"></i>     Dashboard</a>
                <a href="./Client" class="ClientList_menu"><i class="fa fa-list"></i>    Client List</a>               
                <a href="./Email" class="email_menu"><i class="fa fa-envelope"></i>  Email</a>
                <a href="./Message" class="message_menu"><i class="fa fa-commenting"></i>  Messages</a>
                <a href="add.html" class="addlawyer_menu"><i class="fa fa-plus-circle"></i>  Add Lawyer</a>
                <a href="#" class="order_menu"><i class="fa fa-dot-circle-o"></i>  Order List</a>
                <a href="login.html" class="logout_menu"><i class="fa fa-sign-out"></i>  Log Out</a>
            </div>
        </div>
    </div>
    )
}

export default Login;