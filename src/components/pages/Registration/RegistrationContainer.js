import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions as registrationActions} from 'actions/registration';
import Registration from 'components/pages/Registration/Registration'

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,

    // redux store
    ...state.registration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registrationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
