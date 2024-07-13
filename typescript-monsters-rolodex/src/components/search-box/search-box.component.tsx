import { ChangeEventHandler } from 'react';

import './search-box.styles.css';

type SeearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
    className,
    placeholder,
    onChangeHandler,
}: SeearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;
