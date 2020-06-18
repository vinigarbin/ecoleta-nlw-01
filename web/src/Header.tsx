import React from 'react';


//? nao obrigatoria
interface HeaderProps {
    title: String;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}


export default Header;