import { motion } from "framer-motion";
import LightSwitch from "../../Component/LightSwitch";
function Header(){
    return(
        <header className="flex justify-between items-center">
            <motion.div className="containerimg p-3" initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"spring"}} viewport={{once:false}}>
                <img className="w-15 rounded-full object-cover h-15 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-500" src="ProtofolioPhoto.png" alt="myPhoto"/>
            </motion.div>
            <motion.div className="containerlightswitch p-3" initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"spring"}} viewport={{once:false}}>
                <LightSwitch/>
            </motion.div>
        </header>
    );
}

export default Header;