const onload = () => {
    const $myArray = ['Your code is the driest', 'welcome to nology', 'happy friday'];
    //const random = Math.floor(Math.random()*3);
        $('button').click(function(){
            const index = Math.floor(Math.random() * 3);
            // console.log(affirmation);
            $('.affirmation').empty().append($myArray[index]);
            
            })
        }
    $(onload);
    // 1. make an array of affirmations
    // 2. generate a function for onclick, so that when you click the generate button an affirmation appears 
    // 3. using the array produce random affirmations upon click
    // const onload = () => {
    //     // const index = Math.floor(Math.random() * 20);
    //     const affirmations =  [
    //             "Every day and in every way I am getting better and better",
    //             "I am abundantly joyful and happy",
    //             "I am so grateful for my life",
    //             "I find beauty and joy in ordinary things",
    //             "My life is a joy filled with love, fun and friendship",
    //             "I remember myself as the master that I am, the master I have always been",
    //             "Everything in my life is exactly as it should be",
    //             "I am at peace. I trust in the process of life",
    //             "I am grateful for all that I am",
    //             "I feel God's love within me - and all around me",
    //             "Every day, in every way, my life gets better and better",
    //             "I radiate beauty and positive energy from deep within",
    //             "I am blossoming in perfection",
    //             "The more I love myself, the more love I have to give",
    //             "Life is good",
    //             "The more I relax, the better I feel, and the healthier I am",
    //             "I am perfectly healthy in body, mind, and emotions",
    //             "I am cool, calm and confident",
    //             "I am in full control of my body, mind and emotions",
    //             "Sometimes I don't see the whole picture. Yet I know everything will turn out fine",
    //             "With every breath I relax even more"
    //             ]
    //     $('button').click(function() {
    //         const index = Math.floor(Math.random() * 20);
    //         $('.affirmation').empty().append(affirmations [index]);
    //     })
    // }
    // $(onload);