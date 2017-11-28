import React  from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <header className="container">
          <h1 className="title">Pay what you want for <strong>Divinity Bundle</strong> ($32 value!)</h1>
          <ul className="details flex justify-evenly">
            <li>Support Larian Studios</li>
            <li>PLay Divinity 2: DC before release</li>
            <li>Get DRM-free games with goodies</li>
            <li className="highlight">Only <strong className="regular">23:54:55</strong> left</li>
          </ul>
        </header>
        <main className="container">
          <div className="games">
            <div className="flex">
              <div className="game dd item">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
                <div className="description">
                  <p><em>Divine Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
                </div>
                <div className="indication active">Below average</div>
              </div>
              <div className="game bd item">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
                <div className="description">
                  <p><em>Beyond Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
                </div>
                <div className="indication active">Above average (from $7.67)</div>
              </div>
              <div className="game d2 item">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
                <div className="description">
                  <p><em>Divinity 2</em> (preorder, normal price $19.99)<br /><strong>with 9 goodies and 7 language versions</strong></p>
                </div>
                <div className="indication">Top supporter (from $18.31)</div>
              </div>
            </div>
          </div>
          <div className="choose-your-price">
            <div className="container">
              <div className="slider">
                <div className="minumum">$0.99</div>
                <div className="rails">
                  <div className="handle">
                    <div className="tooltip">
                      <div className="bubble">
                        <div className="input">$14.99</div>
                        <div className="checkout">Checkout now</div>
                      </div>
                      <div className="info"><span className="info-icon"
                      >Click the price to type it in manually</span></div>
                    </div>
                  </div>
                </div>
                <div className="maximum">$49.99</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
