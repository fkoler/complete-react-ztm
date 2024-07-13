import './search-box.styles.css';

interface ISeearchBoxProps {
    className: string;
    placeholder?: string | null;
}

interface IOnChangeHandlerProps {
    onChangeHandler: (a: string) => void;
}

const SearchBox = ({
    className,
    placeholder,
    onChangeHandler,
}: ISeearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)}
    />
);

export default SearchBox;
