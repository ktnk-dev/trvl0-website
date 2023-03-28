function postimg(path, width = false){
    if (width) {style = 'max-width: '+width+'px'}
    else {style = ''}
    return `<img src="media/${path}" alt="" class="pvimg" style="${style}">`
}

texts = {
    header_lang: {
        ru: 'English version 🇬🇧',
        en: 'Версия на Русском 🇷🇺'
    },
    header_menubutton: {
        ru: 'Меню',
        en: 'Menu'
    },
    header_menuclose: {
        ru: 'Закрыть меню',
        en: 'Back'
    },
    headerel_about: {
        ru: 'Об Абрау',
        en: 'About Abrau'
    },
    headerel_residence: {
        ru: 'Проживание',
        en: 'Residence'
    }, 
    headerel_campaings: {
        ru: 'Походы',
        en: 'Campaigns'
    }, 
    headerel_photo: {
        ru: 'Фотопутеводитель',
        en: 'Photo-guide'
    },
    title: {
        ru: 'Фотопутеводитель по Абрау-Дюрсо',
        en: 'Photo-guide around Abrau-Durso'
    },


    city_titlename: {
        ru: 'Абрау-Дюрсо',
        en: 'Abrau-Durso'
    },
    city_shortdeskr: {
        ru: 'Добро пожаловать в',
        en: 'Welcome to'
    }, 
    cfmi: {
        ru: 'Нажмите для подробностей',
        en: 'Click for more info'
    }, 
    close: {
        ru: 'Закрыть',
        en: 'Close'
    },
    closemenu: {
        ru: 'Закрыть меню',
        en: 'Close menu'
    },
    menutext: {
        ru: 'Перемещение по сайту',
        en: 'Site navigation'
    },

    rcmt: {
        ru: 'Фотопутеводитель по Абрау-Дюрсо. Один день в Абрау.',
        en: 'Photo-guide around Abrau-Durso through the photo. One day in Abrau-Durso.'
    },
    rcmds: {
        ru: `Полагают, что озеро Абрау образовалось на месте обрыва, глубокого провала, в то время как речка Дюрсо, протекающая за перевалом, питается четырьмя источниками. Отсюда и пошло название Абрау-Дюрсо: в переводе с черкесского «Абрау» означает «обрыв», а «Дюрсо» - «четыре воды».
        Если вы хотите провести один день в Абрау, то предлагаем вам увлекательную программу, разбитую на 3 части: утро, день и вечер. Мы уверены, что вы проведёте день великолепно и захотите возвращаться сюда снова и снова.`,
        en: `It is believed that Lake Abrau was formed on the site of a cliff, a deep dip, while the Durso River, which flows behind the pass, is fed by four sources. The name Abrau-Dyurso came from Circassian "Abrau" means "cliff", and "Dyurso" - "four waters".
        If you want to spend one day in Abrau, we offer you an exciting program divided into three parts: morning, afternoon and evening. We are sure that you will have a great day and would like to come back here again and again.`
    }

}

