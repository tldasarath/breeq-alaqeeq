import React from 'react'
import clsx from 'clsx'

const Container = ({ children, className, id }) => {
    return (
        <div
            id={id}
            className={clsx(
                "w-full px-4 sm:px-6 lg:px-11 xl:px-[80px] 2xl:px-[180px] mx-auto max-w-7xl 2xl:max-w-[1980px]",
                className
            )}
        >
            {children}
        </div>
    )
}

export default Container
