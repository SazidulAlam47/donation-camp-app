import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllDonationSingle from "../AllDonationSingle/AllDonationSingle";
import "./Search.css";

const Home = () => {
    const [search, setSearch] = useState("");

    const donations = useLoaderData();

    const searchHandler = (searchKey) => {
        setSearch(searchKey.target.value);
    };
    const filterDonation = donations.filter((item) =>
        item.Category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <section className="search text-center py-40">
                <h1 className="pb-10 text-4xl font-bold dark:text-gray-800">
                    I Grow By Helping People In Need
                </h1>
                <div className="join">
                    <input
                        className="input input-bordered join-item"
                        value={search}
                        onChange={searchHandler}
                        placeholder="Search here.... "
                    />
                    <button className="btn join-item">Search</button>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12">
                {filterDonation.map((donation) => (
                    <AllDonationSingle
                        key={donation.id}
                        donation={donation}
                    ></AllDonationSingle>
                ))}
            </div>
        </div>
    );
};

export default Home;
