function SetSkills({ state, setState }) {
    const count = state.skills.length;
  
    function handleChange(index, newItem) {
      const newSkills = state.skills.map((item, i) => {
        if (i == index) {
          return newItem;
        } else {
          return item;
        }
      });
      setState({ ...state, skills: newSkills })
    }
    function onClickAddBtn() {
      setState({ ...state, skills: [...state.skills, `Skill ${count+1}`] })
    }
    function onClickDellBtn() {
      if (count > 0) {
        state.skills.splice(count - 1, 1)
        setState({ ...state, skills: [...state.skills] })
      }
    }
    return (
      <>
        <h2>Skills</h2>
        <div className='inputField' id='skillsInputs'>
          {state.skills.map((skill, index) => {
            return <input onInput={(event) => handleChange(index, event.target.value)} key={index} value={skill}></input>
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

  export default SetSkills;