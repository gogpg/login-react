function Notifications({ notificationsList }) {

    return (
        <div className="notification">
            {notificationsList?.map((notification, index) => <div key={index}>{notification}</div>)}
        </div>
    )
}

export default Notifications;