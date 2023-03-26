function postimg(path, width = false){
    if (width) {style = 'max-width: '+width+'px'}
    else {style = ''}
    return `<img src="media/${path}" alt="" class="pvimg" style="${style}">`
}

texts = {
    header_lang: {
        ru: 'English 🇬🇧',
        en: 'Русский 🇷🇺'
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
    


    city_titlename: {
        ru: 'Абрау-Дюрсо',
        en: 'Abrau-Durco'
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
        ru: 'Вечером Абрау вбирает в себя всё волшебство и становится еще более притягательным и надолго запоминающимся местом. Чтобы провести прекрасно вечер за ужином и получить массу положительных эмоций, туристам предлагается посетить знаменитые места Абрау',
        en: 'In the evening, Abrau absorbs all the magic and becomes even more attractive and memorable place. A lot of tourists are invited in Abrau-Durso to spend an unforgettable evening visiting such famous restaurants as'
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
        
        <h3>Также есть<h3>
        ${postimg('ucl2.png', 300)}${postimg('ucl3.png', 300)}${postimg('ucl4.png', 300)}${postimg('ucl1.png', 300)}
        <h3>Местоположение</h3>${postimg('gcabM.png')}`
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
        `
    },
    lest: {
        ru: `<h3>Если вы любите старую архитектуру или желаете прочувствовать атмосферу  того времени, вам следует посетить старую лестницу Абрау.</h3>
        <p>Ещё в прошлом веке (60-70 гг.) лестница имела достойный вид и, безусловно, являлась гордостью Абрау. Наверное, у каждого местного жителя в семейном альбоме имеется хоть одна фотография из прошлого с изображением знаменитой большой лестницы. Загляните в свои семейные альбомы! Местные любили фотографироваться именно на этой красивой чудо-лестнице возле симпатичных тумб с барельефами.</p>
        <p>Лестница в стиле сталинского ампира в Абрау-Дюрсо была построена в 1938 году. Сооружение пережило войну и блистало красотой в советские годы. Но в годы перестройки историческая достопримечательность не смогла выжить. Элементы декора разрушились, стали осыпаться.</p>
        <p>Все элементы лестницы – литые. Например, одна колона весит 150 килограммов, а каждая балясина - 25 килограммов. На реставрацию исторической лестницы выделено около 5 миллионов рублей из фонда «Жизнь Абрау-Дюрсо».</p>${postimg('lest.jpg')}
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
    }

}

recommendplaces = [
    {
        title: {
            ru: 'Рекомендуемые рестораны и отели',
            en: 'Recommended restaurants and hotels'
        },
        
        elements: [
            {
                ru: 'Ресторан “Вилла Роз”',
                en: '“Villa Roz” restaurant',
                preview: 'vr1.jpg',
                id: 'vr'
            },
            {
                ru: 'Гранд–кафе “Абрау-Дюрсо”',
                en: 'Grand-Cafe “Abrau-Durso”.',
                preview: 'gcabT.jpg',
                id: 'gcab'
            },
            {
                ru: 'Уадьба “Круглое Озеро”',
                preview: 'uclt.jpg',
                id: 'ucl'
            },

        ]

    }, 
    {
        title: {
            ru: 'Красивые и исторические места',
            en: 'Beautiful and historical places'
        }, 
        elements: [
            {
                ru: 'Галлерея света Абрау',
                en: 'Abrau Light Gallery',
                preview: 'lgal.png',
                id: 'lgal'
            },
            {
                ru: 'Амфитеатр',
                en: 'Abrau Amphitheatre',
                preview: 'amfi.png',
                id: 'amfi'
            },
            {
                ru: 'Шоу фонтанов',
                en: 'The Abrau Fountain Show',
                preview: 'sf1.png',
                id: 'sf'
            },
            {
                ru: 'Озеро Бам',
                preview: 'ozbam.jpg',
                id: 'ozbam'
            }, 
            {
                ru: 'Старая лестница Абрау',
                preview: 'lest.jpg',
                id: 'lest'
            }

        ]
    }
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
        dir: '#'
    },
    {
        id: 'headerel_photo',
        dir: '#ptv'
    },
    {
        id: 'headerel_undefined',
        dir: '#'
    },
    
]