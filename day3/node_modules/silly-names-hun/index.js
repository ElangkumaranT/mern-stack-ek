const data = require('./names.json');


/**
 * This function returns a random name from the list of names in names.json. Based on the value of isApropriate, it can return a name that is apropriate, not apropriate or a random name.
 * @param {boolean} isApropriate If true, returnes a name that is apropriate. If false returnes a name that is not apropriate. If null, returnes a random name.
 * @returns {string} A random name from the list of names in names.json.
 */
function getRandomName(isApropriate=null,) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    if(isApropriate === null){
        return data[getRandomInt(data.length)].name;
    }
    else if(isApropriate === true){
        let found = false;
        while(!found){
            let name = data[getRandomInt(data.length)];
            if(name.isApropriate === true){
                found = true;
                return name.name;
            }
        }
    }
    else if(isApropriate === false){
        let found = false;
        while(!found){
            let name = data[getRandomInt(data.length)];
            if(name.isApropriate === false){
                found = true;
                return name.name;
            }
        }
    }

};

/**
 * This function returns the name at the nth position in the list of names in names.json.
 * @param {number} index - The position of the name in the list of names in names.json.
 * @returns {string} The name at the nth position in the list of names in names.json.
 */
function getNthName(index){
if(index > data.length){
    throw new Error(`There are only ${data.length} names in the list`);
}
return data[index].name;
};

/**
 * This function returns the length of the list of names in names.json.
 * @returns {number} The length of the list of names in names.json.
 */
function getNamesLength(){
    return data.length;
};


module.exports = {
    getRandomName,
    getNthName,
    getNamesLength
};