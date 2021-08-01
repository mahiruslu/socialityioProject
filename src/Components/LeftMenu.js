import React from 'react'
import Groups from './Groups'
import GroupsMenu from './GroupsMenu'
import ThemeContext,{ThemeProvider} from '../context/ThemeContext'

function LeftMenu() {
    return (
    <ThemeProvider>
        <div className="leftMenu">
            <div className="appName">Socialty.io</div>
            <div className="groups"> 
                <Groups/>
            </div>
            <div className="groupMenu"> 
                <GroupsMenu/>
            </div>
        </div>
      </ThemeProvider>
    )
}

export default LeftMenu
