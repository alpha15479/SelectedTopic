function Search(props) {

    const {value, onValueChange} = props;

    return (
        <
        input className="app-search input"
        type="text"
        placeholder="Search for your dream job."
        value={value}
        onChange={(event) => {onValueChange(event.target.value)}}
        />
    );
}

export default Search;