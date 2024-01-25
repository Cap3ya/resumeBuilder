function SetDivers({ state, setState }) {
    const count = state.divers.length;
  
    function handleChange(index, newItem) {
      const newDivers = state.divers.map((item, i) => {
        if (i == index) {
          return newItem;
        } else {
          return item;
        }
      });
      setState({ ...state, divers: newDivers })
    }
  
    function onClickAddBtn() {
      setState({ ...state, divers: [...state.divers, `Diver ${count+1}`] })
    }
    function onClickDellBtn() {
      if (count > 0) {
        state.divers.splice(count - 1, 1)
        setState({ ...state, divers: [...state.divers] })
      }
    }
    return (
      <>
        <h2>Divers</h2>
        <div className='inputField' id='diversInputs'>
          {state.divers.map((diver, index) => {
            return <input onInput={(event) => handleChange(index, event.target.value)} key={index} value={diver}></input>
          }
          )}
        </div>
        <div className='buttons'>
          <button onClick={onClickAddBtn} className='addBtn'>Add</button>
          <button onClick={onClickDellBtn} className='delBtn'>Del</button>
        </div>
      </>
    )
  }

  export default SetDivers;