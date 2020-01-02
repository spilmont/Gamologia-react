
import zelda from '../images/zeldaalttp.jpg'
import mario from '../images/mario.jpg'
import metroid from '../images/metroid.jpg'
import sonic2 from'../images/Sonic_the_Hedgehog_2.jpg'
import Aladdin from '../images/Aladdin.png'
import streetOfRage from '../images/Streets_of_Rage.jpg'

import  zeldaimg1 from '../images/zelda/34379-Legend_of_Zelda,_The_-_A_Link_to_the_Past_(France)-8.jpg'
import  zeldaimg2 from '../images/zelda/cartezelda3.png'
import  zeldaimg3 from'../images/zelda/zelda-livre-de-mudora-003.png'

import  marioimg1 from '../images/mario/mario1.jpg'
import  marioimg2 from '../images/mario/mario2.jpg'
import  marioimg3 from'../images/mario/mario3.jpg'

import  metroidimg1 from '../images/metroid/metroid1.gif'
import  metroidimg2 from '../images/metroid/metroid2.jpg'
import  metroidimg3 from'../images/metroid/metroid3.jpg'

import  aladdinimg1 from '../images/aladdin/Aladdin1.jpg'
import  aladdinimg2 from '../images/aladdin/Aladdin2.jpg'
import  aladdinimg3 from'../images/aladdin/Aladdin3.jpg'

import  streetsofrageimg1 from '../images/streetofrage/StreetsofRage1.png'
import  streetsofrageimg2 from '../images/streetofrage/steetsofrage2.jpg'
import  streetsofrageimg3 from'../images/streetofrage/streetofrage3.png'

import  sonicimg1 from '../images/sonic/sonic1.jpg'
import  sonicimg2 from '../images/sonic/sonic3.jpg'
import  sonicimg3 from'../images/sonic/sonic2.jpg'


export default [


            {
              console:'megadrive',
              name:'Sonic 2',
              slug:'sonic2',
              cover:sonic2,
              images:[sonicimg1,sonicimg2,sonicimg3],
              date:1992,
              description:"Sonic the Hedgehog 2,\n aussi appelé Sonic 2, est un jeu vidéo de plates-formes développé par Sega,\n sorti en 1992 sur Mega Drive"
            },
          {
                console:'megadrive',
                name:'Streets of Rage',
                slug:'streetofrage',
                cover:streetOfRage,
                images:[streetsofrageimg1,streetsofrageimg2,streetsofrageimg3],
                date:1991,
                description:"La ville est sous le contrôle d'un syndicat du crime organisé.\n Trois jeunes policiers ont quitté les forces de la police métropolitaine et se préparent à vaincre l'organisation par leurs propres moyens !"
            },
          {
                console:'megadrive',
                name:'Aladdin',
                slug:'aladdin',
                cover:Aladdin,
                images:[aladdinimg1,aladdinimg2,aladdinimg3],
                date:1993,
                description:"Jeu de plateformes dans l'univers du célèbre dessin animé de Disney,\n où vous incarnez Aladdin parti à l'aventure accompagné du Génie."
            },
           {
                console:'supernintendo',
                name:'Zelda A Link To The Past',
                slug:'zelda3',
                cover:zelda,
                images:[zeldaimg1,zeldaimg2,zeldaimg3],
                date:1992,
                description:"Par une nuit d'orage dans le royaume d'Hyrule,\n Link, un jeune orphelin recueillit par son oncle,\n reçoit un message télépathique d'une princesse qui dit être prisonnière dans le palais d'Hyrule.\n Pour créer une brèche entre le monde d'Hyrule et la Terre d'Or,\n le sorcier Agahnim a décidé de rompre le sceau des 7 sages qui empêchait la création de cette brèche.\nPour cela, il fait disparaître les 7 filles descendantes des sages.\n En apprenant cette terrible nouvelle, Link décide de partir à la recherche de l'épée légendaire Excalibur pour détruire les forces du mal."
            },
            {
                console:'supernintendo',
                name:'Super Mario World',
                slug:'supermarioworld',
                cover:mario,
                images:[marioimg1,marioimg2,marioimg3],
                date:1990,
                description:"Super Mario World, sous-titré Super Mario Bros. 4 au Japon,\n est un jeu vidéo de plates-formes développé et édité par Nintendo sur Super Nintendo.\n Le développement a été assuré par la division Nintendo EAD,\n dirigée par Shigeru Miyamoto ; ce dernier a réalisé le jeu aux côtés de Takashi Tezuka"
            },
            {
                console:'supernintendo',
                name:'Super Metroid',
                slug:'supermetroid',
                cover:metroid,
                images:[metroidimg1,metroidimg2,metroidimg3],
                date:1994,
                description:"Super Metroid est un jeu d'action-aventure développé par Nintendo R&D1 et Intelligent Systems,\n et édité par Nintendo sur Super Nintendo en mars 1994 au Japon,\n puis en avril aux États-Unis et en juillet en Europe",
            },

]
