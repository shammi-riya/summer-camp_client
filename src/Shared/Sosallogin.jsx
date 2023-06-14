import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";


const Sosallogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const { siginInGogool } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        siginInGogool()
            .then(result => {
                const user = result.user;
                const saveUserData = { name: user.displayName, img: user.photoURL, email: user.email }
               
                fetch("https://summer-camp-surver.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUserData)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

                
            }).catch(err => {
                console.log(err);
            })


    }



    return (
        <div className="text-center">

            <button onClick={handleGoogleSignIn}
                className="btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default Sosallogin;