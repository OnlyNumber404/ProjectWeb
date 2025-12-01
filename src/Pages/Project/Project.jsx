import {motion} from "framer-motion";
import Stack from "../../Component/Stack";
// import CardSwap, { Card } from "../../Component/CardSwap";

function Project(){

    const images = [
    { 
        id: 1, 
        img: "ProjectWebHusky.png",
        link:"https://github.com/OnlyNumber404/website-personal" 
    },
    { 
        id: 2, 
        img: "ProjectZomboid.png",
        link:"https://github.com/OnlyNumber404/Project" 
    },
    { 
        id: 3, 
        img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
        link:"" },
    ];

    return(
        <motion.div className="containerproject min-h-screen flex items-center p-10 overflow-hidden">
            <motion.div className="textporject "initial = {{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut"}} viewport={{once:false}}>
                <h1 className="text-4xl p-3">INI ADALAH BEBERAPA PROJECT SAYA</h1>
                <p className="text-2xl text-justify p-3">
                    Selamat datang di halaman proyek saya! Di sini, Anda dapat melihat perjalanan kreativitas 
                    dan pengembangan keterampilan saya sejak semester pertama hingga sekarang. 
                    Tapi ya emang saya suka project aja sih atau lebih tepatnya suka ngotak atik 😭
                </p>
                <p className="text-2xl text-yellow-600 font-bold p-3">
                    Monggo Dilihat lihat
                </p>
            </motion.div>
            <motion.div className="projectcontainer p-5" initial = {{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut"}} viewport={{once:false}}>
                <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 400, height: 400 }}
                cardsData={images}
                />
            </motion.div>
        </motion.div>
    );
}

export default Project