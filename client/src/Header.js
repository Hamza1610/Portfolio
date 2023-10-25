import './Header.css';
const Header = () => {
  const click = () => console.log("Button clicked");
    return (
      <header className="App-header">
        <div className='logo'>
          {/* <img className='p-logo' src=''/> to be here*/}
          <button className="btn-mode" onclick = { click }>Dark Mode</button>
        </div>
        <div className='menu_container'>
          <a href='#aboutP'><div className='about_me'> About me</div></a>
          <a href='#projectP'><div className='my_projects'>Projects</div></a>
          <a href='#contactP'><div className='contact_me' >Contact me</div></a>
        </div>
    </header>
    );
}
 
export default Header;