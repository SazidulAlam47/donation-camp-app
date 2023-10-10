import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MyDonationSingle = ({ myDonation }) => {
    return (
        <div
            style={{ backgroundColor: myDonation.Card_bg }}
            className="flex gap-4 rounded-md"
        >
            <div>
                <img src={myDonation.Picture} alt={myDonation.Title} />
            </div>
            <div className="flex flex-col justify-center">
                <div
                    className="badge badge-secondary p-3 rounded-md my-2"
                    style={{
                        backgroundColor: myDonation.Category_bg,
                        borderColor: myDonation.Category_bg,
                        color: myDonation.Text_button_bg,
                    }}
                >
                    {myDonation.Category}
                </div>
                <h3 className="font-bold">{myDonation.Title}</h3>
                <p
                    style={{ color: myDonation.Text_button_bg }}
                    className="my-2"
                >
                    {myDonation.Price}
                </p>
                <Link to={`/donation/${myDonation.id}`}>
                    <span
                        style={{ background: myDonation.Text_button_bg }}
                        className="text-white px-2 py-1 rounded"
                    >
                        View Details
                    </span>
                </Link>
            </div>
        </div>
    );
};

MyDonationSingle.propTypes = {
    myDonation: PropTypes.object.isRequired,
};

export default MyDonationSingle;
