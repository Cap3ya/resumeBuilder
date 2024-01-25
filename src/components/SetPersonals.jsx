function SetPersonals({ state, setState }) {

    function handleChange(target, newValue) {
      const newPersonals = {};
      Object.entries(state.personals).map( entries => {
        const [key, value] = entries;
        if (key == target) {
          return newPersonals[key] = newValue;
        } else {
          return newPersonals[key] = value;
        }
      });
      console.log(newPersonals)
      setState({ ...state, personals: newPersonals })
    }
  
    return (
      <>
        <h2>Personals</h2>
        <div className='inputField' id='personalsInputs'>
          {Object.entries(state.personals).map( entries => {
            const [key, value] = entries;
            return <input onInput={(event) => handleChange(key, event.target.value)} key={key} value={value}></input>
          }
          )}
        </div>
      </>
    )
  }

  export default SetPersonals;