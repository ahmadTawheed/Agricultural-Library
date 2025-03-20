const cardsData = [
    {
        imageUrl: 'img/img1.png',
        title: 'المحاصيل الزراعية',
        link: '../routs/crops/index.html'
    },
    {
        imageUrl: 'img/ipm.png',
        title: 'IPM',
        link: '../routs/ipm/index.html'
    },
    {
        imageUrl: 'img/img2.png',
        title: 'الآفات الحشرية',
        link: '../routs/pestcides/index.html'
    },
    {
        imageUrl: 'img/img3.png',
        title: 'الأمراض المعدية',
        link: '../routs/desiase/index.html'
    },
    {
        imageUrl: 'img/img4.png',
        title: 'الأمراض الغير المعدية',
        link: '../routs/undesiase/index.html'
    },
    {
        imageUrl: 'img/img5.png',
        title: 'الري والتسميد',
        link: '../routs/feltrization/index.html'
    },
        {
        imageUrl: 'img/img6.png',
        title: 'المبيدات الزراعية',
        link: '../routs/pest/index.html'
    },
        {
        imageUrl: 'img/img7.png',
        title: 'العيادة النباتية',
        link: '#'
    },

    // يمكنك إضافة المزيد من البطاقات هنا
];

const cardsContainer = document.querySelector('.cards-container');

cardsData.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img draggable="false" class="imgsec" src="${cardData.imageUrl}" alt="${cardData.title}">
        <div class="card-content">
            <h2>${cardData.title}</h2>
            <a href="${cardData.link}">اقرأ المزيد</a>
        </div>
    `;

    cardsContainer.appendChild(card);
});

var typed = new Typed(".secText",{
    strings : ["السلام عليك", "  في المكتبة الزراعية", "صلي على النبي",],
    typeSpeed : 90,
    backSpeed : 10,
    loop : true
});