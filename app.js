const tourData = [
    {
        id: 1,
        title: "Van Gogh : The Immersive Experience",
        en: "This exhibition uses giant projections and sound to immerse visitors in the paintings of Vincent van Gogh. Van Gogh is a 19th-century Dutch painter famous for his highly intense colors and visible brushstrokes. He sold almost nothing during his lifetime but is today one of the world's most famous painters.",
        fr: "Cette exposition utilise des projections géantes et du son pour plonger le visiteur dans les tableaux de Vincent van Gogh. Van Gogh est un peintre néerlandais du XIXᵉ siècle célèbre pour ses couleurs très intenses et ses coups de pinceau visibles. Il n’a presque rien vendu de son vivant mais il est aujourd’hui l’un des peintres les plus célèbres au monde."
    },
    {
        id: 2,
        title: "Historic Windmill: Molen de Ster",
        en: "This wood-sawing windmill was built in 1739 to turn tree trunks into planks. It is located near the Leidse Rijn river, which allowed trunks to be transported by boat. Today, it still operates on Saturdays from 1pm to 4pm thanks to very kind volunteer millers who love to show their mill from top to bottom... provided you help them fold the mill's sails.",
        fr: "Ce moulin à scier le bois a été construit en 1739 pour transformer les troncs d’arbres en planches. Il est installé près de la rivière Leidse Rijn, ce qui permettait d’acheminer les troncs par bateau. Aujourd’hui il fonctionne encore les samedis de 13h à 16h grâce à des meuniers bénévoles très gentils qui n'hésitent pas faire découvrir leur moulin de fond en combles... à condition qu'on les aide à replier les voiles du moulin."
    },
    {
        id: 3,
        title: "Lombok District – Cultural Diversity",
        en: "This neighborhood is known for its highly diverse population. It developed in the 19th century when the city expanded around the canal.",
        fr: "Ce quartier est connu pour sa population très diverse. Il s’est développé au XIXᵉ siècle lorsque la ville s’est agrandie autour du canal."
    },
    {
        id: 4,
        title: "Grand Mosque of Utrecht",
        en: "This large mosque (often called Ulu Moskee) opened in 2015. It can accommodate about 1,200 people and features several floors and balconies for worshippers. The glass minarets light up at night, creating modern architecture inspired by Islamic tradition.",
        fr: "Cette grande mosquée (souvent appelée Ulu Moskee) a ouvert en 2015. Elle peut accueillir environ 1200 personnes et comporte plusieurs étages et des balcons pour les fidèles. Les minarets en verre s’illuminent la nuit, ce qui donne une architecture moderne inspirée de la tradition islamique."
    },
    {
        id: 5,
        title: "Utrecht Central Station",
        en: "Utrecht Centraal station is the country's main railway hub: almost all major train lines pass through here. It welcomes about 190,000 passengers a day and nearly 1,000 daily trains, making it the busiest station in the country. Right next to the station is one of the largest bicycle parking garages in the world, with over 12,500 spaces. This shows how essential cycling is to transportation in the Netherlands.",
        fr: "La gare d’Utrecht Centraal est le principal nœud ferroviaire du pays : presque toutes les grandes lignes de train passent par ici. Elle accueille environ 190 000 voyageurs par jour et près de 1000 trains quotidiens, ce qui en fait la gare la plus fréquentée du pays. Juste à côté de la gare se trouve l’un des plus grands parkings à vélos du monde, avec plus de 12 500 places. Cela montre à quel point le vélo est un moyen de transport essentiel aux Pays-Bas."
    },
    {
        id: 6,
        title: "Het Bollendak (Stationsplein)",
        en: "The Bollendak (\"bubble roof\") is a large canopy built over the square in front of Utrecht station. It is composed of 49 transparent air-filled cushions, kept inflated by compressors at about 22 meters above the ground. This highly visible roof has become an iconic structure of the new station area, renovated in the 2010s. Its steel structure and \"bubble cloud\" shape are designed to be light and spectacular.",
        fr: "Le Bollendak (“toit à bulles”) est une grande couverture construite au-dessus de la place devant la gare d’Utrecht. Il est composé de 49 coussins transparents remplis d’air, maintenus gonflés par des compresseurs à environ 22 m au-dessus du sol. Ce toit très visible est devenu une construction emblématique du nouveau quartier de la gare, rénové dans les années 2010. Sa structure en acier et sa forme en “nuage de bulles” sont conçues pour être légère et spectaculaire."
    },
    {
        id: 7,
        title: "Hoog Catharijne -- Free Time",
        en: "Hoog Catharijne is a huge indoor shopping center with over 100-150 stores and numerous restaurants. You'll find fashion boutiques, cafes, a cinema, and various services. The mall was built to connect Utrecht Centraal station directly to the historic center. When leaving the train, you often walk through this center to reach the city. With tens of millions of visitors a year, it's one of the busiest places in the country and an important meeting point for Utrecht's residents and students.",
        fr: "Hoog Catharijne est un immense centre commercial couvert avec plus de 100–150 magasins et de nombreux restaurants. On y trouve des boutiques de mode, des cafés, un cinéma et différents services. Le centre commercial a été construit pour relier directement la gare d’Utrecht Centraal au centre historique. Quand on sort du train, on traverse souvent ce centre pour rejoindre la ville. Avec des dizaines de millions de visiteurs par an, c’est l’un des endroits les plus fréquentés du pays et un point de rencontre important pour les habitants et les étudiants d’Utrecht."
    },
    {
        id: 8,
        title: "Oudegracht = \"Old Canal\"",
        en: "The Oudegracht is the main historical canal that runs through the city center of Utrecht from south to north. It is about 2 km long and connects ancient waterways like the Kromme Rijn and the Vecht. The canal was dug in the 12th century to allow the transport of goods and boat access to the heart of the city. The banks were raised to prevent flooding, and once the locks were built around 1275, two-level quays could be constructed: the street above, and at water level the quays and cellars (werfkelders) where goods arrived directly from the boats. Today, the Oudegracht is one of the liveliest areas in Utrecht: its werfkelders are transformed into cafes, restaurants, boutiques, and bars right on the water. You can walk along the canal, take boat or kayak rides, or simply enjoy the view and atmosphere.",
        fr: "L’Oudegracht est le canal historique principal qui traverse le centre‑ville d’Utrecht du sud au nord. Il est long d’environ 2 km et relie d’anciennes voies d’eau comme le Kromme Rijn et la Vecht. Le canal a été creusé dès le 12ᵉ siècle pour permettre le transport de marchandises et l’accès aux bateaux au cœur de la ville. Les berges ont été relevées pour éviter les inondations et, une fois les écluses construites vers 1275, on a pu construire des quais à deux niveaux : au‑dessus la rue, et au niveau de l’eau des quais et des caves (werfkelders) où les marchandises arrivaient directement des bateaux. Aujourd’hui, l’Oudegracht est l’un des espaces les plus animés d’Utrecht : ses « werfkelders » sont transformés en cafés, restaurants, boutiques et même bars directement au bord de l’eau. on peut se promener le long du canal, faire des balades en bateau ou en kayak, ou simplement profiter de la vue et de l’ambiance."
    },
    {
        id: 9,
        title: "Utrecht Library: In a Former Post Office",
        en: "The building was originally the large main post office in Utrecht, built in 1924 by architect Joseph Crouwel. It has been transformed into a modern library while preserving its historical brick architecture, typical of the Amsterdam School style. The heart of the building is a huge central hall with very tall parabolic arches made of brick and glass. This hall was once the space where post office customers came to send their letters. The Utrecht public library has existed since 1892 and now welcomes over a million visitors a year.",
        fr: "Le bâtiment était à l’origine le grand bureau de poste d’Utrecht, construit en 1924 par l’architecte Joseph Crouwel . Il a été transformé en bibliothèque moderne tout en conservant son architecture historique en briques, typique du style Amsterdam School. Le cœur du bâtiment est une immense salle centrale avec des arches paraboliques très hautes en briques et en verre. Cette halle était autrefois l’espace où les clients du bureau de poste venaient envoyer leurs lettres. La bibliothèque publique d’Utrecht existe depuis 1892 et accueille aujourd’hui plus d’un million de visiteurs par an."
    },
    {
        id: 10,
        title: "Anne Frank Statue",
        en: "One of the first Anne Frank statues in the world, located on the Janskerkhof square in Utrecht, was gifted to the city by local youth on April 30, 1959, in gratitude for municipal support to youth associations. It was created by Dutch artist Pieter d’Hont in bronze and installed in 1960. It is a representation of Anne Frank standing, head held high, a symbol of dignity despite the tragic history she represents. After it was vandalized in 1985, a replica was installed in 1986 from the original model kept by the artist.",
        fr: "Une des premières statues d’Anne Frank au monde qui se trouve sur la place Janskerkhof à Utrecht a été offerte à la ville par la jeunesse locale le 30 avril 1959 en signe de gratitude pour le soutien municipal aux associations de jeunes. Elle a été réalisée par l’artiste néerlandais Pieter d’Hont, en bronze, et installée en 1960. C’est une représentation d’Anne Frank debout, tête haute, symbole de dignité malgré l’histoire tragique qu’elle représente. Après son vandalisme en 1985, une réplique a été installée en 1986 à partir du modèle original conservé par l’artiste."
    },
    {
        id: 11,
        title: "Pandhof van de Dom",
        en: "The Pandhof van de Dom is the cloister garden of the Dom Cathedral (Domkerk). It is a 'kloostertuin' (a square garden surrounded by covered galleries) dating from the late 14th - 15th centuries. It was part of the religious complex and served for prayer, meditation, and circulation between monastic buildings. It's a peaceful garden filled with flowers, aromatic plants, and fountains, surrounded by a Gothic cloister. At the end of the 19th century, the gallery was restored in a Gothic style by Pierre Cuypers, a famous architect who designed the Central Station and the Rijksmuseum we saw in Amsterdam.",
        fr: "Le Pandhof van de Dom est le jardin cloîtré de la cathédrale de Dom (Domkerk). C’est une kloostertuin (carré de jardin entouré de galeries couvertes) qui date des fin XIVᵉ – XVᵉ siècles. Il faisait partie du complexe religieux et servait à la prière, à la méditation et à la circulation entre différents bâtiments monastiques. C'est un jardin paisible rempli de fleurs, de plantes aromatiques et de fontaines, entouré par une croisillon gothique. À la fin du XIXᵉ siècle la galerie a été restaurée dans un style gothique par Pierre Cuypers, célèbre architecte qui a réalisé la Gare Centrale et le Rijksmuseum qu'on a vu à Amsterdam."
    },
    {
        id: 12,
        title: "Jelling Runestone",
        en: "The Jelling Runestone is a very large engraved stone dating from the 10th century, raised by King Harald I of Denmark to honor his parents and mark his reign. On this stone, Harald claims to have unified Denmark and Norway and made the Danes Christians. This inscription is sometimes called the country's \"birth certificate\". The stone you see in Utrecht is a replica, gifted in 1936 by \"Danish Friends of the Netherlands\" to celebrate the 300th anniversary of Utrecht University. Placing it next to the Domkerk symbolically connects the Viking and Christian history of Northern Europe. Fun fact: the Bluetooth technology is named after this King Harald \"Bluetooth\", and the Bluetooth logo is a combination of his runic initials (ᚼ and ᛒ)!",
        fr: "La Runensteen (« pierre des runes ») de Jelling est une très grande pierre gravée datant du 10ᵉ siècle, élevée par le roi Harald Ier de Danemark pour honorer ses parents et marquer son règne. Sur cette pierre, Harald dit avoir unifié le Danemark et la Norvège et fait des Danois des chrétiens. Cette inscription est parfois appelée le « certificat de naissance » du pays. La pierre que tu vois à Utrecht est une réplique offerte en 1936 par un groupe d'Ami(e)s danois(es) des Pays-Bas pour célébrer le 300ᵉ anniversaire de l’Université d’Utrecht. Savais-tu que le nom du Bluetooth vient du surnom de ce roi, « à la Dent Bleue » ? Le logo du Bluetooth est d’ailleurs une combinaison de ses initiales en runes nordiques !"
    },
    {
        id: 13,
        title: "Dom Tower (Domtoren)",
        en: "The highest church tower in the Netherlands! The Domtoren rises to about 112 meters high, visible from almost everywhere in central Utrecht and considered the city's symbol. Built between 1321 and 1382 in the Gothic style, it originally part of St. Martin's Cathedral (Domkerk). In 1674, a tornado almost entirely destroyed the nave. The tower remained intact but is now separated from the main church; the space between is today called Domplein (the cathedral square).",
        fr: "La plus haute tour d’église des Pays‑Bas ! La Domtoren s’élève à environ 112 m de hauteur, visible presque partout depuis le centre d’Utrecht et considérée comme le symbole de la ville. Construite entre 1321 et 1382 dans le style gothique, elle faisait à l’origine partie de la cathédrale Saint‑Martin (Domkerk). En 1674, une tornade a presque entièrement détruit la nef (la grande partie centrale) de la cathédrale. La tour est restée intacte, mais elle est depuis séparée de l’église principale ; l’espace entre les deux s’appelle aujourd’hui Domplein."
    },
    {
        id: 14,
        title: "Free Time",
        en: "Enjoy the atmosphere, grab a snack, or buy souvenirs before we head back.",
        fr: "Temps libre ! Profitez-en pour vous promener, acheter un souvenir ou prendre un petit en-cas."
    },
    {
        id: 15,
        title: "Return to the Bus",
        en: "Meeting point for the route back home. Hope you had a fantastic day in Utrecht!",
        fr: "Retour au bus. On espère que vous avez passé une excellente journée à Utrecht !"
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline');
    
    // Render timeline items
    tourData.forEach((stop, index) => {
        const delay = index * 0.1;
        const html = `
            <div class="timeline-item reveal" style="transition-delay: ${delay}s">
                <div class="timeline-marker">${stop.id}</div>
                <div class="timeline-content">
                    <div class="glass-panel card">
                        <h3>${stop.title}</h3>
                        <p class="original-text">${stop.en}</p>
                        <button class="translation-toggle" onclick="toggleTranslation(${stop.id})" aria-expanded="false">
                            <span class="flag">🇫🇷</span> Traduction Française
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <div class="french-text" id="fr-${stop.id}">
                            <p>${stop.fr}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        timelineContainer.innerHTML += html;
    });

    // Setup intersection observer for reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Scroll effect for Starry Night background
    const starryBg = document.getElementById('starry-bg');
    if (starryBg) {
        window.addEventListener('scroll', () => {
            // Get scroll position and calculate opacity
            // Fades out completely after 500px of scrolling
            const scrollY = window.scrollY;
            const maxScroll = 500;
            let opacity = 1 - (scrollY / maxScroll);
            
            // Limit opacity between 0 and 1
            if (opacity < 0) opacity = 0;
            if (opacity > 1) opacity = 1;
            
            starryBg.style.opacity = opacity;
        });
    }
});

// Translation toggle function mapping to the global scope
window.toggleTranslation = function(id) {
    const content = document.getElementById(`fr-${id}`);
    const button = content.previousElementSibling;
    
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        content.classList.remove('open');
        button.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
    } else {
        content.classList.add('open');
        button.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
    }
};
