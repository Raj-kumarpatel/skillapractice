import './UserCard.css';
function UserCard({ users,search }) {

    const filterData=users.filter((data)=>`${data.name.first} ${data.name.last} ${data.location.city} ${data.location.country}`.toLowerCase().includes(search))
    return (
        filterData.map((item) => {
            return <div className="card">
                 <img className='image' src={`${item.picture}`}/>
                <h3>{item.name.first + " " + item.name.last}</h3>
                <p>{item.location.city + " " + item.location.country}</p>
            </div>
        })
    )
}
export default UserCard;
