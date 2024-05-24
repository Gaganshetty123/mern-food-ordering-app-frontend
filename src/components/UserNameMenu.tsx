import { useAuth0 } from '@auth0/auth0-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Separator } from '@radix-ui/react-separator';
import { CircleUserRound } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom'; 

const UserNameMenu = () => {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
            <CircleUserRound className="text-orange-500" />{user?.email?.split('@')[0]}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-md rounded-md p-2" style={{ backgroundColor: 'white' }}>
            <DropdownMenuItem>
                    <Link to="/manage-restaurant" className="block font-bold hover:text-orange-500 px-2 py-1">
                        Manage Restaurant
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="block font-bold hover:text-orange-500 px-2 py-1">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator className="my-1" />
                <DropdownMenuItem asChild>
                    <Button className="flex flex-1 font-bold bg-orange-500 px-2 py-1" onClick={() => logout()}>
                        Log out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNameMenu;
