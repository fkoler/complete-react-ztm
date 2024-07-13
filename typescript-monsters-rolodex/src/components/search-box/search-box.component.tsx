import { ChangeEvent } from 'react';

import './search-box.styles.css';

type SeearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
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
