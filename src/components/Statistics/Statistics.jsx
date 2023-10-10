import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { getStoredCart } from "../../utilities/localstorage";


const Statistics = () => {
    const [myDonation, setMyDonation] = useState();

    useEffect(() => {
        const yourDonations = getStoredCart().length;
        setMyDonation(yourDonations);
    }, [])

    const data = [
        ["Donation", "Amount"],
        ["Total Donation", 12],
        ["Your Donation", myDonation],
    ];

    return (
        <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
        />
    );
};

export default Statistics;
