import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
        console.log("Redirect URL:", redirectUrl);
        logout({ logoutParams: { returnTo: redirectUrl } });
    };

    return (
        <>
            <Link
                to="/order-status"
                className="flex bg-white items-center font-bold hover:text-orange-500"
            >
                Order Status
            </Link>
            <Link
                to="/manage-restaurant"
                className="flex bg-white items-center font-bold hover:text-orange-500"
            >
                My Restaurant
            </Link>
            <Link
                to="/user-profile"
                className="flex bg-white items-center font-bold hover:text-orange-500"
            >
                User Profile
            </Link>
            <Button
                onClick={handleLogout}
                className="flex items-center px-3 font-bold hover:bg-gray-500"
            >
                Log Out
            </Button>
        </>
    );
};

export default MobileNavLinks;
