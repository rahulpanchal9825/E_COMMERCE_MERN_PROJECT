const  bcrypt = require('bcrypt');

const hasPassword = async(password) =>{
    try {
        const saltrounds = 10;
        const haspassword = await bcrypt.hash(password,saltrounds);
        return haspassword;
    } catch (error) {
        console.log(error);
    }
}


const comparePassword = async(password,hasPassword) =>{
    return bcrypt.compare(password,hasPassword);
};

module.exports ={hasPassword,comparePassword};