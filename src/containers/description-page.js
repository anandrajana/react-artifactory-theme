import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DescriptionPageBody from './../components/DescriptionPageBody'
const mapStateToProps = (state,ownprops)=> {
	console.log(ownprops)
	return {
		module:ownprops.params.query
	};
 }

export default connect(mapStateToProps)(DescriptionPageBody);