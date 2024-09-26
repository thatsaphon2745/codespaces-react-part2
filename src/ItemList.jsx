import { useState, useEffect, useRef } from "react";

function Item({ name, isPacked=false}) {
    return (<li>
        {name} {isPacked && '✓'}
    </li>)
}
export default function ItemList(){
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        console.log("This is component is loaded!");
        return ()=>{
            alert("component unloaded!");
        }
    },[]);
    const items=[{name: "Sunglass",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:true},
        {name:"Powerbank",isPacked:false},
        {name:"Tower",isPacked:false},
    ];
    const filterList = items.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const itemsList = filterList.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />);
    return (
        <>
            {/* <div className="search-container">
                <input
                    type="text"
                    placeholder="search..."
                    className="search-box"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div> */}
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)} 
            />
            <ul>
                {itemsList}
            </ul>
        </>
    );
}