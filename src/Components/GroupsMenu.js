import React, { useEffect,useState,useContext } from 'react'

function GroupsMenu() {
    const menus = [        
    {"id":1, "name": "menu1", "pic": "", "isActive":true},
    {"id":2, "name": "menu2", "pic": "", "isActive":false},
    {"id":3, "name": "menu3", "pic": "", "isActive":false},
    {"id":4, "name": "menu4", "pic": "", "isActive":false}, 
    {"id":5, "name": "menu5", "pic": "", "isActive":false}, 
    {"id":6, "name": "menu6", "pic": "", "isActive":false}  
]

    return (
        <div>
            {menus.map(menu => 
               <p key={menu.id} className="menuItem">{menu.name}</p>
            )}
        </div>
    )
}

export default GroupsMenu
