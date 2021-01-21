import React from 'react';
import './ExpandedViewCard.css';
//  import the graph component here

function ExpandedViewCard({type}) {

  let data=[
    {
      name:"Aave",
      quantityPerSet:4.04,
      tokenPrice:5.73,
      priceAllocation:"1643.59(+8.90%)",
      percentChange:+92.76,
      totalPrice:154.34
    },
    {
      name:"Aave",
      quantityPerSet:4.04,
      tokenPrice:5.73,
      priceAllocation:"1643.59(+8.90%)",
      percentChange:+92.76,
      totalPrice:154.34
    },
    {
      name:"Aave",
      quantityPerSet:4.04,
      tokenPrice:5.73,
      priceAllocation:"1643.59(+8.90%)",
      percentChange:+92.76,
      totalPrice:154.34
    },
    {
      name:"Aave",
      quantityPerSet:4.04,
      tokenPrice:5.73,
      priceAllocation:"1643.59(+8.90%)",
      percentChange:+92.76,
      totalPrice:154.34
    },{
      name:"Aave",
      quantityPerSet:4.04,
      tokenPrice:5.73,
      priceAllocation:"1643.59(+8.90%)",
      percentChange:+92.76,
      totalPrice:154.34
    }


  ]
    return (
        <div className="expanded_view jumbotron">
            <h3>Top 5 Defi {type} Apps</h3>
            
        {/* Enter the chart component here */}
            
            <button type="button" className="btn btn-primary buttonStyle">Buy</button>
            <button type="button" className="btn btn-primary buttonStyle">Sell</button>
            <button type="button" className="btn btn-primary buttonStyle">Deposit</button>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Quantity per set</th>
      <th scope="col">Token Price</th>
      <th scope="col">Quantity Price Allocation</th>
      <th scope="col">Percent Change</th>
      <th scope="col">Total price per set</th>
     
    </tr>
  </thead>
  <tbody>
    {
      data.map((asset,i)=>(
      <tr>
      <th scope="row">{asset.name}</th>
      <td>{asset.quantityPerSet}</td>
      <td>{asset.tokenPrice}</td>
      <td>{asset.priceAllocation}</td>
      <td>{asset.percentChange}</td>
      <td>{asset.totalPrice}</td>

      
    </tr>

    ))
    }
    
    
  </tbody>
</table>

        </div>
    )
}

export default ExpandedViewCard
