
const { readFile } = require('fs');
const { result } = require('lodash');

const getText = (path) => {

    return new Promise((resolve, reject) => {

        readFile(
            path, 'utf8',
            (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })

    })

}


getText('./FileReadWrite/first.txt')
    .then(result => console.log(result))
    .catch((err) => console.log(err));
