import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { onSearch } from '../../actions/UsersPageAction';
import { bindActionCreators } from 'redux';

const SearchUser = (props) => {
    const { Search } = Input;
    const { onSearch } = props;

    const onKeywordChange = ({ target }) => {
        onSearch(target.value);
    };

    return (
        <Search
            placeholder="input search text"
            onChange={onKeywordChange}
            style={{ width: 400 }}
            size="large"
        />
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onSearch }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
