import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect
                options={[
                    {value: 'title', title: 'По названию'},
                    {value: 'body', title: 'По описанию'}
                ]}
                defValue='Сортировка'
                onChange={value => setFilter({...filter, sort: value})}
                value={filter.sort}
            />
        </div>
    );
};

export default PostFilter;
