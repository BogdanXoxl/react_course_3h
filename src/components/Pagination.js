import React from 'react';
import {getPagesArray} from '../Utils/pages';

const Pagination = ({totalCount, page,  setPage}) => {
    const pagesArray = getPagesArray(totalCount);

    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => setPage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;
