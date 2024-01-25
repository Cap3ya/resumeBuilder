function GetAcademics({ state, nextid }) {
    return (
        <div id='academics'>
            <h3>Academics</h3>
            {state.academics.map(item =>
                <p key={item.id} className='education'>
                    <span className='title' key={nextid++}>{item.courseTitle}</span>
                    <br /> @ <span className='school' key={nextid++}>{item.schoolName}</span>, <span className='location' key={nextid++}>{item.schoolLocation}</span>
                    <br /> <span className='date' key={nextid++}>{item.coursePeriod}</span>
                </p>
            )}
        </div>
    )
}

export default GetAcademics;