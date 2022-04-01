
let user = {
    name : 'Shahadat', 
    age: 19,
    email: "shahadat15-13593@diu.ed.bd",
    location: 'Bnagladesh',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('The user logged in.');

    },

    logout:function(){
        console.log('The user logged out.');

      
    },
  
logBlog: function(){
   // console.log(this.blogs);
   console.log('This user has written the following blogs:');
   this.blogs.forEach(blog => {
       console.log(blog);
   })
}

}; 



user.logBlog();

console.log(this);