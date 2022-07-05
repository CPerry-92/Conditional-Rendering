const Form = ({ handleSubmit, nameInput, setNameInput, ageInput, setAgeInput})=> {
   
    return (
      <form onSubmit={handleSubmit}>
          <label>
              Enter your name:
          <input 
          type="text"
          value={nameInput}
          onChange={(e) =>setNameInput(e.target.value)}
          />
          </label>
          <label>
              Enter your Age:
          <input
          type="text"
          value={ageInput}
          onChange={(e) =>setAgeInput(e.target.value)}
          />
          </label>
          <input type="submit"/>
      </form>
    )
  }
  
  export default Form
  