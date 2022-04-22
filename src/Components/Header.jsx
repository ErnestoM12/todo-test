import React,{useState} from 'react'
import style from "../styles/header.module.css"

const Header = () => {

    const [AvtiveMobile, setAvtiveMobile] = useState('');
    
    const toogle = () => {
        if (AvtiveMobile === '') {
            setAvtiveMobile(style.open)
        } else {
            setAvtiveMobile('')
        }
    }


  return (
    <header className={style.header}>
    <nav className={style.nav}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
 
        </ul>
    </nav>
    <div className={`${style.hamburgerIcon} ${AvtiveMobile}`} onClick={toogle} >
        <div className={style.bar1}></div>
        <div className={style.bar2}></div>
        <div className={style.bar3}></div>
        <ul className={style.mobileMenu}>
            <li>Home</li>
            <li>About</li>
        </ul>
    </div>
    <div className={style.brand}><a href="#">My page</a></div>
</header>
)
  
}

export default Header
