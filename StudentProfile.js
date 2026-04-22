function createStudentProfile(){
    function getStudentName(){
        return "Sarabi";
    }
    function getAge(){
        return 20;
    }
    function getCountry(){
        return "Kenya"
    }
    function getFavoriteLanguage(){
        return "Python"
    }
    function getSchoolName(){
        return "Banda School";
    }
    return (getStudentName()+ " is " + getAge()+ " years old, comes from "+ getCountry() + " and is learning " + getFavoriteLanguage()+ " at " + getSchoolName());
}
let profile=createStudentProfile();
console.log(profile);