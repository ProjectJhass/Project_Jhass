import React from 'react'

import { NavLink } from 'react-router-dom'

export const Item = ({content,route}) => <li className='text-black font-Open-Sans'><NavLink to={route}>{content}</NavLink></li>