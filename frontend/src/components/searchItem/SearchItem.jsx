import {Link} from "react-router-dom";
import "./searchItem.css";
import {useContext} from "react";
import {SearchContext} from "../../context/SearchContext";


const SearchItem = ({item}) => {
    const {dates, options} = useContext(SearchContext);
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    }

    const days = dates && dates[0] ? dayDifference(dates[0].endDate, dates[0].startDate) : 0;
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
                <span className="siFeatures">{item.description}</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
            </div>
            <div className="siDetails">
                {item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice * days * options.room}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;