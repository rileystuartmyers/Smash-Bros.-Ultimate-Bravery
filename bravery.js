function myFunction() {
                const characters = ["Mario", "Donkey Kong", "Link", "Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Dark Samus", "Luigi", 
                "Ness", "Captain Falcon", "Jigglypuff", "Princess Peach", "Princess Daisy", "Bowser", "Ice Climbers", "Sheik", "Princess Zelda", "Dr. Mario", 
                "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", 
                "Zero Suit Samus", "Wario", "Snake", "Ike", "Charizard", "Bulbasaur", "Squirtle", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", 
                "R.O.B", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina", "Little Mac", "Greninja", "Palutena", "Pac-Man", "Robin", "Shulk", 
                "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", 
                "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Piranha Plant", "Joker", "Hero", "Banjo and Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", 
                "Pyra", "Mythra", "Kazuya", "Sora"];

                const charactersnodlc = ["Mario", "Donkey Kong", "Link", "Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Dark Samus", "Luigi", 
                "Ness", "Captain Falcon", "Jigglypuff", "Princess Peach", "Princess Daisy", "Bowser", "Ice Climbers", "Sheik", "Princess Zelda", "Dr. Mario", 
                "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", 
                "Zero Suit Samus", "Wario", "Snake", "Ike", "Charizard", "Bulbasaur", "Squirtle", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", 
                "R.O.B", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina", "Little Mac", "Greninja", "Palutena", "Pac-Man", "Robin", "Shulk", 
                "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", 
                "Mii Brawler", "Mii Swordfighter", "Mii Gunner"];

                const moves = ["Jab", "Forward Tilt", "Up Tilt", "Down Tilt", "Up-Air", "Down-Air", "Forward-Air", "Back-Air", "Foward Smash", 
                "Down Smash", "Up Smash", "Neutral Special", "Up Special", "Down Special", "Side Special"];

                const lentils = ["Teabag after every kill", "SD at Start of Game", "Walk only", "Pinpoint: Missing a move means SD'ing", "Comeback: 1-Stock at Start of Game", "JV3: Win a game without getting hit"];

                const impossible = ["Mario & Down Special" , "Luigi & Down Taunt" , "Captain Falcon & Neutral Special" , "Snake & Box Taunt"]

                var genmoves;
                var gencharacters;
                var genlentils;
                var genimpossible;

                

                if (document.getElementById('con').checked == true && document.getElementById('dlc').checked == true) {
                    var gencharacters = characters[Math.floor(Math.random()*characters.length)];
                    var genmoves = moves[Math.floor(Math.random()*moves.length)];
                    var genlentils = " ";
                    var genimpossible = " ";
                }
                if (document.getElementById('con').checked == true && document.getElementById('nodlc').checked == true) {
                    var gencharacters = charactersnodlc[Math.floor(Math.random()*charactersnodlc.length)];
                    var genmoves = moves[Math.floor(Math.random()*moves.length)];
                    var genlentils = " ";
                    var genimpossible = " ";
                }

                if (document.getElementById('len').checked == true && document.getElementById('dlc').checked == true) {
                    var gencharacters = characters[Math.floor(Math.random()*characters.length)];
                    var genmoves = moves[Math.floor(Math.random()*moves.length)];
                    var genlentils = lentils[Math.floor(Math.random()*lentils.length)];
                    var genimpossible = " ";
                }
                if (document.getElementById('len').checked == true && document.getElementById('nodlc').checked == true) {
                    var gencharacters = charactersnodlc[Math.floor(Math.random()*charactersnodlc.length)];
                    var genmoves = moves[Math.floor(Math.random()*moves.length)];
                    var genlentils = lentils[Math.floor(Math.random()*lentils.length)];
                    var genimpossible = " ";
                }

                if (document.getElementById('imp').checked == true && document.getElementById('dlc').checked == true) {
                    var genimpossible = impossible[Math.floor(Math.random()*impossible.length)]
                    var genmoves = " "
                    var genlentils = " ";
                    var gencharacters = " ";
                }
                if (document.getElementById('imp').checked == true && document.getElementById('nodlc').checked == true) {
                    var genimpossible = impossible[Math.floor(Math.random()*impossible.length)];
                    var genmoves = " ";
                    var genlentils = " ";
                    var gencharacters = " ";
                }
                
                document.getElementById("charactersfinal").innerHTML = gencharacters;
                document.getElementById("movesfinal").innerHTML = genmoves;
                document.getElementById("lentilsfinal").innerHTML = genlentils;
                document.getElementById("impossiblefinal").innerHTML = genimpossible;
            }
