function SetAcademics({ state, setState }) {
    const count = state.academics.length;

    function handleChange(id, key, newValue) {
        const newAcademics = state.academics.map( academic => {
            if (academic.id == id) {
                return { ...academic, [key]: newValue }
            } else {
                return academic;
            }
        });
        setState({ ...state, academics: newAcademics })
    }
    function onClickAddBtn() {
        setState({ ...state, academics: [...state.academics, { id: count + 1,courseTitle: 'Bachelor in Economics', schoolName: 'HEC', schoolLocation: 'Paris, France', coursePeriod: '2010-2012' }]});
    }
    function onClickDellBtn() {
        if (count > 0) {
            state.academics.splice(count - 1, 1)
            setState({ ...state, academics: [...state.academics] })
        }
    }
    return (
        <>
            <h2>Academics</h2>
            <div className='inputField' id='academicsInputs'>
                {state.academics.map((academic) => {
                    return (
                        <div key={academic.id} className="inputField">
                        {Object.entries(academic).map(entry => {
                            const [key, value] = entry;
                            return key != "id" && <input onInput={(event) => handleChange(academic.id, key, event.target.value)} key={key} value={value}></input>
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

export default SetAcademics;