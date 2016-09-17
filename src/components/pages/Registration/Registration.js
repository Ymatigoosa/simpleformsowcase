require('components/pages/Registration/Registration.styl');
require('flag-icon-css/css/flag-icon.css');
import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='Registration'>
      <div className='Registration__row'>
        <div className='Registration__col50'>
          <span className='Registration__label'>Имя</span>
          <input className='Registration__input' type='text' placeholder='Иван' value='' />
        </div>
        <div className='Registration__col50'>
          <span className='Registration__label'>Фамилия</span>
          <input className='Registration__input' type='text' placeholder='Иванов' value='' />
        </div>
      </div>
      <div className='Registration__row'>
        <span className='Registration__label'>Профессия</span>
        <ul className='Registration__input-hint'>
            <li className='Registration__input-hint-item'>Парикмахер</li>
        </ul>
        <input className='Registration__input' type='text' placeholder='Парикмахер' value='' />
      </div>
      <div className='Registration__row'>
        <span className='Registration__label'>Телефон</span>
        <ul className='Registration__input-hint'>
            <li className='Registration__input-hint-item'>
              <span className="flag-icon flag-icon-ru"></span>
              {' +7 '}
              <span className='Registration__input-hint-countryname'>Россия</span>
            </li>
        </ul>
        <div className='Registration__phone-btn' >
          <span className="flag-icon flag-icon-ru"></span> +7
        </div>
        <input className='Registration__input Registration__input_phone' type='text' placeholder='Парикмахер' value='' />
      </div>
    </div>
  }
}

Registration.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Registration;
