function GetProfessionals({ state, nextid }) {
    return (
        <div id='professionals'>
            <h3>Professionals</h3>
            {state.professionals.map(item =>
                <p key={item.id} id={item.id}>
                    <span key={nextid++} id='positionTitle'>{item.positionTitle}</span> @ <span key={nextid++} id='companyName'>{item.companyName}</span>,                     <span key={nextid++} id='companyLocation'>{item.companyLocation}</span>
                    <br /> <span key={nextid++} id='responsibilities'>{item.responsibilities}</span>
                    <br />< span key={nextid++} id='fromTo'>{item.fromTo}</span>
                </p>
            )}
        </div>
    )

}

export default GetProfessionals;