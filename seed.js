const Product=require('./models/product');
const products=[
    {
        name:'Iphone 11',
        price:20000,   
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Ipad',
        price:32000,   
        desc:"The iPad is a brand of iOS and iPadOS-based tablet computers developed by Apple Inc. The iPad was conceived before the related iPhone, but the latter was developed and released first. Speculations of the original iPad began in 2002 and surrounded its development, operating system, and release, prior to its introduction on January 20, 2010. It consists of four lineups, the original iPad lineup and three flagships: the iPad Mini, iPad Air, and iPad Pro.",
        img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
    },
    {
        name:'Macbook',
        price:45000,   
        desc:"The MacBook is a brand of Macintosh notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). Two different lines simply named  existed from 2006 to 2012 and 2015 to 2019.",
        img:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Keyboard',
        price:5000,   
        desc:"A keyboard is a peripheral device that enables a user to input text into a computer or any other electronic machinery. A keyboard is an input device and is the most basic way for the user to communicate with a computer. This device is patterned after its predecessor, the typewriter, from which the keyboard inherited its layout, although the keys or letters are arranged to function as electronic switches. The keys include punctuation, alphanumeric and special keys like the Windows key and various multimedia keys, which have specific functions assigned to them.",
        img:'https://media.istockphoto.com/photos/closeup-of-a-keyboard-with-the-russian-alphabet-for-the-blind-braille-picture-id1320147921?b=1&k=20&m=1320147921&s=170667a&w=0&h=1HV_gNfMTqHlUdNP37ryrSElSavF8t5funySffSte-g='
    },
    {
        name:'Monitor',
        price:10000,   
        desc:"A computer monitor is an output device that displays information in pictorial or text form. A monitor usually comprises a visual display, some circuitry, a casing, and a power supply. The display device in modern monitors is typically a thin film transistor liquid crystal display (TFT-LCD) with LED backlighting having replaced cold-cathode fluorescent lamp (CCFL) backlighting. Previous monitors used a cathode ray tube (CRT) and some Plasma (also called Gas-Plasma) displays. Monitors are connected to the computer via VGA, Digital Visual Interface (DVI), HDMI, DisplayPort, USB-C, low-voltage differential signaling (LVDS) or other proprietary connectors and signals.",
        img:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Drones',
        price:67000,   
        desc:"A drone is an unmanned aircraft. Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems. Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously using software-controlled flight plans in its embedded systems, that work in conjunction with onboard sensors and a global positioning system (GPS).",
        img:'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Camera',
        price:10000,   
        desc:"A camera is an optical instrument that captures a visual image. At a basic level, cameras consist of sealed boxes (the camera body), with a small hole (the aperture) that allows light through to capture an image on a light-sensitive surface (usually photographic film or a digital sensor). Cameras have various mechanisms to control how the light falls onto the light-sensitive surface. Lenses focus the light entering the camera. The aperture can be narrowed or widened. A shutter mechanism determines the amount of time the photosensitive surface is exposed to light.",
        img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
]

const seedDB = async () => {
      await Product.deleteMany({});
      await Product.insertMany(products);

      console.log('DB seeded');
}

module.exports=seedDB;