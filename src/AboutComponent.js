import imgForAbout from '../src/images/LogoPictures/imgForAbout.png'
import img2ForAbout from '../src/images/LogoPictures/img2ForAbout.png'

export default function AboutComponent() {
    return (
        <>
            <div >
                <h1 >The story of american girl doll</h1>
                <p >
                    Since our start in 1986, we’ve dedicated our entire business to being a trusted partner in <br></br>
                    building girls of strong character and helping them reach their full potential. As a wholly<br></br>
                    owned subsidiary of Mattel, we are one of the nation’s top omni-channel marketers, with<br></br>
                    direct, retail, and publishing divisions to serve the American Girl brand and our customers.<br></br>
                    \We’re headquartered in Middleton, Wisconsin. With 12 American Girl® retail stores and an<br></br>
                    additional warehouse and distribution center in DeForest, Wisconsin, our facilities total <br></br>
                    over 1 million square feet.
                </p>
                <img style={{ width: 1400, height: 400, fontFamily: 'cursive' }} src={img2ForAbout} className="img2ForAbout" alt="img2ForAbout" />
                <p>
                    Since the beginning, we’ve created dolls and accessories that reflect the real world and all <br></br>
                    its colors, customs, and capabilities. We write engaging stories with a goal of opening<br></br>
                    minds and hearts. And we will never stop learning because of our promise to encourage <br></br>
                    kindness, build confidence, and celebrate every kind of great!<br></br>
                    Our wide range of dolls—offering a variety of skin tones, face molds, eye colors, hair styles<br></br>
                    and textures, plus hundreds of accessories and stories—helps girls highlight their <br></br>
                    individuality and style. Our commitment to diversity and inclusion extends even further,<br></br>
                    continuing with our selection of dolls without hair. These dolls are a perfect companion<br></br>
                    for girls who may be dealing with permanent or temporary hair loss.<br></br>
                    In addition to dolls without hair, we offer several other specialized items, such as an<br></br>
                    asthma and allergy set, service dog gear, crutches, a wheelchair, and a diabetes kit. Plus, <br></br>
                    hearing aid placement is also available for our 18-inch dolls (historical characters, Truly Me®,<br></br>
                    and Create Your Own), either at the time of purchase or through our Doll Hospital.<br></br>
                    We seek to help create a world where everyone is valued and respected, and we stand<br></br>
                    united in the fight against systemic racism. We are committed to empowering the next<br></br>
                    generation of girls through inclusive stories, products, and shared experiences. Check out<br></br>
                    our free online library of diverse books.
                </p>
                <img style={{ width: 800, height: 260 }} src={imgForAbout} className="imgForAbout" alt="imgForAbout" />
            </div>
        </>
    )

}