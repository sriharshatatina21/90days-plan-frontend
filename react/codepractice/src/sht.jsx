import React from "react"

export default function Sht(){
    return(
        <>
        {apps}
        {as}
        <h2 className="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit magnam eius quas numquam consectetur laborum enim eum libero nihil animi nesciunt quos vel exercitationem dolor quod non assumenda, perspiciatis possimus fugit minus!</h2>
        </>
    )
};

const apps = React.createElement(
    "h5",null,"sai"
)
const as = React.createElement(
    "p",{className:"p-tag"},""
)