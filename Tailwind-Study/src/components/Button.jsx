import React from 'react';
import ButtonSvg from '../assets/svg/ButtonSvg';
const Button = ({className,href,onClick,children,px,white}) => {
  const classes= `button relative infline-flex items-center justify-center h-11   ${px||'px-7'}${white?'text-n-8':'text-n-1'} ${className||''}`;
  
  const spanClasses='relative z-10 font-bold transition-colors hover:text-blue-400'
  
  const renderButton=()=>(
      <button className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
  )
  const renderLink=()=>(
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  )

  return href
  ?renderLink()
  : renderButton();
}

export default Button

