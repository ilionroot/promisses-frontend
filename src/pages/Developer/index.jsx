import React from 'react';

import './styles.css';

function Developer() {
  return (
    <div className="container" >
      <div className="container-content">
        <a target="_blank" rel="noopener noreferrer" className="title" href="https://www.linkedin.com/in/igor-augusto-gomes-de-melo-8339b41b0/">
          <div className="photo"></div>
          <div className="name">
            Igor Augusto Gomes de Melo - DEV
        </div>
        </a>

        <div className="projects-content-container">
          <a className="project" rel="noopener noreferrer" href="http://inf22a.herokuapp.com" target="_blank">
            <span><h1>INF22A</h1></span>
          </a>

          <a className="project" rel="noopener noreferrer" href="http://mcties.herokuapp.com" target="_blank">
            <span><h1>MCTIES</h1></span>
          </a>

          <a className="project" rel="noopener noreferrer" href="http://ilion.unaux.com" target="_blank">
            <span><h1>COVID19</h1></span>
          </a>

          <span onClick={() => {
            return alert('Download indisponível!');
          }} className="project"><h1>Bar System</h1></span>
        </div>
      </div>
    </div >
  );
}

export default Developer;