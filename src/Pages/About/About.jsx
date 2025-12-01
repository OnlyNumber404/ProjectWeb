import SpotlightCard from "../../Component/Card";
import TiltedCard from "../../Component/profilecard";
import { motion } from "framer-motion";

function About(){
    const color_text = "text-white"
    const font_text = "text-4xl"
    return(
        <div className="aboutcontainer flex min-h-screen p-10 items-start justify-center flex-col">
            <motion.div className="container1 flex justify-center mb-5 " initial = {{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut"}} viewport={{once:false}}>
                    <SpotlightCard className="spotlight-card w-12/12 mr-4 bg-black border-2 border-white" spotlightColor="rgba(166, 60, 59, 0.5)">
                    <h1 className={`text-5xl p-3 ${color_text}`}>HALO SAYA</h1>
                    <h1 className={`text-5xl p-3 ${color_text}`}>AGUSTINUS DENNY.T</h1>

                    <p className={`${color_text} p-3 text-justify`}>
                        Saya adalaah seorang mahasiswa semester 3 yang sedang mendalami dunia pemrograman. Saya suka membangun project kecil untuk mengasah kemampuan problem-solving dan logika.
                        Selain programming, saya juga tertarik dengan trading.
                        Saya juga suka membuat kontent kontent untuk kesenangan saya. Tantangan ini bikin saya lebih kreatif dan disiplin.
                        Saat tidak ngoding, saya biasanya suka membaca komik-komik, novel dan melakukan olahraga seperti renang, workout, dan beberapa olahraga lainnya.
                        Tidak hanya suka coding saya juga suka main game seperti Valheim, Assasins Creed dan game lainnya.
                        <br />
                        <q>Saya percaya bahwa konsistensi lebih penting daripada kesempurnaan, dan saya terus belajar setiap hari.</q>
                    </p>
                    </SpotlightCard>
                <motion.div className="Photocard" initial = {{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut"}} viewport={{once:false}}>
                    <TiltedCard
                    imageSrc="ProtofolioPhoto.png"
                    altText="Agustinus Denny"
                    captionText="Agustinus Denny Tjandra"
                    containerHeight="400px"
                    containerWidth="400px"
                    imageHeight="400px"
                    imageWidth="400px"
                    rotateAmplitude={12}
                    scaleOnHover={1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <h1 className="tilted-card-text text-white bg-gray-800 p-2 rounded-md">AGUSTINUS DENNY . T</h1>
                    }
                    />
                </motion.div>
            </motion.div>
            <motion.div className="container2 flex items-center h-auto w-full justify-between">
                <motion.div className="skillcard mr-3" initial = {{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut"}} viewport={{once:false}}>
                <SpotlightCard className="Spotlight-card-skill h-auto w-150 border-2 border-white" spotlightColor="rgba(166, 60, 59, 0.5)">
                    <div className="textskill flex items-center">
                    <h1 className={`text-2xl ${color_text} mr-3`}>MY CODING SKILL</h1>
                    <i class={`fa-solid fa-star text-2xl ${color_text}`}></i>
                    </div>
                    <br />
                    <div className="skilliconcontainer flex justify-between">
                        <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-css3 ${color_text} ${font_text}`}></i></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-html5 ${color_text} ${font_text}`}></i></a>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-python ${color_text} ${font_text}`}></i></a>
                        <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-java ${color_text} ${font_text}`}></i></a>
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-react ${color_text} ${font_text}`}></i></a>
                        <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-laravel ${color_text} ${font_text}`}></i></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-js ${color_text} ${font_text}`}></i></a>
                        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-node ${color_text} ${font_text}`}></i></a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-github ${color_text} ${font_text}`}></i></a>
                        <a href="https://en.wikipedia.org/wiki/Computer_network" target="_blank" rel="noopener noreferrer"><i className={`fa-solid fa-network-wired ${color_text} ${font_text}`}></i></a>
                    </div>
                </SpotlightCard>
                </motion.div>
                <motion.div className="gamecard mr-3" initial = {{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut"}} viewport={{once:false}}>
                <SpotlightCard className="Spotlight-card-skill h-auto w-120 border-white" spotlightColor="rgba(166, 60, 59, 0.5)">
                    <div className="textskill flex items-center">
                        <h1 className={`text-2xl ${color_text} mr-3`}>MY OTHER SKILL</h1>
                        <i class={`fa-solid fa-user text-2xl ${color_text} `}></i>
                    </div>
                    <br />
                    <div className="gamecontainer flex justify-between">
                        <i className={`fa-solid fa-person-swimming ${color_text} ${font_text}`}></i>
                        <i className={`fa-solid fa-paintbrush ${color_text} ${font_text}`}></i>
                        <i className={`fa-solid fa-video ${color_text} ${font_text}`}></i>
                        <i className={`fa-solid fa-gamepad ${color_text} ${font_text}`}></i>
                        <i className={`fa-solid fa-bicycle ${color_text} ${font_text}`}></i>
                        <i className={`fa-solid fa-terminal ${color_text} ${font_text}`}></i>
                    </div>
                </SpotlightCard>
                </motion.div>
                <motion.div className="containerspotify border-2 rounded-2xl border-white w-150 relative" initial = {{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut"}} viewport={{once:false}}>
                <iframe
                    src="https://open.spotify.com/embed/playlist/2ubC91PlpACLiyJo25H2Yt?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    style={{ borderRadius: "12px" }}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About