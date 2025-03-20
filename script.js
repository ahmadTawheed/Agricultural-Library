const cardsData = [
    {
        imageUrl: 'img/img1.png',
        title: 'المحاصيل الزراعية',
        link: 'https://ahmadtawheedd.github.io/crops/'
    },
    {
        imageUrl: 'img/ipm.png',
        title: 'IPM',
        link: 'https://ahmadtawheedd.github.io/ipm/'
    },
    {
        imageUrl: 'img/img2.png',
        title: 'الآفات الحشرية',
        link: 'https://ahmadtawheedd.github.io/pestcides/'
    },
    {
        imageUrl: 'img/img3.png',
        title: 'الأمراض المعدية',
        link: 'https://ahmadtawheedd.github.io/desiase/'
    },
    {
        imageUrl: 'img/img4.png',
        title: 'الأمراض الغير المعدية',
        link: 'https://ahmadtawheedd.github.io/undesiase/'
    },
    {
        imageUrl: 'img/img5.png',
        title: 'الري والتسميد',
        link: 'https://ahmadtawheedd.github.io/feltrization/'
    },
        {
        imageUrl: 'img/img6.png',
        title: 'المبيدات الزراعية',
        link: 'https://ahmadtawheedd.github.io/pest/'
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
