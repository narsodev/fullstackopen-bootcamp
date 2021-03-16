const Filter = ({setSearch , search}) => {
    const handleChangeSearch = (event) => {
      setSearch(event.target.value)
    } 
    return <div>
            Filter: <input onChange={handleChangeSearch} value={search}/>
          </div>
}

export default Filter