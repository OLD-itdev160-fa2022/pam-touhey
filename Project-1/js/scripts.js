(function() {

    //package data array (Add in Data)
    var data = [
        {
            name: 'Judoon',
            description: 'Judoon are rhinoform humanoids that frequently work as a mercenary police force that regularly work for the Shadow Proclamation.',
            planet: 'Judoonia',
            catchphrase: 'So po blo co flo œ ro ho kro no plo',
            appearance: 'Space Rhinos',
            selector: 'p1'
        },
        {
            name: 'Daleks',
            description: 'Daleks were the mangled and mutated remains of the Kaled people, placed in metal war machines by their chief scientist Davros.',
            planet: 'Skaro',
            catchphrase: 'Exterminate',
            appearance: 'Human-sized pepper pots with a whisk and a sink plunger',
            selector: 'p2'
        },
        {
            name: 'Cybermen',
            description: "Originally born on Earth's twin planet Mondas, the Cybermen were created as the Mondasians replaced parts of their dying bodies with plastic and steel.",
            planet: 'Mondas',
            catchphrase: 'You will be upgraded',
            appearance: 'Cyborgs',
            selector: 'p3'
        }
    ];

//Package constructor function ***remember to capitalize the function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.planet = data.planet;
    this.catchphrase = data.catchphrase;
    this.appearance = data.appearance;
    this.selector = data.selector;

    this.getFormattedPlanet = function () {
        return this.planet.toLocaleString();
    };

    this.getFormattedCatchphrase = function () {
        return this.catchphrase.toLocaleString();
    };
}

    //Return today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };
    
    //return DOM element by id
    var getEl = function(id) {
        return document.getElementById(id);
    };

    //write's the package object's data to the 
    //appropriate DOM elements utilizing the package selector property.
    var writePackageInfo = function (package) {
        //get reference tp Dom elements
        var selector =package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            planEl = getEl(selector + '-planet'),
            catcEl = getEl(selector + '-catchphrase'),
            appeEl = getEl(selector + '-appearance');

        //write package to the DOM Elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        planEl.textContent = package.planet;
        catcEl.textContent = package.catchphrase;
        appeEl.textContent = package.appearance;
    };


    //write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //Write package data one-by-one
    var judoon = new Package(data[0]);
    writePackageInfo(judoon);

    var daleks = new Package(data[1]);
    writePackageInfo(daleks);

    var cybermen = new Package(data[2]);
    writePackageInfo(cybermen);

/*
    //package data array (for the table)
        var data = [
            {
                regeneration: '9th Doctor',
                actor: 'Christopher Eccleston',
                selector: 'p1'
            },
            {
                regeneration: '10th Doctor',
                actor: 'David Tenannt',
                selector: 'p2'
            }
        ];

        function Package(data) {
            this.regeneration = data.regeneration;
            this.actor = data.actor;
            this.selector = data.selector;
        }

    //return DOM element by id
    var getEl = function(id) {
        return document.getElementById(id);
    };

    var writePackageInfo = function (package) {
        //get reference tp Dom elements
        var selector =package.selector,
            regeEl = getEl(selector + '-regeneration');
            actoEl = getEl(selector + '-actor);

        //write package to the DOM Elements
        regeEl.textContent = package.regeneration;
        actoEl.textContent = package.actor;
    };

    //Write package data one-by-one
    var 9th Doctor = new Package(data[0]);
    writePackageInfo(9th Doctor);
*/
}());