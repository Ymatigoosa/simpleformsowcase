require('components/pages/Registration/Registration.styl');
require('flag-icon-css/css/flag-icon.css');
import React from 'react';
import Highlight from 'react-highlighter';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import classNames from 'classnames';

class DropdownhintItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      highlighted: false
    };
  }

  render() {
    const classes = classNames({
      'Registration__input-hint-item': true,
      'Registration__input-hint-item_active': this.state.highlighted
    });
    return (<li
      className={classes}
      onMouseOver={(e) => this.setState({highlighted: true})}
      onMouseOut={(e) => this.setState({highlighted: false})}
      {...this.props}>
        {this.props.children}
      </li>);
  }
}

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions } = this.props;

    const professiondropdownactive = this.props.professionHintsOpen && this.props.professionHints.length > 0;
    const professionhintclasses = classNames({
      'Registration__input-hint': true,
      'Registration__input-hint_hidden': !professiondropdownactive
    });
    const professioninputclasses = classNames({
      'Registration__input': true,
      'Registration__input_ddactive': professiondropdownactive
    });
    //console.log(this.props, professiondropdownactive)
    return <div className='Registration'>
      <span className='Registration__header'>
        <strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня
      </span>
      <div className='Registration__row'>
        <div className='Registration__col50'>
          <span className='Registration__label'>Имя</span>
          <input className='Registration__input' type='text' placeholder='Иван' value={this.props.name} onChange={(e) => actions.changeName(e.target.value)} />
        </div>
        <div className='Registration__col50'>
          <span className='Registration__label'>Фамилия</span>
          <input className='Registration__input' type='text' placeholder='Иванов' value={this.props.surname} onChange={(e) => actions.changeSurname(e.target.value)} />
        </div>
      </div>
      <div className='clearfix' />
      <div className='Registration__row'>
        <span className='Registration__label'>Профессия</span>
        <input
          className={professioninputclasses}
          type='text' placeholder='Парикмахер'
          value={this.props.profession}
          onChange={(e) => actions.changeProfession(e.target.value)}
          onFocus={(e) => actions.toggleProfessionHint(true)}
          onBlur={(e) => actions.toggleProfessionHint(false)}
        />
        <ul className={professionhintclasses}>
            {this.props.professionHints.map((i) => {
              return (<DropdownhintItem key={i} onMouseDown={(e) => actions.changeProfession(i)}><Highlight search={this.props.profession}>{i}</Highlight></DropdownhintItem>
            )})}
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
