function SetBackgroundColors({ state, setState }) {

    return (
        <>
            <h2>Colors</h2>
            <div className="buttons">
                <input onInput={(event) => setState({ ...state, colors: [event.target.value, state.colors[1]] })} type='color' value={state.colors[0]} ></input>
                <input onInput={(event) => setState({ ...state, colors: [state.colors[0], event.target.value] })} type='color' value={state.colors[1]} ></input>
            </div>
        </>
    )
}

export default SetBackgroundColors;