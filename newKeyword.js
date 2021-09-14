var User = function(fname,courseCount){
  this.fname  = fname;
  this.courseCount = courseCount;
  this.getCourseCount = function (){
    console.log(`course count is : ${this.courseCount}`)
  };
};

User.prototype.getFirstName = function () {
  console.log(`youre first name is : ${this.fname}`);
}

var meraj = new  User("meraj alam", 5);

meraj.getFirstName(); 
meraj.getCourseCount();


