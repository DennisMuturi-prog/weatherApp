export default function DataList({
  handleChange,
  handleButtonClick,
  autoComplete
}) {
  return <div>
      <input list="locations" onChange={handleChange} type="text" />
      <datalist id="locations">
        {autoComplete.map((location)=>
        <option key={location.id} value={location.name}/>
        )}
       
     </datalist>

      <button onClick={handleButtonClick}>search</button>
      </div>;
}
  