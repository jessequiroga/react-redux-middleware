import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { selectFilter } from '../../actions/TodoPageAction';
import { bindActionCreators } from 'redux';

const FilterList = props => {
    const { Option } = Select;

    const { selectedFilter, selectFilter } = props;

    const handleChange = (value) => {
        selectFilter(value);
    };

    return (
        <div>
            <Select value={selectedFilter} style={{ width: 120 }} onChange={handleChange}>
                <Option value="All">All</Option>
                <Option value={false}>Doing</Option>
                <Option value={true}>Done</Option>
            </Select>
        </div>
    );
};

const mapStateToProp = (state) => {
    return {
        selectedFilter: state.todoPage.selectedFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectFilter }, dispatch);
};

export default connect(mapStateToProp, mapDispatchToProps)(FilterList);
