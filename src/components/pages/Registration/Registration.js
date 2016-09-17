require('components/pages/Registration/Registration.styl');
require('flag-icon-css/css/flag-icon.css');
import React from 'react';
import Highlight from 'react-highlighter';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='Registration'>
      <span className='Registration__header'>
        <strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня
      </span>
      <div className='Registration__row'>
        <div className='Registration__col50'>
          <span className='Registration__label'>Имя</span>
          <input className='Registration__input' type='text' placeholder='Иван' value='Сергей' />
        </div>
        <div className='Registration__col50'>
          <span className='Registration__label'>Фамилия</span>
          <input className='Registration__input' type='text' placeholder='Иванов' value='' />
        </div>
      </div>
      <div className='clearfix' />
      <div className='Registration__row'>
        <span className='Registration__label'>Профессия</span>
        <input className='Registration__input' type='text' placeholder='Парикмахер' value='' />
        <ul className='Registration__input-hint Registration__input-hint_hidden'>
            <li className='Registration__input-hint-item'><Highlight search="Пар">Парикмахер</Highlight></li>
        </ul>
      </div>
      <div className='Registration__row'>
        <span className='Registration__label'>Телефон</span>

        <div className='Registration__phone-btn' >
          <span className="flag-icon flag-icon-ru"></span>&nbsp;<FaAngleDown />
        </div>
        <input className='Registration__input Registration__input_phone' type='text' placeholder='+7 495 123-45-67' value='+7' />
        <ul className='Registration__input-hint Registration__input-hint_hidden'>
            <li className='Registration__input-hint-item'>
              <span className="flag-icon flag-icon-ru"></span>
              {' +7 '}
              <span className='Registration__input-hint-countryname'>Россия</span>
            </li>
        </ul>
      </div>
      <div className='Registration__row'>
        <a className='Registration_register-btn' href='http://google.ru'>Зарегистрироваться</a>
      </div>
    </div>
  }
}

Registration.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Registration;
