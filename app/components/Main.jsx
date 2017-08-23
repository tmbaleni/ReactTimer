var React = require('react');
import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