posts = {
    vr: {
        ru: `<p>Ресторан кавказской кухни «Вилла Роз», открывшийся на курорте Абрау-Дюрсо в апреле 2019 года, включен в Топ-100 ресторанов России за лучшую новую концепцию. Cписок торжественно объявлен в Москве на премии «Пальмовая ветвь ресторанного бизнеса» 11 декабря 2019 года. «Вилла Роз» — первый ресторан из Новороссийска, попавший в список этой премии.</p>
        <p>Ресторан кавказской кухни «Вилла Роз» — долгожданный проект для Абрау-Дюрсо. Заведение находится в старейшем здании курорта на набережной озера Абрау. Здесь ранее жил винодел Эдуард Ведель, прославившийся первыми тихими винами «Абрау-Дюрсо». Тематика гостеприимного Кавказа выбрана неслучайно, ведь на территории винодельни тысячелетия назад жили кавказские народы. «Вилла Роз» стала первым в России рестораном, концепцией которого стала традиционная кавказская кухня в авторском прочтении. Блюда от шеф-повара Руслана Терзяна представляют собой высокую гастрономию, раскрывающую всё богатство ряда самобытных российских республик: Карачаево-Черкесская, Кабардино-Балкарская, Чеченская и Дагестан, а также радушную Грузию, загадочную Армению и Абхазию.</p>
        <p>Заслуживает отдельного внимания и аутентичный интерьер заведения: винтажные предметы мебели и декора привезены из Грузии. Все элементы собирались на блошиных рынках в антикварных салонах. Посуда изготовлена вручную грузинскими мастерами на заказ. Также «Вилла Роз» славится своим винным погребом, где находится коллекция лучших отечественных вин.</p>
        ${postimg('vr1.jpg')}${postimg('vr0.jpg')}`,
        en: `<p>The restaurant of Caucasian cuisine «Villa Rose» which was opened at the resort of Abrau Durso in April 2019 is included in the Top 100 restaurants of Russia for the best new concept. The list was solemnly announced in Moscow at the «Palm Branch Restaurant Business» Award on December 11, 2019. «Villa Roz» - the first restaurant from Novorossiysk which was included in the list of this award.</p>

        <p>Restaurant of Caucasian cuisine «Villa Roz» - is a long-awaited project for Abrau-Durso. The establishment is located in the oldest resort building on the embankment of Lake Abrau. Here previously lived a winemaker Edward Wedel famous for the first “quiet” wines (all non-sparkling drinks, which contains almost no carbon dioxide) “Abrau-Durso”. The theme of the hospitable Caucasus was chosen not by chance but because in the winery of a millennium ago lived Caucasian peoples.</p>

        <p>«Villa Roz» became the first restaurant in Russia the concept of which was the traditional Caucasian cuisine in the author’s reading. Dishes from chef Ruslan Terzyan represent a high gastronomy revealing all the wealth of a number of original Russian republics: Karachaevo-Cherkesskaya, Kabardino-Balkarskaya, Chechen and Dagestan (as well as hospitable Georgia) mysterious Armenia and Abkhazia. The authentic interior of the establishment deserves special attention: vintage pieces of furniture and decoration were brought from Georgia. All the items were gathered at flea markets in antique salons. The dishes were made by Georgian craftsmen to order. Also «Villa Roz» is famous for its wine cellar where there is a collection of the best domestic wines.</p>
        ${postimg('vr1.jpg')}${postimg('vr0.jpg')}
        `
    },
    gcab: {
        ru: `<p>Первое заведение, открывшееся на курорте Абрау-Дюрсо при Русском винном доме. Здесь началась история развития современной черноморской кухни.</p>

        <p>Бренд-шеф Сергей Альшевский переосмыслил местные рецепты, экспериментируя с приемами европейской, перуанской и паназиатской кухонь, и добавил свое авторское видение. Так появились блюда, ради которых, из года в год приезжают гости со всей России. Всё меню прекрасно сочетается с винами «Абрау-Дюрсо», а также коктейлями от шеф-бармена Давида Мардиросьяна.</p>

        <h3>Остается только забронировать столик и наслаждаться моментом!</h3>
        ${postimg('gcab0.jpg')}${postimg('gcab1.jpg')}`,
        en: `<p>Grand Cafe "Abrau-Durso" is the first establishment that opened at the resort Abrau-Durso at the Russian wine house. The history of modern Black Sea cuisine began here.</p>
        <p>Brand-chef Sergei Alshevsky rethought local recipes experimenting with European, Peruvian, and Pan-Asian cuisine, and added his own vision. So there were dishes for which guests from the whole country come from year to year. The whole menu is perfectly combined with the wines «Abrau-Durso» as well as cocktails from the chef bartender David Mardirosyan.</p>
        <h3>All you have to do is to book a table and enjoy the moment!</h3>
        ${postimg('gcab0.jpg')}${postimg('gcab1.jpg')}`
    },
    ucl: {
        ru: `<p>Усадьба находится на юге Абрау-Дюрсо в 5 км от центра поселка, в живописной долине, окруженной лиственным лесом недалеко от диких черноморских пляжей. </p>

        <p>Усадьба предлагает отдохнуть на природе в компании родных и близких, поиграть в бильярд, позаниматься йогой, окунуться в бассейн с родниковой водой, ощутить всю прелесть активного отдыха, бани и барбекю. В «Круглом озере» одинаково хорошо будут себя чувствовать все любители активного отдыха: и семьи с детьми, и молодежные компании. Номера оборудованы всем необходимым. </p>

        <p>Рядом с Усадьбой "Круглое озеро" расположена конюшня, где живут очаровательные лошадки исландской породы. Эту породу обожают дети и взрослые за спокойный, доброжелательный характер и невысокий рост. Во время отдыха в Абрау-Дюрсо Вы можете взять уроки верховой езды или отправиться в конную прогулку по живописным окрестностям.</p>
        
        <h2>Также есть:</h2>
        <h3>Йога-центр</h3>
        <div class="sf">
        <p class="s">Утренняя йога</p> 
        <p class="s">Семейная йога </p>
        <p class="s">Туризм и практики йоги в местных силах</p>
        <p class="s">Оздоровительная гимнастика</p> 
        <p class="s">Мастер классы</p> и многое другое (лекции по йоге и психотехникам, арт-терапия, медитации)</div>
        
        <h3>Отдых на свежем воздухе</h3>
        <div class="sf">
        <p class="s">Мангальная зона 
        12 часов, до 14-16 человек - 2500 руб.</p>
        <p class="s">Шатер малый с мангалом 
        12 часов, до 10 человек -1500 руб.</p>
        <p class="s">Мангальная зона 
        Дополнительный мангал -350 руб.</p>
        <p class="s">Жаровня-казан-350 руб.</p>
        </div>


        <h3>Верховая езда </h3>
        <div class="sf">
        <p class="s">Конная прогулка с инструктором- 30 мин./700 руб.</p>
        <p class="s">Подарочный сертификат(согласно номиналу)- от 3000 руб.</p>
        <p class="s">Фотоссесия со своим фотоаппаратом во время прогулки на лошадях- 30 мин./1000 руб.</p>
        <p class="s">Абонент уроков верховой езды -60 мин./1500 руб.</p>
        <p class="s">Урок верховой езды-60 мин./1500 руб.</p>
        <p class="s">Конная прогулка с инструктором по окрестностям Абрау-Дюрсо-60 мин./1000 руб.</p>
        </div>

        <h3>Русская баня </h3>
        <div class="sf">
        <p class="s">От 1 до 4 человек-1500 руб./час</p>
        <p class="s">Дополнительный гость -700 руб./час</p>
        </div>
        <h3 style="margin-top: 10px">Местоположение</h3>${postimg('gcabM.png')}`,
        en: `<p>The estate is located in the south of Abrau-Durso, 5 km from the center of the village, in a picturesque valley surrounded by deciduous forest near  the wild Black Sea beaches. </p>

        <p>The estate offers nature vacations in the company of family and friends, play billiards, do yoga, plunge into the pool with spring water, feel the charm of outdoor activities, baths and barbecue. In «Round Lake» will feel equally well all lovers of outdoor activities: and families with children and young companies. The rooms are fully equipped.</p>

        <p>Near the Estate "Round Lake" there is a stable where charming Icelandic horses live. This breed is adored by children and adults for its calm, friendly character and low growth. During your holiday in Abrau Durso you can take lessons riding or go horseback riding in the picturesque surroundings.</p>
        <h2>There is also: </h2> 
        
        <h3>A yoga center</h3>
        <div class="sf">
        <p class="s">Morning Yoga </p>
        <p class="s">Family Yoga </p>
        <p class="s">Tourism and yoga practices in local forces</p>
        <p class="s">Health gymnastics </p>
        <p class="s">Master classes</p> and much more (lectures on yoga and psychotechnics, art therapy, meditation)
        </div>

        <h3>Outdoor recreation</h3>
        <div class="sf">
        <p class="s">Barbecue area 12 hours, up to 14-16 people - 2500 rubles.</p>
        <p class="s">Small tent with barbecue 12 hours, up to 10 people -1500 rubles.</p>
        <p class="s">Additional grill -350 rubles.</p>
        <p class="s">Brazier-cauldron-350 rubles.</p>
        </div>

        <h3>Horse riding</h3>
        <div class="sf">
        <p class="s">Horse riding with an instructor - 30 min. /700 rubles.</p>
        <p class="s">Gift certificate(according to the nominal value)- from 3000 rubles.</p>
        <p class="s">Photo session with your camera during a horse ride - 30 min. /1000 rubles.</p>
        <p class="s">The subscriber of riding lessons -60 min./ 1500 rub.</p>
        <p class="s">Riding lesson-60 min./1500 rub.</p>
        <p class="s">Horseback riding with an instructor in the surroundings of Abrau-Durso-60 min./1000 rub.</p>
        </div>

        <h3>Russian sauna</h3>
        <div class="sf">
        <p class="s">From 1 to 4 people - 1500 rubles/hour</p>
        <p class="s">Additional guest -700 rubles/hour</p>
        </div>


        ${postimg('gcabM.png')}
        `
    }, 
    lgal: {
        ru: `<p>Длы того, чтобы провести вечер  не только весело, но и с пользой, Абрау предлагает посетить такое замечательное место, как  “Галерея света Абрау”, ведь это один из немногих центров, представляющих самые передовые из ныне существующих видов искусств. </p>
        <p>Здесь можно увидеть аудиовизуальные инсталляции, погружающие посетителей в настоящую вселенную медиа-искусства, наполненную необычными эмоциями и переживанием нового опыта. Это не просто творческая галерея, а целое путешествие в мир искусства будущего, где соединены видео, звук, свет и даже танец. Здесь можно слушать, смотреть, взаимодействовать, создавать, играть, путешествовать по другим мирам.</p>
    
        <p>В галерее представлена первая персональная выставка работ студии аудиовизуального искусства Kuflex, состоящая из 7 работ, одна из них – “Аз есмь лоза”. Это шоу рассказывает о связи виноградарства и виноделия с искусством и магией творчества. С помощью мультимедийных технологий зрители смогут познакомиться с историей, связанной с зарождением виноделия на земле. Метафорично описывается сотворение мира, появление виноградной лозы.</p>
    
        <p>В заключительной части мультимедийного представления зрителей ожидает ренессанс – возрождение виноградной лозы. Несмотря на пройденные  трудности, сила винограда вновь открывает гармонию, вдохновение и радость творчества.</p> <h4>Экспозиция доступна к посещению ежедневно.</h4>${postimg('lgal.png')}
        `,
        en: `<p>In order to spend the evening not only fun, but also useful, Abrau offers to visit such a wonderful place as the “Abrau Light Gallery” because it is one of the few centers representing the most advanced of the existing arts. </p>

        <p>Here you can see audiovisual installations, immersing visitors in the real universe of media art, filled with unusual emotions and experience. This is not just an art gallery but a journey into the art world of the future where video, sound, light and even dance are connected. Here you can listen, watch, interact, create, play, travel to other worlds.</p>

        The gallery presents the first solo exhibition of the works of the Kuflex Audio-visual Art Studio, consisting of 7 works, one of them - «Az Esm Vine». This show talks about the relationship between viticulture and winemaking with art and the magic of creativity. With the help of multimedia technology, viewers will be able to get acquainted with the history of the emergence of wine on the Earth. Metaphorically describes the creation of the world, the appearance of the wine.</p>

        <p>In the final part of the multimedia presentation the audience is waiting for a renaissance - the revival of the wine. Despite of the difficulties, the strength of the grape opens harmony, inspiration and joy of creativity again. </p>
        <h4>The exhibition is available to visit daily.</h4>
        ${postimg('lgal.png')}
        `
    }, 
    ozbam: {
        ru: `<h3>Если вы турист на машине, вам рекомендуется посетить Озеро Бам в Абрау-Дюрсо.</h3>
        <p>Озеро Бам — это бывшее водохранилище недалеко от Абрау-Дюрсо, расположенное на речке Дюрсо в местечке под названием "хутор Лесничество".
        Местный житель Сомов Дмитрий Степанович высадил здесь лотосы. Во время поездок в Индию ему пригляделся этот цветок. Изначально он высаживал их в своем доме, в бассейне. Как только цветы сильно разрослись, он решил их распространить в ближайшем водоеме - на Баме. Он брал лотос к его корневишу, приматывал камень и забрасывал в озеро, так он и прижился. Летом,  во время цветения лотосов, можно насладиться необыкновенным видом.</p>
        <p>До 2002 года озеро использовалось для орошения виноградников и вмещало в себя до 6 млн кубометров воды. А в 1975 году даже проводили Всесоюзные соревнования по лодочному спорту. Но в августе 2002 года произошла катастрофа. В результате сильных паводков рукотворная плотина разрушилась и сильнейший поток воды хлынул по руслу речки Дюрсо, сметая всё на своем пути... В настоящее время от него осталось небольшое озерцо.<p>
        <h3>Как же сюда попасть?</h3>
        
        <p>Есть несколько вариантов:
        Начало от конечной остановки в Больших Хуторах.</p>
        <p>1. На машине по полям виноградника. Дорога не всегда хорошая, лучше добираться на автомобиле с хорошей проходимостью.</p>
        <p>2. Той же дорогой можно дойти пешком, но летом по жаркому и палящему солнцу это не лучший выбор. Но самый прямой.</p>${postimg('ozbamM.jpg')}${postimg('ozbam.jpg')}
        `,
        en: `<p>Lake Bam is a former reservoir near Abrau—Durso, located on the river Durso in a place called "farm Forestry".</p>

        <p>Local resident Dmitry Stepanovich Somov planted lotuses here. During trips to India, he took a fancy to this flower. Initially, he planted them in his house, in the pool. As soon as the flowers grew very large, he decided to spread them in the pond Bam. He would take a lotus to his root, put a rock on it, and throw it into the lake, and so it took hold. In summer, during the flowering of lotuses, you can enjoy an extraordinary view.</p>

        <p>Until 2002, the lake was used for irrigation of vineyards and contained up to 6 million cubic meters of water. And in 1975 even held All-Union competitions in boat sports. But in August 2002 there was a disaster. As a result of severe floods, the man-made dam collapsed and a strong stream of water poured down the bed of the Durso river, sweeping everything in its path... It is now a small lake.</p>

        <h3>How can you get to this place?</h3>
        <p>There are several options:
        Start from the final stop in the Great Farms.</p>
        <p>1. By car through the fields of the vineyard. The road is not always good, it is better to get by car with good cross-country.</p>
        <p>2. The same road can be reached on foot, but in summer, оn the hot and scorching sun, this is not the best choice. But the most direct.</p>${postimg('ozbamM.jpg')}${postimg('ozbam.jpg')}
        `
    },
    lest: {
        ru: `<h3>Если вы любите старую архитектуру или желаете прочувствовать атмосферу  того времени, вам следует посетить старую лестницу Абрау.</h3>
        <p>Ещё в прошлом веке (60-70 гг.) лестница имела достойный вид и, безусловно, являлась гордостью Абрау. Наверное, у каждого местного жителя в семейном альбоме имеется хоть одна фотография из прошлого с изображением знаменитой большой лестницы. Загляните в свои семейные альбомы! Местные любили фотографироваться именно на этой красивой чудо-лестнице возле симпатичных тумб с барельефами.</p>
        <p>Лестница в стиле сталинского ампира в Абрау-Дюрсо была построена в 1938 году. Сооружение пережило войну и блистало красотой в советские годы. Но в годы перестройки историческая достопримечательность не смогла выжить. Элементы декора разрушились, стали осыпаться.</p>
        <p>Все элементы лестницы – литые. Например, одна колона весит 150 килограммов, а каждая балясина - 25 килограммов. На реставрацию исторической лестницы выделено около 5 миллионов рублей из фонда «Жизнь Абрау-Дюрсо».</p>${postimg('lest.jpg')}
        `,
        en: `<p>Even in the last century (60-70), the ladder had a decent appearance and, of course, was the pride of Abrau. Probably, every local resident in the family album has at least one photo from the past with the image of the famous grand ladder. Take a look at your family albums! Locals loved to be photographed on this beautiful miracle ladder near the cute bas-relief cabinets.</p>

        <p>The ladder in  the style of Stalin’s Empire in Abrau-Durso was built in 1938. The structure survived the war and shined beauty in the Soviet years. But in the years of perestroika, the historical landmark could not survive. The decorative elements collapsed, began to crumble.</p>

        <p>All elements of the ladder are cast. For example, one column weighs 150 kilograms, and each baluster weighs 25 kilograms. About 5 million rubles from the «Life of Abrau-Durso» fund have been allocated for the restoration of the historical ladder.</p>
        ${postimg('lest.jpg')}
        `
    },
    sf: {
        ru: `<h3>Шоу фонтанов в Абрау – прекрасный способ завершения “зажигательного “ вечера.</h3> 


        <p>Представление самого большого поющего фонтана в России, установленного в акватории озера, можно увидеть в Абрау-Дюрсо!</p> 
        <p>Светозвуковое шоу является неотъемлемой частью отдыха каждого гостя, посещающего наш курорт. Каждый год программа фонтана обновляется и дополняется спецэффектами.</p><p>Разработчиками системы являются специалисты из Италии.</p>
        <h3>Из чего состоит шоу:</h3>
        1. Танцующие в такт музыке струи воды – длина до 70 метров<br>
        2. Огненные пушки и лазерное шоу<br>
        3. Полотно из брызг, на котором транслируются визуальные образы<br>
        4. Разнообразие музыкальных композиций – от классических произведений Арама Хачатуряна до группы «Тату»<br>
        5. Интереснейший рассказ о развитии производства игристого в Абрау-Дюрсо.
        <p>Рядом расположены прокаты лодок и катамаранов по доступным ценам – на них можно отправиться в путешествие по озеру Абрау и посмотреть шоу с необычных точек.</p>
        <h3>Шоу проходит ежедневно в 20:00</h3>${postimg('sf.png')}${postimg('sf1.png')}
        
         `,
         en: `<p>The performance of the largest singing fountain in Russia which are installed in the water area of the lake can be seen in Abrau Durso.</p> 

         <p>The light and sound show is an integral part of the rest of every guest visiting our resort. Every year the fountain program is updated and supplemented with special effects. The developers of the system are experts from Italy.</p>

         <h3>This show consists of:</h3>
         1. Water jets dancing in time to music – length up to 70 meters<br>
         2. Fire guns and laser show<br>
         3.	Spray canvas with visual images<br>
         4. Variety of musical compositions – from classical works of Aram Khachaturian to the group «Tatu»<br>
         5. The most interesting story about the development of sparkling production in Abrau Durso.
         <p>Nearby there are also boat rentals and catamarans at affordable prices – they can go on a trip on Lake Abrau and watch shows from unusual points.</p>
         
         <h3>The show takes place daily at 20:00.</h3>${postimg('sf.png')}${postimg('sf1.png')}
         `
    },
    amfi: {
        ru: ` 
        <p>Для тех, кто любит проводить своё время, окружив себя творческой, душевной атмосферой, туристам предлагается посетить такое чудесное место, как Амфитеатр Абрау-Дюрсо.</p>
        <p>Над набережной озера Абрау,  воспаряет белый купол, который держат восемь колонн. Это сооружение, созданное архитектором Андреем Ивановым, именуется «амфитеатром» и было возведено в 2010 году. С тех пор стало неотъемлемой частью образа курорта и завсегдатаем туристических фотоснимков. </p><p>Амфитеатр используется для проведения массовых мероприятий, так что это не только архитектурный, но и культурный объект, играющий важную роль в жизни поселка.</p>
        <p>Многие, уже побывавшие здесь туристы считают, что это довольно  романтичное место, откуда можно любоваться видом озера, делать фото, вечером посидеть послушать музыку и полюбоваться на шоу фонтанов. </p>
        
        <h3>Адрес: улица Набережная.</h3> ${postimg('amfi.png')}
        `,
        en: `<p>For those who like to spend their time surrounded by a creative and soulful atmosphere tourists are invited to visit such a wonderful place as the Amphitheatre Abrau-Durso.</p>

        <p>Over the embankment of Lake Abrau soars white dome which is held by eight columns. This structure is called «amphitheater» that was built in 2010 and created by architect Andrey Ivanov. Since then, it has become an integral part of the image of the resort and a frequent tourist photo. The amphitheater is used for mass events so it is not only an architectural but also a cultural object that plays an important role in the life of the township.</p>

        <p>Many tourists who have already been here believe that this is a rather romantic place where you can admire the view of the lake, take photos, enjoy music  and admire the show of fountains in the evening.</p>

        <h3>Address: Naberezhnaya street.</h3>${postimg('amfi.png')}
        `
    }, 
    chs: {
        ru: `<p>Во время Вашего пребывания в отеле “Империал” Вы сможете посетить Champagne-spa — нашу особую гордость, и насладиться полезными свойствами разнообразных терм со всего света.</p>

        <p>Для Вас: финская и травяная сауны, хамам, душ впечатлений, ледяной фонтан, дорожка Кнейппа, зона отдыха и открытый бассейн. Обещаем, Вы выйдете из этого «океана впечатлений» обновленными, помолодевшими и одухотворенными.</p>${postimg('chs.jpg')}${postimg('bM.png')}
        `,
        en: `<p>You will be able to visit the Champagne Spa during your stay at the hotel “Imperial” - our special pride, and enjoy the beneficial properties of a variety of thermal baths from around the world. Champagne Spa- our special pride, and enjoy the beneficial properties of a variety of thermal complex from the whole world.</p>

        <p>For you: Finnish and herbal saunas, hammam, impressions shower, ice fountain, Kneipp path, relaxation area and outdoor pool. We promise that you will come out of this "ocean of impressions" refreshed, rejuvenated and inspired.</p>${postimg('chs.jpg')}${postimg('bM.png')}
        `
    },
    bimp: {
        ru: `<p>Бутик-отель «Империал» & Champagne-spa на берегу озера Абрау с изысканными номерами, отличным сервисом с первых минут окружит Вас атмосферой утонченного комфорта.</p> 
        <p>А уникальный спа-комплекс Champagne-spa, все ритуалы которого основаны на удивительных свойствах винограда, позволит Вам забыть обо всем и окунуться в атмосферу блаженства и счастья. Также не оставит равнодушным круглогодичный бассейн с роскошным видом на озеро. Посещение этого уголка безмятежности входит в стоимость проживания.</p> ${postimg('bimp.jpg')}${postimg('bM.png')}`,
        en: `<p>Boutique hotel "Imperial" & Champagne-spa is located  on the shore of Lake Abrau with the exquisite rooms, excellent service from the first minutes will surround you with the atmosphere of refined comfort.</p> 
        <p>A unique spa complex Champagne-spa, all the rituals of which are based on the amazing properties of grapes, will allow you to forget everything and plunge into the atmosphere of bliss and happiness. Also, the year-round swimming pool with a luxurious view of the lake will not leave you indifferent. A visit to this corner of serenity is included in the price.</p>${postimg('bimp.jpg')}${postimg('bM.png')}`
    }, 
    rimp: {
        ru: `<p>Ресторан домашней французской кухни, открывшийся в одноименном отеле порадует ценителей стильным интерьером и непередаваемой атмосферой солнечного Прованса.</p>
        <p>Мягкие изящные формы, пастельные тона, скатерти цвета мяты и белоснежный фарфор вызовут в воображении картины великолепных французских пейзажей, согретых теплыми лучами солнца, овеянных свежим бризом и пропитанных утонченным ароматом вина.</p>${postimg('rimp.jpg')}${postimg('bM.png')}`,
        en: `<p>The restaurant of homemade French cuisine, opened in the hotel of the same name, will delight connoisseurs of a stylish interior and an indescribable atmosphere of sunny Provence.</p>
        <p>Soft elegant shapes, pastel tones, mint-colored tablecloths and snow-white porcelain will conjure up pictures of magnificent French landscapes warmed by the warm rays of the sun, soaked with fresh breezes and soaked in the refined aroma of wine.</p>${postimg('rimp.jpg')}${postimg('bM.png')}
        `
    },
    foodcort: {
        ru: `<p>Фудкорт в Абрау-Дюрсо – гастрономическая площадь, где в каждом домике представлены последние стритфуд-тренды.</p>
        <p>На фудкорте вы познакомитесь с блюдами черноморской, кавказской, паназиатской, американской, греческой и многих других кухонь.</p>
        <p>Расположиться можно за одним из столиков под зонтом, который поможет скрыться от солнца.</p>${postimg('food.png')}`,
        en: `<p>The food court in Abrau-Durso is a gastronomic area where the latest street food trends are presented in each house.</p>
        <p>At the food court you will get acquainted with the dishes of the Black Sea, Caucasian, Pan-Asian, American, Greek and many other cuisines.</p>
        <p>You can sit at one of the tables under an umbrella that will help you hide from the sun.</p>${postimg('food.png')}`
    },
    petit: {
        ru: `Следующее заведение – это Petit Cafe, которое находится по адресу ул. Промышленная, д.38, Абрау-Дюрсо. Это место специализируется на европейской кухне, в меню есть позиции, которые подходят для вегетарианцев. ${postimg('petit.png')}`,
        en: `The next place is Petit Cafe, which is located on st. Industrial, d.38, Abrau-Durso. This place specializes in European cuisine, on the menu there are dishes that are suitable for vegetarians. ${postimg('petit.png')}`
    },
    ecotur: {
        ru: `<p>Последнее время особенно популярен такой вид туризма, как экотуризм. И поэтому мы хотим порекомендовать вам отправиться на пешие маршруты сразу после плотного завтрака.</p>
        <p>Экотуризм в Абрау – это туризм со вкусом! Пешие маршруты Абрау-Дюрсо разработаны с учетом пожеланий путешественников и ценителей отдыха на природе. Это новый поворот ваших приключений на юге, вас ждут лучшие виды и природное разнообразие.</p>
        <p>Восемь пеших маршрутов проложены через разнообразные локации, чтобы гости познакомились с природой Абрау-Дюрсо.</p> 
        ${postimg('ecotur.png')}`,
        en: `<p>Nowadays, such type of tourism as ecotourism is very popular. So we would like to recommend you to go to the hiking trails immediately after a hearty breakfast.</p>
        <p>Ecotourism in Abrau is a tourism with a charm! Abrau-Durso hiking trails are designed taking into account of the wishes of travelers and lovers of outdoor recreation. This is a new way of your adventures in the south, with the best views and natural diversity.</p>
        <p>Eight hiking trails are laid through various locations so that guests can get acquainted with the nature of Abrau-Durso. </p>        
        ${postimg('ecotur.png')}`
    },
    artbaz: {
        ru: `На площади Александра II вы можете почувствовать себя в одном из уголков Франции. Площадь объединила арт-мастерские, арт-базар с блошиным рынком, открытую сцену и необычный объект – фонтан в виде огромной бутылки игристого в момент её откупоривания. Также вы можете видеть здание с башней, раньше здесь находились складские помещения. Сегодня здесь расположен арт-базар, где вы можете приобрести украшения, посуду, косметику и сувениры ручной работы, выполненные местными мастерами.${postimg('artbaz.png')}${postimg('artbaz1.png')}`,
        en: `On Place Alexandre II you can think that you are in one of the corners of France. The square united art workshops, an art market with a flea market, an open stage and an unusual object - a fountain in the form of a huge bottle of sparkling wine at the moment of its opening. You can also see a building with a tower, which used to be a warehouse. Now, there is an art market where you can buy jewelry, dishes, cosmetics and handmade souvenirs made by local craftsmen.${postimg('artbaz.png')}${postimg('artbaz1.png')}`
    },
    waterpark: {
        ru: `<p>Совершите прогулку по озеру Абрау – главной достопримечательности курорта. Это самое большое пресноводное озера Краснодарского края и одно из самых крупных на Кавказе. Приглашаем совершить прогулку по бирюзовой глади на одном из уникальных транспортных средств водного парка. </p>
        <p>В коллекции водного парка есть современные яхты, романтические лодочки и редкие ретро-экспонаты. Что бы вы ни выбрали, прогулка по озеру станет одним из самых ярких воспоминаний о живописном Абрау-Дюрсо.</p>${postimg('waterpark.png')}`,
        en: `<p>Taking a walk along Lake Abrau is the main attraction of the resort. This is the largest freshwater lake in the Krasnodar Territory and one of the largest in the Caucasus. We invite you to take a walk along the turquoise surface on one of the unique vehicles of the water park. </p>
        <p>The collection of the water park includes modern yachts, romantic boats and rare retro exhibits. Whatever you choose, a walk along the lake will become one of the most vivid memories of the picturesque Abrau-Durso.</p>${postimg('waterpark.png')}`
    },
    sailing: {
        ru: `<p>Также вас будет ждать настоящая парусная регата с призовым фондом и профессиональной судейской бригадой. Участвовать могут и взрослые, и дети, своей командой или индивидуально. Если вам нужен рулевой, вам могут предоставить опытного капитана.</p>
        <p>Скучать будет некогда, ведь развлекательная программа включает в себя клубные вечеринки, танцы, в сопровождении с популярными диджеями. Тренировки, мастер-классы, уроки управления яхтой, экскурсии по самым интересным местам, драйв соревнований и отличная компания.</p>${postimg('sailing.png')}`,
        en: `<p>Also, a real sailing regatta with a prize fund and a professional judging team will be waiting for you. Both adults and children can participate, as a team or individually. If you need a helmsman, an experienced captain can be provided for you. </p>
        <p>There will be no time to be bored, because the entertainment program includes club parties and dances accompanied by popular DJs. Trainings, master classes, sailing lessons, excursions to the most interesting places, competition drive and great company - it's all here.</p>${postimg('sailing.png')}`
    },
    ewine: {
        ru: `<p>Любителям винного туризма предоставляется шанс проникнуться атмосферой винных тоннелей, и, конечно, продегустировать 6 знаменитых бокалов местных вин и шампанского. Именно в туннелях вы узнаете о происхождении, выращивании, уходу и производстве вина от начала и до конца. В процессе экскурсии приобретете навыки профессиональной дегустации.</p>
        <p>Для искушенных туристов присутствует VIP — экскурсия, которая даст вам в полной мере насладиться историей комплекса и вкусом вина в неформальные обстановки в небольшой туристической группе.
        Для того, чтобы понять, как выдерживаются вина и приобретают вкусовые оттенки — к вашим услугам экскурсия на терруар.</p>
        <p>В фирменном магазине предлагается широкий ассортимент известных и авторских вин, созданных на территории винзавода, расположенного по адресу ул. Промышленная, д.19, Абрау-Дюрсо.</p>
        ${postimg('ewine.png')}`,
        en: `<p>Wine tourism lovers have a chance to feel the atmosphere of wine tunnels, and, of course, taste 6 famous glasses of local wines and champagne.  In the tunnels you will learn about the origin, cultivation, care and production of wine from start to finish. During the tour you will acquire the skills of professional tasting.</p>
        <p>For sophisticated tourists, there is a VIP excursion that will allow you to fully enjoy the history of the complex and the taste of wine in an informal setting in a small tourist group.</p>
        <p>In order to understand how wines are aged and acquire flavors, we offer a tour of the terroir.
        The specialized store offers a wide range of famous and author's wines created on the territory of the winery which is located on st. Promyshlennaya, 19, Abrau-Durso.</p>
        ${postimg('ewine.png')}`
    }


}

