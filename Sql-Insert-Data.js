// >> INSERT TABLE GENRES <<

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('movieSystem.sqlite');

// const genresData = [
//   [1, 'Action'],
//   [2, 'Adventure'],
//   [3, 'Comedy'],
//   [7, 'History'],
//   [9, 'Mystery'],
//   [10, 'Romance'],
//   [11, 'Sci-fi'],
//   [12, 'Thriller'],
//   [13, 'Western']
// ];

// const genresInsert = db.prepare('INSERT INTO Genres VALUES (?, ?)');
// genresData.forEach(data => genresInsert.run(data));
// genresInsert.finalize();

// db.close();

//================================================================================================================

// >> DELETE DATA TABLE MOVIES <<

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('movieSystem.sqlite');

// db.run('DELETE FROM Movies');
// db.run('DELETE FROM Genres');

// db.close();

//================================================================================================================

// >> INSERT TABLE MOVIES <<

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('movieSystem.sqlite');

const moviesData = [
    [1, 'Inception', '2010-07-16', 11, '../images/MoviesImg/Inception.jpg',
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.'
    ],
    [2, 'The Dark Knight', '2008-07-18', 1, '../images/MoviesImg/The Dark Knight.jpg',
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
    ],
    [3, 'Interstellar', '2014-11-07', 11, '../images/MoviesImg/Interstellar.jpg',
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
    ],
    [4, 'Forrest Gump', '1994-07-06', 3, '../images/MoviesImg/Forrest Gump.jpg',
        'The history of the United States from the 1950s to the 70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.'
    ],
    [5, 'The Shawshank Redemption', '1994-09-10', 12, '../images/MoviesImg/The Shawshank.jpg',
        'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.'
    ],
    [6, 'The Godfather', '1972-03-24', 7, '../images/MoviesImg/The Godfather.jpg',
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    ],
    [7, 'Pulp Fiction', '1994-10-14', 12, '../images/MoviesImg/Pulp Fiction.jpg',
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    ],
    [8, 'The Lord of the Rings: The Fellowship of the Ring', '2001-12-19', 2, '../images/MoviesImg/The Lord of the Rings.png',
        'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'
    ],
    [9, 'The Lion King', '1994-06-15', 1, '../images/MoviesImg/The Lion King.jpg',
        'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.'
    ],
    [10, 'Schindler\'s List', '1993-12-15', 7, '../images/MoviesImg/Schindler s List.jpg',
        'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.'
    ],
    [11, 'Fight Club', '1999-10-15', 12, '../images/MoviesImg/Fight Club.jpg',
        'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.'
    ],
    [12, 'The Matrix Reloaded', '2003-05-15', 11, '../images/MoviesImg/The Matrix Reloaded.jpg',
        'Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.'
    ],
    [13, 'The Matrix Revolutions', '2003-11-05', 11, '../images/MoviesImg/The Matrix Revolutions.jpg',
        'The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.'
    ],
    [14, 'Jurassic Park', '1993-06-11', 2, '../images/MoviesImg/Jurassic Park.jpg',
        'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park is cloned dinosaurs to run loose.'
    ],
    [15, 'The Terminator', '1984-10-26', 1, '../images/MoviesImg/The Terminator.jpg',
        'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity is future salvation.'
    ],
    [16, 'Casablanca', '1942-11-26', 10, '../images/MoviesImg/Casablanca.jpg',
        'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.'
    ],
    [17, 'Gone with the Wind', '1939-12-15', 10, '../images/MoviesImg/Gone with the Wind.jpg',
        'A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.'
    ],
    [18, 'Citizen Kane', '1941-05-01', 10, '../images/MoviesImg/Citizen Kane.jpg',
        'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: Rosebud.'
    ],
    [19, 'E.T. the Extra-Terrestrial', '1982-06-11', 11, '../images/MoviesImg/E.T. the Extra-Terrestrial.jpg',
        'A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.'
    ],
    [20, 'Avatar', '2009-12-18', 2, '../images/MoviesImg/Avatar.jpg',
        'A young boy known as the Avatar must master the four elemental powers to save the world, and fight against an enemy bent on stopping him.'
    ],
];

db.run('CREATE TABLE IF NOT EXISTS Movies (MoviesID INTEGER PRIMARY KEY, Title TEXT, ReleaseDate TEXT, Image IMAGE NOT NULL, Synopsis TEXT, FOREIGN KEY(GenresID) REFERENCES Genres(GenresID))');

const moviesInsert = db.prepare('INSERT INTO Movies VALUES (?, ?, ?, ?, ?, ?)');
moviesData.forEach(data => moviesInsert.run(data));
moviesInsert.finalize();

db.close();

//================================================================================================================