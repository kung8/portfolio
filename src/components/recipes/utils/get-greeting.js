const getGreetings = () => {
    const greetings = [
        'What\'s cooking?',
        'Bon appétit!',
        'Savor every bite!',
        'Feast well!',
        'Dig in!',
        'Taste the joy!',
        'Love at first bite!',
        'Happy cooking!',
        'Happy eating!',
        'Feast away!',
        'Yum!',
        'Enjoy every bite!',
        'Food is our love language!',
        'Eat good, feel good!',
        'Satisfy your cravings in style!',
        'Home is wherever food is!',
        'Food for the soul, flavor for the senses!',
    ];

    return greetings;
}

export const getGreeting = () => {
    const greetings = getGreetings();
    return greetings[Math.floor(Math.random() * greetings.length)];
}