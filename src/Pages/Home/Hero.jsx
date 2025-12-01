import TextType from "../../Component/TextTypingAnimation";
import { motion } from "framer-motion";

function HeroSection(){
    const margin = "mr-3";
    return(
        <motion.div className="textcontainer flex justify-center min-h-[calc(100vh-85px)] items-center" initial = {{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1}}viewport={{once:false}}>
            <div className="text1 p-2 ">
                <div className="text1 text-center mb-4">
                    <h2 className="text-5xl">Hello! <span className="wave text-4xl">👋</span> im,</h2>
                </div>
                <div className="text2 mb-4">
                    <h1 className="text-6xl font-bold">AGUSTINUS DENNY.T</h1>
                </div>
                <div className="text3 text-center">
                    <TextType className="text-5xl"
                    text={["FRONTEND-DEV", "SOFTWARE ENGINER", "STUDENT"]}
                    typingSpeed={70}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    />
                </div>
                <div className="p-3 flex justify-center ">
                    <div className="socialcontainer w-full ">
                        <div className="socialtext text-center ">
                            <h3 className="text-2xl">Let's connect</h3>
                        </div>
                        <div className="socialIcon flex text-3xl p-3 justify-center ">
                            <a href="https://www.instagram.com/agustinus.tj/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-instagram ${margin} hover:text-yellow-600 `}></i></a>
                            <a href="https://www.linkedin.com/in/agustinus-denny-873703307/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-linkedin ${margin} hover:text-yellow-600`}></i></a>
                            <a href="https://github.com/OnlyNumber404" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-github  hover:text-yellow-600`}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default HeroSection;