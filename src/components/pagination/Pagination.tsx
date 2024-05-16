import React, { Dispatch, SetStateAction } from 'react'
import classes from './styles.module.css'
import { range } from 'lodash'
import { clsx } from 'clsx'

type Props = {
    count: number
    limit: number
    page: number
    onChangePage: Dispatch<SetStateAction<number>>
}

const Pagination: React.FC<Props> = ({ count, limit, page, onChangePage }) => {
    if (!count) return null

    return (
        <div className={classes.root}>
            {range(1, count / limit).map((item) => (
                <p
                    className={clsx(classes.page, {
                        [classes.activePage]: item === page,
                    })}
                    onClick={() => onChangePage(item)}
                >
                    {item}
                </p>
            ))}
        </div>
    )
}

export default Pagination
