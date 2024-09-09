import React from 'react'

import { NavLink } from 'react-router-dom'

export const Item = ({content,route}) => <li className='text-black  font-serif'><NavLink className="text-xl" to={route}>{content}</NavLink></li>