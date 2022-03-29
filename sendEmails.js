const sendEmail = (arr) => {
    wantedObj = {};

    arr.forEach((el) => {
        let domainName = el.split("@")[1];
        let name = el.split("@")[0];

        if (wantedObj.hasOwnProperty(domainName)) {
            wantedObj[domainName].push(name);
            wantedObj[domainName].sort();
        } else {
            wantedObj[domainName] = [].concat(name);
        }
    });

    return Object.keys(wantedObj)
        .map((el) => {
            return wantedObj[el][0] + "@" + el;
        })
        .sort();
};

let testEmail = [
    "ghi@hotmail.com",
    "def@yahoo.com",
    "ghi@gmail.com",
    "abc@channelier.com",
    "abc@hotmail.com",
    "def@hotmail.com",
    "abc@gmail.com",
    "abc@yahoo.com",
    "def@channelier.com",
    "jkl@hotmail.com",
    "ghi@yahoo.com",
    "def@gmail.com",
];

console.log(sendEmail(testEmail));
