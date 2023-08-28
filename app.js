const { createWorker, createScheduler } = require('tesseract.js');

const scanCard = async () => {
    // What is this used for?
    const scheduler = createScheduler();
    const worker1 = await createWorker();
    const worker2 = await createWorker();
    const worker3 = await createWorker();
    const rectangles = [
        // This will be the name
        {
            left: 125,
            top: 10,
            width: 200,
            height: 75,
        },
        // This will be the card set
        {
            left: 0,
            bottom: 0,
            width: 100,
            height: 100,
        },
        // This will be the card numbers
        {
            left: 0,
            bottom: 0,
            width: 50,
            height: 50,
        }
    ];

    (async () => {
        await worker1.loadLanguage('eng');
        await worker2.loadLanguage('eng');
        await worker3.loadLanguage('eng');
        await worker1.initialize('eng');
        await worker2.initialize('eng');
        await worker3.initialize('eng');
        scheduler.addWorker(worker1);
        scheduler.addWorker(worker2);
        scheduler.addWorker(worker3);
        const results = await Promise.all(rectangles.map((rectangle) => (
            scheduler.addJob('recognize', './assets/gloom.jpg', { rectangle })
        )));
        console.log(results.map(r => r.data.text));
        await scheduler.terminate();
    })();
};

scanCard();