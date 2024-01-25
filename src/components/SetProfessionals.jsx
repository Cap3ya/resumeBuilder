function SetProfessionals({ state, setState }) {
    const count = state.professionals.length;

    function handleChange(id, key, newValue) {
        const newProfessionals = state.professionals.map( professional => {
            if (professional.id == id) {
                return { ...professional, [key]: newValue }
            } else {
                return professional;
            }
        });
        setState({ ...state, professionals: newProfessionals })
    }
    function onClickAddBtn() {
        setState({ ...state, professionals: [...state.professionals, { id: count + 1, companyName: "Google", companyLocation: "San Fransisco, USA", positionTitle: "Full Stack Developer", responsibilities: "Create Website", fromTo: "2012 - 2014" }]});
    }
    function onClickDellBtn() {
        if (count > 0) {
            state.professionals.splice(count - 1, 1)
            setState({ ...state, professionals: [...state.professionals] })
        }
    }
    return (
        <>
            <h2>Professionals</h2>
            <div className='inputField' id='professionalsInputs'>
                {state.professionals.map((professional) => {
                    return (
                        <div key={professional.id} className="inputField">
                        {Object.entries(professional).map(entry => {
                            const [key, value] = entry;
                            return key != "id" && <input onInput={(event) => handleChange(professional.id, key, event.target.value)} key={key} value={value}></input>
                        })}
                        </div>
                    )
                }
                )}
            </div >
            <div className='buttons'>
                <button onClick={onClickAddBtn} className='addBtn'>Add</button>
                <button onClick={onClickDellBtn} className='delBtn'>Del</button>
            </div>
        </>
    )
}

export default SetProfessionals;