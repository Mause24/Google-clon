import React from 'react'
import Input from '../../UI/Input'
import Config from '../../../assets/svg/Config'
import Tabs from '../../../assets/svg/Tabs'
import Search from '../../../assets/svg/Search'
import Image from '../../../assets/svg/Image'
import News from '../../../assets/svg/News'
import PlayButtom from '../../../assets/svg/PlayButtom'
import Book from '../../../assets/svg/Book'
import DotMenu from '../../../assets/svg/DotMenu'
import IconText from '../../UI/IconText'

const Header = () => {
  return (
    <header>
        <div className='header'>
            <div className='header__searching'>
                <img className='header__logo' src="/src/assets/imgs/logo_Google.png" alt="Logo_Google" />
                <Input />
            </div>
            <div className='header__actions'>
                <Config />
                <Tabs />
                <div>
                    <img src="/src/assets/imgs/Icono_perfil.jpg" alt="Icono_perfil" title='blazt123456are@gmail.com' />
                </div>
            </div>   
        </div>
        <div className='header__options'>
            <IconText Icon={Search} text={'Todos'} active/>
            <IconText Icon={Image} text={'Imagenes'}/>
            <IconText Icon={News} text={'Noticias'}/>
            <IconText Icon={PlayButtom} text={'Videos'}/>
            <IconText Icon={Book} text={'Libros'}/>
            <IconText Icon={DotMenu} text={'Mas'}/>
        </div>
    </header>
  )
}

export default Header