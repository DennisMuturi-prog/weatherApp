export default function DataList({
  handleChange,
  handleButtonClick,
  autoComplete
}) {
  const handleSubmitClick=(e)=>{
    e.preventDefault();
    handleButtonClick();
  }
  return <div>
      <form action="" onSubmit={handleSubmitClick}>
        <input required list="locations"  onChange={handleChange} type="text" />
        <datalist id="locations">
          {autoComplete.map((location)=>
          <option key={location.id} value={`${location.name} country:${location.country} region:${location.region}`}/>
          )}
         
             </datalist>
        <input type="submit" value="search"/>
      </form>
      </div>;
}
  