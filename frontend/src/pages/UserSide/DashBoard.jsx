import "../../assets/css/DashBoard.css"
import UserDash from "./UserDash";
function DashBoard() {
    return ( 
        <>
        <UserDash/>
        <div className="body2">
        <div className="home-dashboard">
        <div className="welcome-message">
            <h2>Hello, Mr.Shreyes K</h2>
        </div>
        <div className="stats-container">
            <div className="stats-box applied-jobs">
            <h3>Jobs Available</h3>
            <p>20</p>
            </div>
            <div className="stats-box notifications">
            <h3>Application Approved</h3>
            <p>2</p>
            </div>
            <div className="stats-box alert-jobs">
            <h3>Applied Jobs</h3>
            <p>5</p>
            </div>
        </div>
        <div className="recent-activities">
        <h2>Recent Activities</h2>
        <div className="activity-item">
            <p>🧑‍💻</p>
            <p>Your job for IOS Developer has been approved!</p>
        </div>
        <div className="activity-item">
            <p>🧑‍💻</p>
            <p>Jodie Farrell left a review for Real Estate Logo</p>
        </div>
        <div className="activity-item">
            <p>🧑‍💻</p>
            <p> Someone bookmarked your SEO Expert Job listing!</p>
        </div>
        <div className="activity-item">
            <p>🧑‍💻</p>
            <p> Gracie Mahmood left a review on Product Design</p>
        </div>
        <div className="activity-item">
            <p>🧑‍💻</p>
            <p> Your Magento Developer job expire Renew now it!</p>
        </div>
        <div className="activity-item">
            <p>🧑‍💻</p>
            <p> Ethan Barrett left a review on New Logo</p>
        </div>
        </div>
        </div>
        </div>
        </>
     );
}

export default DashBoard;