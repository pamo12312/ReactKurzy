export function New({ isNew }) {
    return (
        <div>
            {isNew && <p className="newcours"><b>New</b></p>}
        </div>
    );
}