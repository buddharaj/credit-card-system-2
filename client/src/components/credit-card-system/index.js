import React, { useEffect, useState } from "react";
import CreditCardForm from "./CreditCardForm";
import Table from "./Table";
function Main() {
 const [creditCardData, setcreditCardData] = useState([])
 const [apiError, setapiError] = useState();
 const [count, setcount] = useState(0);

 // get credit card list from server
 useEffect(() => {
    if (count) {
        fetch("/credit-card/list")
        .then(res => res.json())
        .then(data => setcreditCardData(data))
    }
 }, [count]);
 
 // send form data to server 
 const onSubmit = (data, e) => {
    fetch('/credit-card/create', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(async (response) => {
        if(!response.ok) {
            const res = await response.json();
            throw new Error(res.Message)
        };
        setapiError({})
    }).then(() => {
        setcount(count+1);
        e.target.reset();
    }).catch((err) => {
        setapiError({message:err.message})
    })
}

 return(
     <React.Fragment>
     <div className="ui container">
     <h1 className="ui large header">Credit Card System</h1>
     <div className="ui row">
        <CreditCardForm onSubmit={onSubmit} apiError={apiError} />
     </div>
     <br/><br/>
     <div className="ui row">
        <Table creditCardData={creditCardData}/>
     </div>
    </div>
     </React.Fragment>
 );
}
export default Main;