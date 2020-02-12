import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { setKeyWord } from '../../actions/TodoPageAction';
import { bindActionCreators } from 'redux';

const SearchBar = (props) => {
    const { Search } = Input;

    const { setKeyWord } = props;

    const onKeywordChange = ({ target }) => {
        setKeyWord(target.value);
    };

    return (
        <Search
            placeholder="input search text"
            onChange={onKeywordChange}
            style={{ width: 300, marginRight: 10 }}
            allowClear
        />
    );
};

const mapStateToProp = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setKeyWord }, dispatch);
};

export default connect(mapStateToProp, mapDispatchToProps)(SearchBar);
