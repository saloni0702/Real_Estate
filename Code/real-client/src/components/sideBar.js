import HeaderBar from "./header" 
import "./sidebar.css"
import Logo from "./logo";

function Sidebar(){
    return(
<div class="page">
    <div class="sidebar">
            <div className="box1">
            <Logo/>
            </div>
            <div className="box2">
            <li><img src="/images/house.svg"className="home"/>&nbsp;&nbsp;<a href="#"> Property</a></li><br/>
            <li><img src="/images/bell-fill.svg"/>&nbsp;&nbsp;<a href="#" className="link5"> Assistance</a></li><br/>
            <li><img src="/images/arrow-bar-down.svg"/>&nbsp;&nbsp;<a href="#" className="link5"> Received Interest</a></li><br/>
            <li><img src="/images/arrow-bar-up.svg"/>&nbsp;&nbsp;<a href="#" className="link5"> Sent Interest</a></li><br/>
            <li><img src="/images/eye-fill.svg"/>&nbsp;&nbsp;<a href="#" className="link5"> Property Views</a></li><br/>
            <li><img src="/images/tag-fill.svg"/>&nbsp;&nbsp;<a href="#" className="link5"> Tariff Plan</a></li><br/>
            </div>
           
            </div>
    
    
</div>
)}
export default Sidebar;