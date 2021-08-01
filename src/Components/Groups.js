import React,{useState,useEffect} from 'react'

function Groups() {
    const [groups,setGroups] = useState([        
    {"id":1, "name": "group1", "pic": "", "isActive":true},
    {"id":2, "name": "group2", "pic": "", "isActive":false},
    {"id":3, "name": "group3", "pic": "", "isActive":false},
    {"id":4, "name": "group4", "pic": "", "isActive":false},
    {"id":5, "name": "group5", "pic": "", "isActive":false},
    {"id":6, "name": "group6", "pic": "", "isActive":false} 
])
    useEffect(() => {

    },[])
    return (
        <div>
            <ul>
                {groups.map(group => 
                <li key={group.id} className={group.isActive === true ? 'group active':'group'}
                onClick={(e)=> {
                    e.preventDefault();
                    
                    console.log(groups.find(item => item = group.id))
                    //    !group.isActive ? setGroups({"id":group.id,"isActive":true}) 
                    //    : setGroups({"id":group.id,"isActive":false}) 
                    }}>
                    {group.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Groups
