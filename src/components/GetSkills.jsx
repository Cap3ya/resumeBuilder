function GetSkills({ state, nextid }) {
  return (
    <div id='skills'>
      <h3>Skills</h3>
      <div id='list'>
        {state.skills.map(item =>
          <p key={nextid++}>{item}</p>
        )}
      </div>
    </div>
  )
}

export default GetSkills;