recommendplaces = [
    {
        title: {
            ru: 'Утро',
            en: 'Morning'
        }, elements: [
            {
                ru: 'Фудкорт в Абрау-Дюрсо',
                en: 'Food court in Abrau-Durso',
                preview: 'food.png',
                id: 'foodcort'
            },
            {
                ru: 'Petit Cafe',
                en: 'Petit Cafe',
                preview: 'petit.png',
                id: 'petit'
            },            
            {
                ru: 'Экотуризм',
                en: 'Eco-tourism',
                preview: 'ecotur.png',
                id: 'ecotur'
            },
            {
                ru: 'Арт-базар',
                en: 'Art market',
                preview: 'artbaz.png',
                id: 'artbaz'
            },
            {
                ru: 'Водный парк',
                en: 'Water park',
                preview: 'waterpark.png',
                id: 'waterpark'
            },
            {
                ru: 'Abrau Sailing',
                en: 'Abrau Sailing',
                preview: 'sailing.png',
                id: 'sailing'
            },
            {
                ru: 'Экскурсия по винодельне',
                en: 'Excursion around winery',
                preview: 'ewine.png',
                id: 'ewine'
            },
        ]
    }
    ,{
        title: {
            ru: 'День',
            en: 'Day'
        }, 
        text: {
            ru: '',
            en: ''
        },
        elements: [
            {
                ru: 'Озеро Бам',
                en: 'Lake Bam',
                preview: 'ozbam.jpg',
                id: 'ozbam'
            }, 
            {
                ru: 'Старая лестница Абрау',
                en: 'Abrau’s old ladder',
                preview: 'lest.jpg',
                id: 'lest'
            },
            {
                ru: 'Уcадьба “Круглое Озеро”',
                en: 'The Estate “Round Lake”',
                preview: 'uclt.jpg',
                id: 'ucl'
            },
            {
                ru: 'Бутик-отель “Империал”',
                en: '“Imperial” Boutique hotel',
                preview: 'bimp.jpg',
                id: 'bimp'
            },            
            {
                ru: 'Champagne SPA',
                en: 'Champagne SPA',
                preview: 'chs.jpg',
                id: 'chs'
            },
            {
                ru: 'Ресторан “Империал”',
                en: 'Restaurant “Imperial”',
                preview: 'rimp.jpg',
                id: 'rimp'
            },            
        ]
    },
    {
        title: {
            
            ru: 'Вечер',
            en: 'Evening'
        },

        
        elements: [
            
            {
                ru: 'Амфитеатр',
                en: 'Abrau Amphitheatre',
                preview: 'amfi.png',
                id: 'amfi'
            },
            {
                ru: 'Галлерея света Абрау',
                en: 'Abrau Light Gallery',
                preview: 'lgal.png',
                id: 'lgal'
            },
            {
                ru: 'Шоу фонтанов',
                en: 'The Abrau Fountain Show',
                preview: 'sf1.png',
                id: 'sf'
            },
            {
                ru: 'Гранд–кафе “Абрау-Дюрсо”',
                en: 'Grand-Cafe “Abrau-Durso”',
                preview: 'gcabT.jpg',
                id: 'gcab'
            },
            {
                ru: 'Ресторан “Вилла Роз”',
                en: '“Villa Roz” restaurant',
                preview: 'vr1.jpg',
                id: 'vr'
            },


        ]

    }, 
]

translations_ids = [
    {
        name: 'Русский 🇷🇺',
        id: 'ru'
    },
    {
        name: 'English 🇬🇧',
        id: 'en'
    },
]

header = [
    {
        id: 'headerel_about',
        dir: '#ptv'
    },
    {
        id: 'headerel_photo',
        dir: '#ptv'
    },

    
]