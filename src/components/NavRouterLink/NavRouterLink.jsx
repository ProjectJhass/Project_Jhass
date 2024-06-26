import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavRouterLink = ({routes,content}) => <li><NavLink className="text-black" to={routes}>{content}</NavLink></li>