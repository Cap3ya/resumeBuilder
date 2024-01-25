function SetAbout({ state, setState }) {

    return (
        <>
            <h2>About</h2>
            <div className='inputField' id='skillsInputs'>
                <textarea onInput={(event) => setState({...state, about: event.target.value})} value={state.about}></textarea>
            </div>
        </>
    )
}

export default SetAbout;