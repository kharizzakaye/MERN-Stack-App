import * as React from "React";

const ContestPreview: React.FC<{ contest: object; onClick: any; }> = ({ contest, onClick }) => {
    const handleClick = (event) => {
        event.preventDefault();

        // navigate to a new view
        onClick(contest.id);
    }

    return(
        <div className="contest-preview link" onClick={handleClick}>
            <div className="category">{contest.categoryName}</div>
            <div className="contest">{contest.contestName}</div>
        </div>
    );
}

export default ContestPreview;