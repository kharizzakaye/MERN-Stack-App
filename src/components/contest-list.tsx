import ContestPreview from "./contest-preview";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_SERVER_URL } from "../public-config";
import { fetchContest } from "../api-client";

const ContestList = ({ initialContests }) => {
    const [contests, setContests] = useState(initialContests);

    useEffect(() => {
        fetchContest().then((data) => {
            setContests(data.contests);
        });
    }, []);

    return (
        <div className="contest-list">
            { contests.map((contest) => {
                return <ContestPreview key={contest.id} contest={contest}/>
            })}
        </div>
    )
}

export default ContestList;