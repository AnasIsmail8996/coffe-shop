import React from 'react'
import ratio from './images/progress-bar.png'
import InsestorSlider from './InsestorSlider';
const Ratio = () => {
  return (
    <>
    <div className='left-color'>
      <ul>
        <li className='parent'> Pitch +</li>
        <li>PROBLEM</li>
        <li>SOLUTION </li>
        <li>CUSTOMERS</li>
        <li>BUSINESS MODEL</li>
        <li>PROTOTYPE STORE</li>
        <li>MARKET</li>
        <li>COMPETITION</li>
      </ul><hr />
      <div className='heading-list'>
        <h2>CompetitionDiscussion +</h2><hr />
        <h2>Updates +</h2><hr />
        <h2>Reviews +</h2><hr />
        <h2>JTC Bonus +</h2><hr />
        <h2>Terms and Condition for JTC Tokens +</h2><hr />
      </div>
    </div>
    <div className='ratio-text-icon'>
<img src={ratio} alt="" />
<div className='ratio-text'><p>Minimum investment amount:The smallest amount of money that an investor can put into the business is 5000 Mexican PesosThe expected return on investment (ROI) for this business ranges from 10% to 38% per year or more. 
    It's important to note that the actual ROI may be different than the expected ROI and can be affected by various factors.</p></div>
    </div>
<div className='muilti-para'>
    <p className='red-text-bold'>  JTC Tokens are a type of digital currency or rewards program that 
        can be used to purchase food and coffee at Java TimesCaffe locations or through the company's JTC App or e-commerce platform.
         Customers can earn JTC Tokens by making purchases at Java Times Caffe or participating in special promotions or events. </p>
    <p className='red-text-bold-two' >
To use JTC Tokens to make purchases, customers can add them to their account through the JTC App or e-commerce platform, and then use them to pay for food and coffee at checkout. JTCTokens may be subject to expiration or other restrictions, and they may not be redeemable for cash or other goods or services.</p>
    <p className='red-text-bold-there'>It's worth noting that the details and terms of the JTC Token rewards program may vary depending on the specific policies of Java Times Caffe. It's a good idea to review the terms and conditions of the program before participating, to ensure that you understand how the tokens can be earned and used. </p>
</div>

<div>
    <InsestorSlider/>
</div>
    </>
  )
}

export default Ratio; 
