import Header from "./header";
import ContestList from "./contest-list";
import { useState } from "react";
import Contest from "./contest";

const App = ({ initialData }) => {
    const [page, setPage] = useState("contestList");
    const [currentContestId, setCurrentContestId] = useState();

    const navigateToContest = ( contestId ) => {
        setPage("contest");
        setCurrentContestId(contestId);
    }

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return(
                    <ContestList 
                        initialContests={initialData.contests} 
                        onContestClick={navigateToContest} 
                    />
                );
        
            case "contest":
                return <Contest id={currentContestId} />;
        }
    }

    return (
        <>
            

            { pageContent() }
        </>
    );
};

export default App;