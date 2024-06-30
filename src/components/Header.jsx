import React, { createRef, useContext, useEffect, useRef, useState } from 'react'
import myContext from '..'
import funcContext from './Main';

//refはreturnされてるものしか適用されない
const Header = () => {
    const material= useContext(myContext);
    const info = material.sections;
    const icon = material.icons;
    const ref = useRef();
    const triangleRef = useRef();
    const [bool,setBool] = useState(false);
    const [dom,setDom] = useState([]);
    const [location,setLocation] = useState([{}]);
    const [tab,setTab] = useState(false);
    const [innerWid,setInnerWid]= useState(window.innerWidth)
 
    useEffect(()=>{
        const currentRef =ref.current;
        const currentTriangle = triangleRef.current;
        console.log(currentRef.clientTop)
        currentTriangle.style.left= `${currentRef.clientLeft+(currentRef.clientWidth/2)-5}px`;
        currentTriangle.style.top = `${currentRef.clientTop-10}px`
        currentRef.style.left = `${location.x+(location.y-location.x)/2}px`;
    },[location,bool])

    useEffect(()=>{
        window.addEventListener("resize",()=>{setInnerWid(window.innerWidth)});
        if(innerWid>767)setTab(false);
    },[innerWid])

    const handleBool = ()=>{
        setBool(false);  
    }
    let timeId;
    const handleEnter = (e)=>{
        clearTimeout(timeId);
        setBool(true);
        const result = info.find(item=>item.section===e.target.innerHTML);
        setDom(result.material)
        const styles = e.target.getBoundingClientRect();
        const location = {x:styles.left,
                          y:styles.right,
                          h:styles.height
                        };
        setLocation(location)
      }
    const handleKeep = ()=>{
        clearTimeout(timeId);
        setBool(true);
    }
    const handleLeave = ()=>{
        timeId = setTimeout(handleBool,1000);
        return() => clearTimeout(timeId);
      }
    const handleTab = ()=>{
        setTab(!tab);
    }
  return (
    <div>
        <header>
        <h1>Stripe</h1>
        <nav>
            <ul className={"forPC"}>
                {info.map((elm,index)=>
                <li onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{elm.section}</li>
                )}
            </ul>
            <ul className={"forSmartPhone"}>
                <div onClick={handleTab} className={tab?"tabActive":"IconBox"}>{icon.tabIcon}</div>
            </ul>
        </nav>
        <button className={"SignInBtn"}>Sing in</button>
        </header>

        {        
            <div onMouseEnter={handleKeep} onMouseLeave={handleLeave} className={!bool?"hidden details":"details"} ref={ref}>
                <div ref={triangleRef} className={"triangle"}></div>
                <h2>Product</h2>
                <nav className={"navDetails"}>
                    <ul className={"menuContainerV1" }>
                        {dom.map((elm,index)=>
                            <li key={index}><span>{elm.icon}</span>{elm.title}</li>    
                        )}
                    </ul>
                </nav>
            </div>
        }
        {
            <div className={tab?"Open":"Close"}>
            <div onClick={handleTab}><div className={tab?"CloseIcon":"DeleteCloseIcon"}>{icon.closeIcon}</div></div>
                {info.map((elm,value)=>{
                    let title = elm.section;
                    return(
                    <nav key={value} className={"showListForSmartPhone"}>
                        <p>{title}</p>
                        <ul>
                            {elm.material.map(item=><li><span>{item.icon}</span>{item.title}</li>)}
                        </ul>
                    </nav>
                    )
                })}
            </div>
            }
    </div>
  )
}

export default Header