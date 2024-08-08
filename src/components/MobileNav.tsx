import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "../components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import { CircleUserRound, Menu } from 'lucide-react';
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";


const MobileNav = () =>
 {
    const {isAuthenticated, user ,loginWithRedirect} = useAuth0();
     return (
     <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
           <SheetTitle>
              {
              isAuthenticated
              ?
             <span className="flex items-center font-bold gap-2">
                <CircleUserRound/> 
                   {user?.email}
             </span>
              :
              <span>Welcome to the TastyTwist.com</span>

            }
           </SheetTitle>
          <Separator/>
          <SheetDescription className="flex flex-col gap-4">
              {
                isAuthenticated 
                ? 
                <MobileNavLinks/>
                :
                <Button onClick={() => loginWithRedirect()} className="flex-1 font-bold bg-orange-500">Log In</Button>
              }
          </SheetDescription>
        </SheetContent>
     </Sheet>
     )
 }

 export default MobileNav;