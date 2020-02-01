import React from 'react';

const OtherStoresModal = (props) => (
  <div>
    <a href="#share" type="button" id="tom-stores-button" onClick={props.stores}><span>CHECK OTHER STORES</span></a>
    <div className="tom-modal-stores" id="tom-modal-stores">
      <div className="tom-modal-stores-content">
        <span className="tom-stores-close-btn" onClick={props.close}>&times;</span>
        <h4 className="tom-modal-stores-title">Find a Store</h4>
        <ul className="tom-modal-stores-list">
          <li><div className="tom-modal-stores-item"><span className="tom-modal-stores-storename">S.W. Austin WoWe's</span><br /><span>6400 Brodie Ln</span><br /><span>Austin, TX</span></div><div className="tom-media-middle"><span className="tom-align-right"><img src="../images/greenCheckbox.PNG" alt="green checkbox"></img><small><strong>{props.id % 10} available</strong></small></span><button className="tom-other-stores-button">SHOP THIS STORE</button></div></li>
          <hr className="tom-modal-stores-line"></hr>
          <li><div className="tom-modal-stores-item"><span className="tom-modal-stores-storename">Bee Cave WoWe's</span><br /><span>12611 Suite 100 Shops Pkwy</span><br /><span>Bee Cave, TX</span><br /><small><strong>11.5 mi</strong></small></div><div className="tom-media-middle"><span className="tom-align-right"><img src="../images/greenCheckbox.PNG" alt="green checkbox"></img><small><strong>{props.id % 10 * 2} available</strong></small></span><button className="tom-other-stores-button">SHOP THIS STORE</button></div></li>
          <hr className="tom-modal-stores-line"></hr>
          <li><div className="tom-modal-stores-item"><span className="tom-modal-stores-storename">Central Austin WoWe's</span><br /><span>8000 Shoal Creek Blvd</span><br /><span>Austin, TX</span><br /><small><strong>12.9 mi</strong></small></div><div className="tom-media-middle"><span className="tom-align-right"><img src="../images/greenCheckbox.PNG" alt="green checkbox"></img><small><strong>{props.id % 12} available</strong></small></span><button className="tom-other-stores-button">SHOP THIS STORE</button></div></li>
          <hr className="tom-modal-stores-line"></hr>
          <li><div className="tom-modal-stores-item"><span className="tom-modal-stores-storename">N.E. Austin WoWe's</span><br /><span>13000 N I-35 SVC Rd SB, Building 12</span><br /><span>Austin, TX</span><br /><small><strong>20.6 mi</strong></small></div><div className="tom-media-middle"><span className="tom-align-right"><img src="../images/greenCheckbox.PNG" alt="green checkbox"></img><small><strong>{props.id % 15} available</strong></small></span><button className="tom-other-stores-button">SHOP THIS STORE</button></div></li>
          <hr className="tom-modal-stores-line"></hr>
          <li><div className="tom-modal-stores-item"><span className="tom-modal-stores-storename">N.W. Austin WoWe's</span><br /><span>1302 N Ranch Rd 620, Bldg G</span><span>Austin, Tx</span><br /><small><strong>21.4 mi</strong></small></div><div className="tom-media-middle"><span className="tom-align-right"><img src="../images/greenCheckbox.PNG" alt="green checkbox"></img><small><strong>{props.id % 10 + 3} available</strong></small></span><button className="tom-other-stores-button">SHOP THIS STORE</button></div></li>
        </ul>
      </div>
    </div>
  </div>
)

export default OtherStoresModal;