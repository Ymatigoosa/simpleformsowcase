require('components/pages/Registration/Registration.styl');
require('flag-icon-css/css/flag-icon.css');
import React from 'react';
import Highlight from 'react-highlighter';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
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

    const countrySelectCodeOpen = this.props.countrySelectCodeOpen;
    const countryhintclasses = classNames({
      'Registration__input-hint': true,
      'Registration__input-hint_hidden': !countrySelectCodeOpen
    });
    const countryinputclasses = classNames({
      'Registration__input': true,
      'Registration__input_phone': true,
      'Registration__input_ddactive': countrySelectCodeOpen
    });
    const countrybtnclasses = classNames({
      'Registration__phone-btn': true,
      'Registration__phone-btn_active': countrySelectCodeOpen
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

        <div
          className={countrybtnclasses}
          onMouseDown={(e) => {
            e.preventDefault();
            setTimeout(() => this.refs.phoneinput.focus(), 0);
            actions.togglePhoneHint(!this.props.countrySelectCodeOpen);
        }}>
          {this.props.currentCountryCode !== null
            ? (<span><span className={`flag-icon flag-icon-${this.props.countriesWithCodes[this.props.currentCountryCode].codeIso}`}></span>&nbsp;<FaAngleDown /></span>)
            : (<span><FaQuestionCircle />&nbsp;<FaAngleDown /></span>)
          }
        </div>
        <input
          ref='phoneinput'
          className={countryinputclasses}
          type='text'
          placeholder='+7 495 123-45-67'
          value={this.props.phone}
          onChange={(e) => actions.changePhone(e.target.value)}
          onBlur={(e) => actions.togglePhoneHint(false)}/>
        <ul className={countryhintclasses}>
            {Object.keys(this.props.countriesWithCodes).map((code) => {
              const country = this.props.countriesWithCodes[code];
              return (<DropdownhintItem key={code} onMouseDown={(e) => actions.selectNewPhoneCountry(code)}>
                <span className={`flag-icon flag-icon-${country.codeIso}`}></span>
                {` ${country.codePhone} `}
                <span className='Registration__input-hint-countryname'>{country.countryName}</span>
              </DropdownhintItem>)
            })}
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
