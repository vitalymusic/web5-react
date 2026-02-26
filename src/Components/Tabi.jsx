import { useState,useEffect } from 'react';

import './tabi.css';
function Tabi() {
    const [activeTab, setActiveTab] = useState(1);
    const [content, setContent] = useState([]);


    // useEffect(()=>{
    //      fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    //         .then((response) => response.json())
    //         .then((json) => setContent(json));   
    // },[])

     useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${activeTab}/comments`)
            .then((response) => response.json())
            .then((json) => setContent(json));   
    },[activeTab])

    // const handleSetActiveTab = (item)=>{setActiveTab(item)}

    return (
    <>
    <div className="tabButtons">
        <button onClick={()=>{setActiveTab(1)}} className={activeTab === 1?"active":""}>Pirmais</button>
        <button onClick={()=>{setActiveTab(2)}} className={activeTab === 2?"active":""}>Otrais</button>
        <button onClick={()=>{setActiveTab(3)}} className={activeTab === 3?"active":""}>Trešais</button>
    </div>
    <div className="tabsContent">
           {activeTab === 1 && (
                    <div className="tab1">
                          Pirmais saturs
                    </div>
                )}

                {activeTab === 2 && (
                    <div className="tab2">
                        otrais saturs
                    </div>
                )}

                {activeTab === 3 && (
                    <div className="tab3">
                        trešais saturs
                    </div>
                )}
        
        
        
    </div>
    <h1>Saturs:</h1>
    <div className="content">
            {content.map((item,i)=>{
                  return <p key={i}>{item.body}</p>
            })}         
    </div>
    {console.log(activeTab)}
    
    </>);
}

export default Tabi;