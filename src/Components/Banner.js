import React from 'react'



export default  function Banner({children, title, subtitle,console}) {


    return(
        <div className="banner">
            <h1 className='title'>{title}</h1>
            <div />
            <p className='subtitle mb2pc'>{subtitle} {console}</p>
            {children}
        </div>
    )

}

