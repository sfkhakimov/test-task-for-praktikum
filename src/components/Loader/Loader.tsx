import React from 'react'
import classes from './style.module.css'

type Props = {
    when?: boolean
}
const Loader: React.FC<Props> = ({ when }) => {
    if (!when) return null
    return (
        <div className={classes.main}>
            <div className={classes.loaderWrapper}>
                <div className={classes.loader} />
            </div>
        </div>
    )
}

export default Loader
