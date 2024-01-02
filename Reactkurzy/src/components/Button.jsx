export function Button ({name}){
    return (
        <div>
        <button className="button" onClick={() => alert(`Enroll in ${name}`)}>
            <b> Enroll</b>
        </button></div>
    )
}