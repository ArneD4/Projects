const OpeningHours = ({ products }) => {
    return (
        <div className="openinghours">
            <h4>Opening Hours</h4>
            <span><h5>Monday: </h5>
                <p> {products["restaurant-time-info"].mon[0].open} - {products["restaurant-time-info"].mon[0].close}</p>
            </span>
            <span><h5>Tuesday: </h5>
                <p> {products["restaurant-time-info"].tue[0].open} - {products["restaurant-time-info"].tue[0].close}</p></span>
            <span><h5>Wednesday: </h5>
                <p> {products["restaurant-time-info"].wed[0].open} - {products["restaurant-time-info"].wed[0].close}</p></span>
            <span> <h5>Thursday: </h5>
                <p> {products["restaurant-time-info"].thu[0].open} - {products["restaurant-time-info"].thu[0].close}</p></span>
            <span><h5>Friday: </h5>
                <p> {products["restaurant-time-info"].fri[0].open} - {products["restaurant-time-info"].fri[0].close}</p></span>
            <span><h5>Saturday: </h5>
                <p> {products["restaurant-time-info"].sat[0].open} - {products["restaurant-time-info"].sat[0].close}</p></span>
            <span>
                <h5>Sunday: </h5>
                <p>{products["restaurant-time-info"].sun[0].open} - {products["restaurant-time-info"].sun[0].close}</p></span>






        </div>
    );
}

export default OpeningHours;