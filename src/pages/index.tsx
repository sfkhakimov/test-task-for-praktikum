import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

type Props = {
    routes: RouteObject[]
}
export const RouteProvider: React.FC<Props> = ({ routes }) => {
    const el = useRoutes(routes)

    return el
}
